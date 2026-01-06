(() => {

const width = 900;
const height = 450;
const margin = { top: 30, right: 40, bottom: 40, left: 60 };

const svg = d3.select("#scatterChart")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .attr("height", height);

const tooltip = d3.select("#scatterTooltip");

const defaultColor = "#1f77b4";
const hoverColor = "#6f42c1"; // hanson-hoops purple

d3.csv("data/rookie_scatter_final_fixed.csv", d3.autoType).then(raw => {

  console.log("Loaded rows:", raw.length);
  console.log("Sample:", raw.slice(0, 5));

  const currentSeasons = d3.max(raw, d => d.rookie_season);

  const recent = raw.filter(d => d.rookie_season >= currentSeasons - 1);
  console.table(recent.map(d => ({
    player: d.player,
    season: d.rookie_season,
    minutes: d.minutes,
    pts_per_100: d.pts_per_100,
    usg_pct: d.usg_pct
  })));

  const data = raw.filter(d => {
    const isRecent = d.rookie_season >= currentSeasons - 1;

    if (isRecent) {
      return d.minutes != null && d.pts_per_100 != null;
    }

    return (
      d.minutes >= 300 &&
      d.pts_per_100 != null &&
      d.usg_pct != null &&
      !isNaN(d.usg_pct)
    );
  });


  console.log("After filter:", data.length);

  const seasonsAll = [...new Set(data.map(d => d.rookie_season))].sort(d3.ascending);

  const x = d3.scaleBand()
    .domain(seasonsAll)
    .range([margin.left, width - margin.right])
    .padding(0.2);

  // Pre-compute 80th percentile cutoff across all filtered rookies
  const ptsValues = data
    .map(d => d.pts_per_100)
    .filter(Number.isFinite)
    .sort(d3.ascending);
  const topCutoff = ptsValues.length ? d3.quantile(ptsValues, 0.8) : null;
  let showTopOnly = false;

  // ---- Radius scale (only from valid usage) ----
  const usageVals = data
    .map(d => +d.usg_pct)
    .filter(v => Number.isFinite(v));

  const r = d3.scaleSqrt()
    .domain(d3.extent(usageVals.length ? usageVals : [0, 1]))
    .range([2.5, 9]);

  function radius(d) {
    const v = +d.usg_pct;
    return Number.isFinite(v) ? r(v) : 4; // fallback radius for null usage (2025/2026)
  }

  // ---- Jitter helper ----
  function jitter() {
    return (Math.random() - 0.5) * x.bandwidth() * 0.6;
  }

  // ---- Toggle button (full vs top 20%) ----
  const chartParent = d3.select("#scatterChart").node().parentNode;
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "scatterTopToggle";
  toggleBtn.textContent = "Show top 20% (pts/100)";
  toggleBtn.style.marginBottom = "8px";
  toggleBtn.onclick = () => {
    showTopOnly = !showTopOnly;
    toggleBtn.textContent = showTopOnly ? "Show full dataset" : "Show top 20% (pts/100)";
    update();
  };
  chartParent.insertBefore(toggleBtn, document.getElementById("scatterChart"));

  function getActiveData() {
    if (!showTopOnly || topCutoff == null) return data;
    return data.filter(d => Number.isFinite(d.pts_per_100) && d.pts_per_100 >= topCutoff);
  }

  function update() {
    const active = getActiveData();

    const y = d3.scaleLinear()
      .domain(d3.extent((active.length ? active : data), d => d.pts_per_100))
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.selectAll("*").remove();

    // Axes
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickValues(seasonsAll.filter((d,i) => i % 2 === 0)));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Labels
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height - 5)
      .attr("text-anchor", "middle")
      .text("Rookie season");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .text("Points per 100 possessions");

    const points = svg.append("g")
      .selectAll("circle")
      .data(active, d => `${d.player_id ?? d.player}-${d.rookie_season}`)
      .join("circle")
      .attr("cx", d => {
        const base = x(d.rookie_season);
        return (base == null)
          ? -9999
          : base + x.bandwidth() / 2 + jitter();
      })
      .attr("cy", d => y(d.pts_per_100))
      .attr("r", d => radius(d))
      .attr("fill", defaultColor)
      .attr("opacity", 0.65);

    points
      .on("mouseover", function(event, d) {
        d3.select(this).attr("fill", hoverColor).attr("opacity", 1);

        const usageText = (d.usg_pct == null || isNaN(d.usg_pct))
          ? "n/a"
          : `${(+d.usg_pct).toFixed(1)}%`;

        tooltip.style("opacity", 1)
          .html(`
            <strong>${d.player}</strong><br>
            Season: ${d.rookie_season}<br>
            Usage: ${usageText}<br>
            Pts/100: ${(+d.pts_per_100).toFixed(1)}<br>
            Minutes: ${(+d.minutes).toFixed(0)}
          `)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 20 + "px");
      })
      .on("mouseout", function() {
        d3.select(this).attr("fill", defaultColor).attr("opacity", 0.65);
        tooltip.style("opacity", 0);
      })
      .on("click", function() {
        d3.select(this).attr("fill", hoverColor).attr("opacity", 1);
      });
  }

  update();

});
})();
