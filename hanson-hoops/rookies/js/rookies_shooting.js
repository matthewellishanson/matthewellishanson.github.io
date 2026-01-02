(() => {

const width = 900;
const height = 450;
const margin = { top: 20, right: 80, bottom: 40, left: 60 };

const svg = d3.select("#shootingChart")
  .attr("viewBox", `0 0 ${width} ${height}`);

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
  rawData = data;
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
  let data = rawData.filter(d => d.shot_type === shotType);

  if (position !== "all") {
    data = data.filter(d => d.position_group === position);
  }

  const seasons = [...new Set(data.map(d => d.season))].sort(d3.ascending);

  const grouped = d3.group(data, d => d.metric);

  const series = metrics.map(m => ({
    metric: m,
    values: seasons.map(s => {
      const row = grouped.get(m)?.find(d => d.season === s);
      return { season: s, value: row ? row.value : null };
    })
  }));

  const x = d3.scaleLinear()
    .domain(d3.extent(seasons))
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(series, s => d3.max(s.values, d => d.value || 0))])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const line = d3.line()
    .defined(d => d.value != null)
    .x(d => x(d.season))
    .y(d => y(d.value));

  svg.selectAll("*").remove();

  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  svg.append("g")
    .selectAll("path")
    .data(series)
    .join("path")
    .attr("fill", "none")
    .attr("stroke", d => colors[d.metric])
    .attr("stroke-width", 2)
    .attr("d", d => line(d.values));

  series.forEach(s => {
    svg.append("g")
      .selectAll("circle")
      .data(s.values.filter(d => d.value != null))
      .join("circle")
      .attr("r", 3)
      .attr("fill", colors[s.metric])
      .attr("cx", d => x(d.season))
      .attr("cy", d => y(d.value))
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
