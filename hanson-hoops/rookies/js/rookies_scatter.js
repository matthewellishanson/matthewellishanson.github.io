(() => {

const width = 900;
const height = 450;
const margin = { top: 30, right: 40, bottom: 40, left: 60 };

const svg = d3.select("#scatterChart")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .attr("height", height);

const tooltip = d3.select("#scatterTooltip");

d3.csv("data/rookie_points_scatter.csv", d3.autoType).then(raw => {

  console.log("Loaded rows:", raw.length);
  console.log("Sample:", raw.slice(0, 5));

  // Filter: rookies, >= 300 minutes
  const data = raw.filter(d => d.minutes >= 300 && d.pts_per_100 != null);

  console.log("After filter:", data.length);

  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.rookie_season))
    .nice()
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.pts_per_100))
    .nice()
    .range([height - margin.bottom, margin.top]);

  svg.selectAll("*").remove();

  // Axes
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // Labels
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 5)
    .attr("text-anchor", "middle")
    .text("Rookie Season");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("Points per 100 possessions");

  // Points
  svg.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", d => x(d.rookie_season))
    .attr("cy", d => y(d.pts_per_100))
    .attr("r", 3)
    .attr("fill", "#1f77b4")
    .attr("opacity", 0.7)
    .on("mouseover", (event, d) => {
      tooltip
        .style("opacity", 1)
        .html(`
          <strong>${d.player}</strong><br>
          Season: ${d.rookie_season}<br>
          Pts/100: ${d.pts_per_100.toFixed(1)}<br>
          Minutes: ${d.minutes}
        `)
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 20 + "px");
    })
    .on("mouseout", () => tooltip.style("opacity", 0));

});
})();
