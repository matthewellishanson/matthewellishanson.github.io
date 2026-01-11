(() => {
  const width = 1000;
  const height = 560;
  const margin = { top: 30, right: 30, bottom: 60, left: 70 };

  const svg = d3.select("#wsScatterChart")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  const chart = svg.append("g");
  const tooltip = d3.select("#wsScatterTooltip");

  const xAxisG = chart.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`);
  const yAxisG = chart.append("g")
    .attr("transform", `translate(${margin.left},0)`);

  const xLabel = chart.append("text")
    .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
    .attr("y", height - 18)
    .attr("text-anchor", "middle")
    .attr("font-size", 12)
    .attr("fill", "#374151");

  const yLabel = chart.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -((height - margin.top - margin.bottom) / 2 + margin.top))
    .attr("y", 18)
    .attr("text-anchor", "middle")
    .attr("font-size", 12)
    .attr("fill", "#374151");

  const fields = {
    "WS": "Win Shares",
    "PER": "PER",
    "ORtg": "ORtg",
    "DRtg": "DRtg",
    "BPM": "BPM",
    "USG%": "USG%",
  };

  const formatters = {
    "WS": d3.format(".1f"),
    "PER": d3.format(".1f"),
    "ORtg": d3.format(".0f"),
    "DRtg": d3.format(".0f"),
    "BPM": d3.format(".1f"),
    "USG%": d3.format(".1f"),
  };

  function formatValue(field, value) {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return "n/a";
    }
    const formatter = formatters[field] || d3.format(".2f");
    return formatter(value);
  }

  d3.csv("data/top_rookies_by_ws.csv", d3.autoType).then(data => {
    const cleaned = data.filter(d => d.Player);

    const xSelect = document.getElementById("wsScatterX");
    const ySelect = document.getElementById("wsScatterY");

    const x = d3.scaleLinear().range([margin.left, width - margin.right]);
    const y = d3.scaleLinear().range([height - margin.bottom, margin.top]);

    function update() {
      const xField = xSelect.value;
      const yField = ySelect.value;

      const xExtent = d3.extent(cleaned, d => d[xField]);
      const yExtent = d3.extent(cleaned, d => d[yField]);

      x.domain(xExtent).nice();
      y.domain(yExtent).nice();

      xAxisG.transition().duration(600)
        .call(d3.axisBottom(x).ticks(6));
      yAxisG.transition().duration(600)
        .call(d3.axisLeft(y).ticks(6));

      xLabel.text(fields[xField] || xField);
      yLabel.text(fields[yField] || yField);

      const dots = chart.selectAll("circle")
        .data(cleaned, d => `${d.Player}-${d["Draft Year"]}`);

      dots.join(
        enter => enter.append("circle")
          .attr("cx", d => x(d[xField]))
          .attr("cy", d => y(d[yField]))
          .attr("r", 0)
          .attr("fill", "#2563eb")
          .attr("opacity", 0.75)
          .attr("stroke", "#1e3a8a")
          .attr("stroke-width", 0.6)
          .call(enter => enter.transition().duration(600)
            .attr("r", 5)),
        update => update.call(update => update.transition().duration(600)
          .attr("cx", d => x(d[xField]))
          .attr("cy", d => y(d[yField]))),
        exit => exit.call(exit => exit.transition().duration(300)
          .attr("r", 0)
          .remove())
      );

      chart.selectAll("circle")
        .on("mousemove", (event, d) => {
          const html = `
            <strong>${d.Player}</strong><br/>
            Draft Year: ${d["Draft Year"] || "n/a"}<br/>
            WS: ${formatValue("WS", d.WS)}<br/>
            PER: ${formatValue("PER", d.PER)}<br/>
            ORtg: ${formatValue("ORtg", d.ORtg)}<br/>
            DRtg: ${formatValue("DRtg", d.DRtg)}<br/>
            BPM: ${formatValue("BPM", d.BPM)}<br/>
            USG%: ${formatValue("USG%", d["USG%"])}
          `;
          tooltip
            .html(html)
            .style("opacity", 1)
            .style("left", `${event.pageX + 12}px`)
            .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseleave", () => {
          tooltip.style("opacity", 0);
        });
    }

    xSelect.addEventListener("change", update);
    ySelect.addEventListener("change", update);

    update();
  });
})();
