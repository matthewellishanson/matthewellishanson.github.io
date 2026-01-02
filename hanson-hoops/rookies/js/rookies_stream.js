(() => {

const width = 1000;
const height = 500;
const margin = { top: 20, right: 20, bottom: 40, left: 50 };

const svg = d3.select("#chart")
  .attr("viewBox", `0 0 ${width} ${height}`);

const tooltip = d3.select("#tooltip");

let rawData = [];
let metric = "minutes";
let positionFilter = "all";

d3.csv("data/rookie_height_stream_wide.csv", d3.autoType).then(data => {
  console.log("Loaded:", data.length);
  rawData = data;
  update();
});

d3.select("#metricSelect").on("change", e => {
  metric = e.target.value;
  update();
});

d3.select("#positionSelect").on("change", e => {
  positionFilter = e.target.value;
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

  const yLeft = d3.scaleLinear()
    .domain([
      0,
      d3.max(series.filter(s => s.metric !== "pct"),
        s => d3.max(s.values, d => d.value || 0))
    ])
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

  // Axes
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yLeft));

  svg.append("g")
    .attr("transform", `translate(${width - margin.right},0)`)
    .call(d3.axisRight(yRight).tickFormat(d3.format(".0%")));

  // Lines
  svg.append("g")
    .selectAll(".line")
    .data(series)
    .join("path")
    .attr("fill", "none")
    .attr("stroke", d => colors[d.metric])
    .attr("stroke-width", 2)
    .attr("d", d => d.metric === "pct" ? lineRight(d.values) : lineLeft(d.values));

  // Dots + tooltips
  series.forEach(s => {
    const yScale = s.metric === "pct" ? yRight : yLeft;

    svg.append("g")
      .selectAll("circle")
      .data(s.values.filter(d => d.value != null))
      .join("circle")
      .attr("r", 3)
      .attr("fill", colors[s.metric])
      .attr("cx", d => x(d.season))
      .attr("cy", d => yScale(d.value))
      .on("mouseover", (event, d) => {
        tooltip
          .style("opacity", 1)
          .html(`
            <strong>${s.metric.toUpperCase()}</strong><br>
            Season: ${d.season}<br>
            Value: ${s.metric === "pct" ? d3.format(".1%")(d.value) : d.value.toFixed(1)}
          `)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 20 + "px");
      })
      .on("mouseout", () => tooltip.style("opacity", 0));
  });

  // Legend
  const legend = svg.append("g")
    .attr("transform", `translate(${width - 120},${margin.top})`);

  metrics.forEach((m, i) => {
    const g = legend.append("g")
      .attr("transform", `translate(0,${i * 18})`);

    g.append("line")
      .attr("x1", 0).attr("x2", 20)
      .attr("y1", 10).attr("y2", 10)
      .attr("stroke", colors[m])
      .attr("stroke-width", 2);

    g.append("text")
      .attr("x", 25)
      .attr("y", 13)
      .text(m)
      .style("font-size", "12px");
  });
}


})();
