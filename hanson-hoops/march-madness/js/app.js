const bracketPanel = document.getElementById("bracket-panel");
const matchupTitle = document.getElementById("matchup-title");
const matchupKicker = document.getElementById("matchup-kicker");
const pickBadge = document.getElementById("pick-badge");
const confidenceBadge = document.getElementById("confidence-badge");
const upsetBadge = document.getElementById("upset-badge");
const quickFactsGrid = document.getElementById("quick-facts-grid");
const team1WhyTitle = document.getElementById("team1-why-title");
const team1WhyText = document.getElementById("team1-why-text");
const team2WhyTitle = document.getElementById("team2-why-title");
const team2WhyText = document.getElementById("team2-why-text");
const swingFactorText = document.getElementById("swing-factor-text");
const playerCards = document.getElementById("player-cards");
const statsCompareHeader = document.getElementById("stats-compare-header");
const statsCompareBody = document.getElementById("stats-compare-body");

let activeGameId = bracketData.regions[0].games[0].id;

function renderBracket() {
  bracketPanel.innerHTML = bracketData.regions.map(region => `
    <div class="region" data-region="${region.slug}">
      <h3>${region.name}</h3>
      <div class="region-games">
        ${region.games.map(game => `
          <button
            class="matchup-node ${game.id === activeGameId ? "active" : ""}"
            data-game-id="${game.id}"
          >
            <span class="seed">${game.team1.seed}</span>
            <span class="team">${game.team1.shortName}</span>
            <span class="vs">vs</span>
            <span class="seed">${game.team2.seed}</span>
            <span class="team">${game.team2.shortName}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".matchup-node").forEach(btn => {
    btn.addEventListener("click", () => {
      activeGameId = btn.dataset.gameId;
      renderBracket();
      renderMatchup(findGameById(activeGameId));
    });
  });
}

function findGameById(gameId) {
  for (const region of bracketData.regions) {
    for (const game of region.games) {
      if (game.id === gameId) {
        return { ...game, regionName: region.name };
      }
    }
  }
  return null;
}

function renderMatchup(game) {
  if (!game) return;

  matchupKicker.textContent = `${game.regionName} Region · ${game.round}`;
  matchupTitle.textContent = `(${game.team1.seed}) ${game.team1.name} vs. (${game.team2.seed}) ${game.team2.name}`;
  pickBadge.textContent = `Pick: ${game.pick}`;
  confidenceBadge.textContent = `Confidence: ${game.confidence}`;
  upsetBadge.textContent = game.upsetLabel;

  team1WhyTitle.textContent = `Why ${game.team1.name} can win`;
  team1WhyText.textContent = game.whyTeam1Wins;

  team2WhyTitle.textContent = `Why ${game.team2.name} can win`;
  team2WhyText.textContent = game.whyTeam2Wins;

  swingFactorText.textContent = game.swingFactor;

  quickFactsGrid.innerHTML = `
    ${renderTeamCard(game.team1)}
    ${renderTeamCard(game.team2)}
  `;

  playerCards.innerHTML = game.players.map(player => `
    <div class="player-card">
      <h4>${player.name}</h4>
      <div class="player-team">${player.team}</div>
      <p>${player.note}</p>
    </div>
  `).join("");

  renderStatsComparison(game);
}

function renderTeamCard(team) {
  return `
    <div class="team-fact-card">
      <h3>(${team.seed}) ${team.name}</h3>
      <div class="team-meta">${team.record} · ${team.conference}</div>

      <div class="fact-list">
        <div class="fact-row"><span>NET</span><span>${team.net}</span></div>
        <div class="fact-row"><span>KenPom</span><span>${team.kenpom}</span></div>
        <div class="fact-row"><span>Adj. Offense</span><span>${team.adjOff}</span></div>
        <div class="fact-row"><span>Adj. Defense</span><span>${team.adjDef}</span></div>
        <div class="fact-row"><span>Tempo</span><span>${team.tempo}</span></div>
      </div>
    </div>
  `;
}

function renderStatsComparison(game) {
  statsCompareHeader.innerHTML = `
    <div class="team-left">${game.team1.shortName}</div>
    <div class="team-center">Matchup Stats</div>
    <div class="team-right">${game.team2.shortName}</div>
  `;

  const rows = game.profileStats.map(stat => {
    const maxVal = Math.max(stat.team1, stat.team2, 1);
    const leftWidth = (stat.team1 / maxVal) * 100;
    const rightWidth = (stat.team2 / maxVal) * 100;

    return `
      <div class="stat-row">
        <div class="stat-value-left">${stat.team1}</div>

        <div class="bar-track">
          <div class="bar-fill left" style="width: ${leftWidth}%;"></div>
        </div>

        <div class="stat-label">${stat.label}</div>

        <div class="bar-track">
          <div class="bar-fill right" style="width: ${rightWidth}%;"></div>
        </div>

        <div class="stat-value-right">${stat.team2}</div>
      </div>
    `;
  }).join("");

  statsCompareBody.innerHTML = rows;
}

renderBracket();
renderMatchup(findGameById(activeGameId));