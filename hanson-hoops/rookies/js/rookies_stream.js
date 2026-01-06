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

d3.csv("data/rookie_height_stream_wide_v2.csv", d3.autoType).then(data => {
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
  let data = rawData;

  if (positionFilter !== "all") {
    data = data.filter(d => d.position_group === positionFilter);
  }

  const seasons = [...new Set(data.map(d => d.season))].sort(d3.ascending);
  const heights = [...new Set(data.map(d => d.height_in))].sort(d3.ascending);

  const nested = d3.rollup(
    data,
    v => d3.sum(v, d => d[metric] || 0),
    d => d.season,
    d => d.height_in
  );

  const stackedData = seasons.map(y => {
    const row = { season: y };
    heights.forEach(h => row[h] = nested.get(y)?.get(h) || 0);
    return row;
  });

  const stack = d3.stack()
    .keys(heights)
    .offset(d3.stackOffsetWiggle);

  const series = stack(stackedData);

  const x = d3.scaleLinear()
    .domain(d3.extent(seasons))
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([
      d3.min(series, s => d3.min(s, d => d[0])),
      d3.max(series, s => d3.max(s, d => d[1]))
    ])
    .range([height - margin.bottom, margin.top]);

  const area = d3.area()
    .x(d => x(d.data.season))
    .y0(d => y(d[0]))
    .y1(d => y(d[1]))
    .curve(d3.curveBasis);

  svg.selectAll("*").remove();

  svg.append("g")
    .selectAll("path")
    .data(series)
    .join("path")
    .attr("fill", (d,i) => d3.interpolateTurbo(i / heights.length))
    .attr("d", area);

  // ---- Gradient Legend ----
  const legendWidth = 160;
  const legendHeight = 12;

  const legendGroup = svg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width - legendWidth - 20}, ${margin.top})`);

  const defs = svg.append("defs");

  const gradient = defs.append("linearGradient")
    .attr("id", "height-gradient")
    .attr("x1", "0%")
    .attr("x2", "100%");

  gradient.selectAll("stop")
    .data(d3.range(0, 1.01, 0.1))
    .join("stop")
    .attr("offset", d => `${d * 100}%`)
    .attr("stop-color", d => d3.interpolateTurbo(d));

  legendGroup.append("rect")
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#height-gradient)");

  legendGroup.append("text")
    .attr("x", 0)
    .attr("y", -4)
    .text("Shorter")
    .style("font-size", "11px");

  legendGroup.append("text")
    .attr("x", legendWidth)
    .attr("y", -4)
    .attr("text-anchor", "end")
    .text("Taller")
    .style("font-size", "11px");

  legendGroup.append("text")
    .attr("x", legendWidth / 2)
    .attr("y", legendHeight + 12)
    .attr("text-anchor", "middle")
    .text("Player height distribution")
    .style("font-size", "11px");

  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));
}

})();
