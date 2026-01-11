(() => {
  const width = 1000;
  const height = 560;
  const margin = { top: 24, right: 40, bottom: 40, left: 170 };
  const topN = 11;
  const duration = 900;

  const svg = d3.select("#originsRace")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  const chart = svg.append("g");

  const x = d3.scaleLinear().range([margin.left, width - margin.right]);
  const y = d3.scaleBand().range([margin.top, height - margin.bottom]).padding(0.12);

  const xAxis = chart.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height - margin.bottom})`);

  const yAxis = chart.append("g")
    .attr("class", "y-axis")
    .attr("transform", `translate(${margin.left},0)`);

  const barsG = chart.append("g");
  const labelsG = chart.append("g");

  const restartButton = document.getElementById("originsRestart");
  const pauseButton = document.getElementById("originsPause");
  let ticker = null;
  let index = 0;

  const seasonLabel = chart.append("text")
    .attr("x", width - margin.right)
    .attr("y", height - margin.bottom - 6)
    .attr("text-anchor", "end")
    .attr("dominant-baseline", "ideographic")
    .attr("font-size", 36)
    .attr("fill", "#9ca3af")
    .attr("opacity", 0.6);

  d3.csv("data/rookie_origins_timeline.csv", d3.autoType).then(data => {
    const specials = new Set(["International", "US (no college)", "US Total"]);
    const seasons = Array.from(d3.group(data, d => d.season).keys()).sort(d3.ascending);
    const bySeason = d3.group(data, d => d.season);
    const maxCount = d3.max(data, d => d.count) || 0;

    const collegeOrigins = Array.from(
      new Set(data.filter(d => !specials.has(d.origin)).map(d => d.origin))
    ).sort();

    const collegeColors = d3.scaleOrdinal()
      .domain(collegeOrigins)
      .range(
        collegeOrigins.map((_, i) => {
          const t = collegeOrigins.length <= 1 ? 0.6 : i / (collegeOrigins.length - 1);
          return d3.interpolateYlGnBu(t);
        })
      );

    const defs = svg.append("defs");
    const stripe = defs.append("pattern")
      .attr("id", "us-total-stripe")
      .attr("patternUnits", "userSpaceOnUse")
      .attr("width", 8)
      .attr("height", 8)
      .attr("patternTransform", "rotate(45)");

    stripe.append("rect")
      .attr("width", 8)
      .attr("height", 8)
      .attr("fill", "#dbeafe");

    stripe.append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", 8)
      .attr("stroke", "#1e40af")
      .attr("stroke-width", 2);

    const color = origin => {
      if (origin === "International") {
        return "#f97316";
      }
      if (origin === "US (no college)") {
        return "#64748b";
      }
      if (origin === "US Total") {
        return "url(#us-total-stripe)";
      }
      return collegeColors(origin);
    };

    const legend = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top - 10})`);

    const legendItems = [
      { label: "Colleges (varied)", color: collegeOrigins[0] ? collegeColors(collegeOrigins[0]) : "#3b82f6" },
      { label: "US Total (colleges + US no college)", color: "url(#us-total-stripe)" },
      { label: "US (no college)", color: "#64748b" },
      { label: "International", color: "#f97316" },
    ];

    legend.selectAll("rect")
      .data(legendItems)
      .join("rect")
      .attr("x", (_, i) => i * 220)
      .attr("y", 0)
      .attr("width", 12)
      .attr("height", 12)
      .attr("rx", 2)
      .attr("fill", d => d.color);

    legend.selectAll("text")
      .data(legendItems)
      .join("text")
      .attr("x", (_, i) => i * 220 + 18)
      .attr("y", 10)
      .attr("font-size", 12)
      .attr("fill", "#374151")
      .text(d => d.label);

    const formatCount = d3.format("d");

    function frame(season) {
      const entries = (bySeason.get(season) || []).map(d => ({ ...d }));
      const colleges = entries.filter(d => !specials.has(d.origin));
      const specialEntries = entries.filter(d => specials.has(d.origin));

      colleges.sort((a, b) => d3.descending(a.count, b.count));
      const ranked = colleges.slice(0, 8).concat(specialEntries);
      ranked.sort((a, b) => d3.descending(a.count, b.count));
      const display = ranked.slice(0, topN);

      y.domain(display.map(d => d.origin));
      x.domain([0, maxCount]);

      xAxis.transition().duration(duration)
        .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0));

      yAxis.transition().duration(duration)
        .call(d3.axisLeft(y).tickSize(0).tickPadding(6));

      const bars = barsG.selectAll("rect")
        .data(display, d => d.origin);

      bars.join(
        enter => enter.append("rect")
          .attr("x", x(0))
          .attr("y", d => y(d.origin))
          .attr("height", y.bandwidth())
          .attr("width", 0)
          .attr("fill", d => color(d.origin))
          .attr("stroke", d => d.origin === "US Total" ? "#1e3a8a" : "none")
          .attr("stroke-width", d => d.origin === "US Total" ? 1.5 : 0)
          .call(enter => enter.transition().duration(duration)
            .attr("width", d => x(d.count) - x(0))),
        update => update.call(update => update.transition().duration(duration)
          .attr("y", d => y(d.origin))
          .attr("height", y.bandwidth())
          .attr("width", d => x(d.count) - x(0))
          .attr("fill", d => color(d.origin))
          .attr("stroke", d => d.origin === "US Total" ? "#1e3a8a" : "none")
          .attr("stroke-width", d => d.origin === "US Total" ? 1.5 : 0)),
        exit => exit.call(exit => exit.transition().duration(duration)
          .attr("width", 0)
          .remove())
      );

      const labels = labelsG.selectAll("text")
        .data(display, d => d.origin);

      labels.join(
        enter => enter.append("text")
          .attr("x", d => x(d.count) + 6)
          .attr("y", d => y(d.origin) + y.bandwidth() / 2)
          .attr("dy", "0.35em")
          .attr("font-size", 12)
          .attr("fill", "#111827")
          .attr("font-weight", d => d.origin === "US Total" ? 600 : 400)
          .text(d => formatCount(d.count))
          .call(enter => enter.transition().duration(duration)
            .attr("x", d => x(d.count) + 6)
            .attr("y", d => y(d.origin) + y.bandwidth() / 2)),
        update => update.call(update => update.transition().duration(duration)
          .attr("x", d => x(d.count) + 6)
          .attr("y", d => y(d.origin) + y.bandwidth() / 2)
          .attr("font-weight", d => d.origin === "US Total" ? 600 : 400)
          .text(d => formatCount(d.count))),
        exit => exit.call(exit => exit.transition().duration(duration)
          .attr("x", x(0))
          .remove())
      );

      seasonLabel.text(season);
    }

    function playFromCurrent() {
      if (ticker) {
        ticker.stop();
      }
      ticker = d3.interval(() => {
        index += 1;
        if (index >= seasons.length) {
          ticker.stop();
          ticker = null;
          if (pauseButton) {
            pauseButton.textContent = "Resume";
          }
          return;
        }
        frame(seasons[index]);
      }, duration + 200);
    }

    function startRace() {
      index = 0;
      frame(seasons[index]);
      if (pauseButton) {
        pauseButton.textContent = "Pause";
      }
      playFromCurrent();
    }

    startRace();

    if (restartButton) {
      restartButton.addEventListener("click", () => {
        startRace();
      });
    }

    if (pauseButton) {
      pauseButton.addEventListener("click", () => {
        if (ticker) {
          ticker.stop();
          ticker = null;
          pauseButton.textContent = "Resume";
          return;
        }
        if (index >= seasons.length - 1) {
          index = 0;
          frame(seasons[index]);
        }
        pauseButton.textContent = "Pause";
        playFromCurrent();
      });
    }
  });
})();
