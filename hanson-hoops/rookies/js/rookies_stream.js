const width = 1000;
const height = 500;
const margin = { top: 20, right: 20, bottom: 40, left: 50 };

const svg = d3.select("#chart")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", `0 0 ${width} ${height}`);

const tooltip = d3.select("#tooltip");

let rawData = [];
let metric = "minutes";
let positionFilter = "all";

d3.csv("data/rookie_height_stream_wide.csv", d3.autoType).then(data => {
  console.log("Loaded rows:", data.length);
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
  if (!rawData.length) return;

  let data = rawData;

  if (positionFilter !== "all") {
    data = data.filter(d => d.position_group === positionFilter);
  }

  const seasons = [...new Set(data.map(d => d.season))].sort(d3.ascending);
  const heights = [...new Set(data.map(d => d.height_in))].sort(d3.ascending).map(String);

  const nested = d3.rollup(
    data,
    v => d3.sum(v, d => d[metric] || 0),
    d => d.season,
    d => String(d.height_in)
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

  const x = d3.scalePoint()
    .domain(seasons)
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([
      d3.min(series, s => d3.min(s, d => d[0])),
      d3.max(series, s => d3.max(s, d => d[1]))
    ])
    .nice()
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
    .attr("fill-opacity", 0.85)
    .attr("stroke", "white")
    .attr("stroke-width", 0.2)
    .attr("d", area)
    .on("mousemove", (event, d) => {
      const [mx] = d3.pointer(event);
      const season = x.domain().reduce((a,b) =>
        Math.abs(x(b) - mx) < Math.abs(x(a) - mx) ? b : a
      );

      tooltip
        .style("opacity", 1)
        .html(`Height: ${d.key}"<br>Season: ${season}`)
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 20 + "px");
    })
    .on("mouseout", () => tooltip.style("opacity", 0));

  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(5));
}
