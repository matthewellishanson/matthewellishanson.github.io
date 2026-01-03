(() => {

const width = 900;
const height = 450;
const margin = { top: 20, right: 80, bottom: 40, left: 60 };

const svg = d3.select("#shootingChart")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .attr("height", height);

const tooltip = d3.select("#shootingTooltip");

let rawData = [];
let shotType = "fg";
let position = "all";

const metrics = ["attempts", "makes", "pct"];
const colors = {
  attempts: "#1f77b4",
  makes: "#2ca02c",
  pct: "#d62728"
};

d3.csv("data/rookie_shooting_stream.csv", d3.autoType).then(data => {
  rawData = data.map(d => ({
    ...d,
    position_simple:
      d.position_group.includes("Guard") ? "Guard" :
      d.position_group.includes("Forward") ? "Forward" :
      d.position_group.includes("Center") ? "Center" : d.position_group
  }));

  window._rawData = rawData;   // 👈 expose it
  console.log("Exposed _rawData:", rawData.length);

  update();
});

d3.select("#shootingShotSelect").on("change", e => {
  shotType = e.target.value;
  update();
});

d3.select("#shootingPositionSelect").on("change", e => {
  position = e.target.value;
  update();
});

function update() {
  console.log("raw:", rawData.length);

  let data = rawData.filter(d => d.shot_type === shotType);
  console.log("after shot:", data.length);

  if (position !== "all") {
    data = data.filter(d => d.position_simple === position);
  }
  console.log("after pos:", data.length);

  if (!data.length) {
    svg.selectAll("*").remove();
    return;
  }

  const seasons = [...new Set(data.map(d => d.season))].sort(d3.ascending);

  // confirm x domain
  console.log("seasons:", seasons.slice(0,5), "...", seasons.length);

  const grouped = d3.group(data, d => d.metric, d => d.season);

  const series = metrics.map(metric => ({
    metric,
    values: seasons.map(season => {
      const rows = grouped.get(metric)?.get(season);
      return {
        season,
        value: rows ? d3.mean(rows, r => r.value) : null
      };
    })
  }));



  const x = d3.scaleLinear()
    .domain(d3.extent(seasons))
    .range([margin.left, width - margin.right]);

  const yLeft = d3.scaleLinear()
    .domain([0, d3.max(series.filter(s => s.metric !== "pct"),
      s => d3.max(s.values, d => d.value || 0))])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const yRight = d3.scaleLinear()
    .domain([0, 1])
    .range([height - margin.bottom, margin.top]);

  const lineLeft = d3.line()
    .defined(d => d.value != null)
    .x(d => x(d.season))
    .y(d => yLeft(d.value));

  const lineRight = d3.line()
    .defined(d => d.value != null)
    .x(d => x(d.season))
    .y(d => yRight(d.value));


  svg.selectAll("*").remove();

  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  svg.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(yLeft));

  svg.append("g")
  .attr("transform", `translate(${width - margin.right},0)`)
  .call(d3.axisRight(yRight).tickFormat(d3.format(".0%")));

  svg.append("g")
    .selectAll("path")
    .data(series)
    .join("path")
    .attr("fill", "none")
    .attr("stroke", d => colors[d.metric])
    .attr("stroke-width", 2)
    .attr("d", d => d.metric === "pct" ? lineRight(d.values) : lineLeft(d.values));

  series.forEach(s => {
    svg.append("g")
      .selectAll("circle")
      .data(s.values.filter(d => d.value != null))
      .join("circle")
      .attr("r", 3)
      .attr("fill", colors[s.metric])
      .attr("cx", d => x(d.season))
      .attr("cy", d => s.metric === "pct" ? yRight(d.value) : yLeft(d.value))
      .on("mouseover", (event, d) => {
        tooltip
          .style("opacity", 1)
          .html(`<strong>${s.metric.toUpperCase()}</strong><br>Season: ${d.season}<br>Value: ${d.value.toFixed(3)}`)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 20 + "px");
      })
      .on("mouseout", () => tooltip.style("opacity", 0));
  });
}

})();
