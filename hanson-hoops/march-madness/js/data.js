const bracketData = {
  regions: [
    {
      name: "East",
      slug: "east",
      games: [
        {
          id: "east-1",
          round: "First Round",
          label: "1 vs 16",
          team1: {
            seed: 1,
            name: "Duke",
            shortName: "Duke",
            record: "32-2",
            conference: "ACC",
            net: 1,
            kenpom: 3,
            adjOff: 127.9,
            adjDef: 89.1,
            tempo: 65.4
          },
          team2: {
            seed: 16,
            name: "Siena",
            shortName: "Siena",
            record: "23-11",
            conference: "MAAC",
            net: 183,
            kenpom: 149,
            adjOff: 107.1,
            adjDef: 109.2,
            tempo: 64.7
          },
          pick: "Duke",
          confidence: "Very High",
          upsetLabel: "Very Low Upset Risk",
          swingFactor: "How many players Duke lose before they risk losing this game?",
          whyTeam1Wins: "As the number one overall seed in this tournament and arguably its most talented roster, Duke has every reason to win this first round game and very little reasons to fear 16-seed Siena.",
          whyTeam2Wins: "If pigs start flying Thursday in Greenville, S.C., anything can happen",
          players: [
            {
              team: "Duke",
              name: "Cameron Boozer",
              note: "Naismith Player of the Year candidate, top NBA prospect with a smooth, polished inside-out game that's proven consistent and reliable at every level."
            },
            {
              team: "Siena",
              name: "Gavin Doty",
              note: "Leading scorer for the Saints, Doty is a lengthy guard with a penchant for the boards and an all-around game that must show up Thursday for the Saints to have any chance at an upset."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 127.9, team2: 107.1 },
            { label: "AdjD", team1: 89.1, team2: 109.2 },
            { label: "Tempo", team1: 65.4, team2: 64.7 },
            { label: "3P%", team1: 35.1, team2: 30.4 },
            { label: "REB%", team1: 57.8, team2: 52.1 }
          ]
        },
        {
          id: "east-2",
          round: "First Round",
          label: "8 vs 9",
          team1: {
            seed: 8,
            name: "Ohio State",
            shortName: "OSU",
            record: "21-12",
            conference: "Big 10",
            net: 29,
            kenpom: 26,
            adjOff: 124.3,
            adjDef: 102.0,
            tempo: 66.1
          },
          team2: {
            seed: 9,
            name: "Texas Christian University",
            shortName: "TCU",
            record: "22-11",
            conference: "Big 12",
            net: 39,
            kenpom: 42,
            adjOff: 115.3,
            adjDef: 97.8,
            tempo: 67.7
          },
          pick: "TCU",
          confidence: "Low",
          upsetLabel: "Toss-Up",
          swingFactor: "Which team can control the paint, and can TCU stop All-Big 10 senior guard Bruce Thornton?",
          whyTeam1Wins: "Bruce Thornton carves through TCU's less athletic, smaller backcourt and the Buckeyes neutralize the Horned Frogs' potent bigs.",
          whyTeam2Wins: "TCU limits Thornton's offensive output while controlling the paint and the boards through their talented young frontcourt.",
          players: [
            {
              team: "Ohio State",
              name: "Bruce Thornton",
              note: "The Buckeyes' all-time leading scorer has proven himself in an illustrious four year career for Ohio State, a savvy veteran point guard with a bruising frame for his height who can swing the first round with a big game Thursday."
            },
            {
              team: "TCU",
              name: "Xavier Edmonds",
              note: "Late blooming freshman big who has grown into the Frogs' most efficient offensive option in the second half of his first season in Fort Worth."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 124.3, team2: 115.3 },
            { label: "AdjD", team1: 102.1, team2: 97.8 },
            { label: "Tempo", team1: 66.1, team2: 67.7 },
            { label: "3P%", team1: 36.6, team2: 33.1 },
            { label: "REB%", team1: 51.5, team2: 51.9 }
          ]
        },
        {
          id: "east-3",
          round: "First Round",
          label: "5 vs 12",
          team1: {
            seed: 5,
            name: "St. John's University",
            shortName: "SJU",
            record: "28-6",
            conference: "Big East",
            net: 16,
            kenpom: 17,
            adjOff: 120,
            adjDef: 94.1,
            tempo: 69.6
          },
          team2: {
            seed: 12,
            name: "University of Northern Iowa",
            shortName: "UNI",
            record: "23-12",
            conference: "MVC",
            net: 72,
            kenpom: 74,
            adjOff: 109.8,
            adjDef: 98.3,
            tempo: 62.3
          },
          pick: "St. John's",
          confidence: "Medium",
          upsetLabel: "Low Upset Risk",
          swingFactor: "St. John's controls the tempo and successfully runs its offense through star Zuby Ejiofor, and Rick Pitino avoids getting ejected or suspended for his trademark mischief (on and off court).",
          whyTeam1Wins: "With a more talented roster and a Hall-of-Fame coach at the helm, St. John's is a clear favorite to win this first round matchup against Northern Iowa.",
          whyTeam2Wins: "The Panthers pull a page from their 2010 playbook, when they famously upset a top overall seed Kansas team loaded with NBA and All-NCAA talent as a 9-seed in the second round. If history can repeat itself -- or if UNI can learn the right lessons from its own past success -- then we could be in upset territory here.",
          players: [
            {
              team: "St. John's",
              name: "Zuby Ejiofor",
              note: "Leads the Red Storm in points, rebounds and assists - by far the most important player in this matchup"
            },
            {
              team: "Northern Iowa",
              name: "Trey Campbell",
              note: "The leading scorer and playmaker for the Panthers needs to limit turnovers and run a smooth, mistake-free offense against Pitino's physical defense for UNI to have a chance at the upset."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 120, team2: 109.8 },
            { label: "AdjD", team1: 94.1, team2: 98.3 },
            { label: "Tempo", team1: 69.6, team2: 62.3 },
            { label: "3P%", team1: 33.2, team2: 35.5 },
            { label: "REB%", team1: 52.9, team2: 48.8 }
          ]
        },
        {
          id: "east-4",
          round: "First Round",
          label: "4 vs 13",
          team1: {
            seed: 4,
            name: "University of Kansas",
            shortName: "KU",
            record: "23-10",
            conference: "Big 12",
            net: 21,
            kenpom: 21,
            adjOff: 118.3,
            adjDef: 93.9,
            tempo: 67.7
          },
          team2: {
            seed: 13,
            name: "California Baptist",
            shortName: "CBU",
            record: "25-8",
            conference: "WAC",
            net: 98,
            kenpom: 106,
            adjOff: 107.8,
            adjDef: 101.9,
            tempo: 65.9
          },
          pick: "Kansas",
          confidence: "Medium",
          upsetLabel: "Low Upset Risk",
          swingFactor: "Can Kansas get a full, productive game from mercurial, absentee top NBA prospect Darryn Peterson? Or perhaps more importantly, can the Jayhawks stop California Baptist's prolific lead scorer Dominique Daniels Jr. enough to prevent an upset?",
          whyTeam1Wins: "Kansas leans on their superior talent and deeper bench to stave off an upstart CBU team, and gets enough out of Peterson to avoid offensive stagnation or role confusion in round one.",
          whyTeam2Wins: "CBU rides a hot shooting night from Daniels Jr. and Jayden Jackson to a surprise upset of a Kansas team that has struggled with consistency and late in the season in particular.",
          players: [
            {
              team: "KU",
              name: "Darryn Peterson",
              note: "The presumptive top pick in this coming NBA draft, until mysterious absences throughout his freshman season cost him the pole position in most mock drafts, Peterson has nevertheless shined in the minutes he has played, to the point of being one of the all-time points per possession freshman scorers in NCAA history."
            },
            {
              team: "CBU",
              name: "Dominique Daniels Jr.",
              note: "Daniels Jr. averaged 23.2 points per game this season on just under 50% eFG, and represents a formidable defensive challenge for Bill Self's defense in round 1."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 118.3, team2: 107.8 },
            { label: "AdjD", team1: 93.9, team2: 101.9 },
            { label: "Tempo", team1: 67.7, team2: 65.9 },
            { label: "3P%", team1: 35, team2: 33.7 },
            { label: "REB%", team1: 51.5, team2: 55.1 }
          ]
        },
        {
          id: "east-5",
          round: "First Round",
          label: "6 vs 11",
          team1: {
            seed: 6,
            name: "Louisville",
            shortName: "Louisville",
            record: "23-10",
            conference: "ACC",
            net: 17,
            kenpom: 19,
            adjOff: 123.9,
            adjDef: 98.6,
            tempo: 69.7
          },
          team2: {
            seed: 11,
            name: "USF",
            shortName: "USF",
            record: "25-8",
            conference: "American",
            net: 45,
            kenpom: 48,
            adjOff: 117.3,
            adjDef: 100.9,
            tempo: 71.5
          },
          pick: "Louisville",
          confidence: "Low",
          upsetLabel: "Toss-Up",
          swingFactor: "With Louisville's star freshman Mikel Brown out for Thursday's first round matchup with South Florida, it's up to the rest of the roster to show they can hold the line without the presumptive lottery pick leading the way, if they're going to stave off a realistic upset by the 25-8 American Conference champs.",
          whyTeam1Wins: "Louisville has a better and deeper roster, but not by a lot in the absence of their star Brown, which is why the Cardinals will need all the balanced effort and smart play on both ends to avoid a first round exit without Brown's production.",
          whyTeam2Wins: "A stronger mid-major in a year full of them, the Bulls lead the nation in free throw attempts and makes and are experienced and deep for a non-power conference team without any serious pro prospects. Expect a tough fight from this team against a short-handed Louisville.",
          players: [
            {
              team: "Louisville",
              name: "Ryan Conwell",
              note: "With his much hyped backcourt running mate out for the first round with back issues, it will be up to Conwell to lead this offense against an experienced and capable Bulls team hungry to capitalize on the shorthandedness of Louisville's starting five in this game."
            },
            {
              team: "USF",
              name: "Izaiyah Nelson",
              note: "Facing a bigger Louisville team with more depth in the frontcourt will demand a lot from Nelson a 6'10\" senior who led the conference in rebounding, field goal percentage and 2-point percentage this season."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 123.9, team2: 117.3 },
            { label: "AdjD", team1: 98.6, team2: 100.9 },
            { label: "Tempo", team1: 69.7, team2: 71.5 },
            { label: "3P%", team1: 35.7, team2: 33.2 },
            { label: "REB%", team1: 53.7, team2: 53 }
          ]
        },
        {
          id: "east-6",
          round: "First Round",
          label: "3 vs 14",
          team1: {
            seed: 3,
            name: "Michigan State",
            shortName: "MSU",
            record: "25-7",
            conference: "Big 10",
            net: 11,
            kenpom: 9,
            adjOff: 123,
            adjDef: 94.7,
            tempo: 66.1
          },
          team2: {
            seed: 14,
            name: "North Dakota State",
            shortName: "NDSU",
            record: "27-7",
            conference: "Summit",
            net: 114,
            kenpom: 116,
            adjOff: 111.6,
            adjDef: 106.7,
            tempo: 66.4
          },
          pick: "Michigan State",
          confidence: "High",
          upsetLabel: "Very Low Upset Risk",
          swingFactor: "Rebounding, specifically the Spartan's likely dominance on the boards over a NDSU team ranked 332nd in the nation in rebounding rate.",
          whyTeam1Wins: "Tom Izzo. If you can count on any coach in my lifetime to overperform in the tournament relative to his team's regular season performance and overall talent level, it's Tom Izzo.",
          whyTeam2Wins: "North Dakota State is another plucky and dangerous mid-major with a 27-7 record out of the Summit League. With the right shooting luck and good solid ball protection and defense from a steal-happy roster, they could shock the world by taking Izzo and the Spartans down in round one.",
          players: [
            {
              team: "Michigan State",
              name: "Jeremy Fears Jr",
              note: "The brother of current prominent New Orleans Pelicans rookie Jeremiah Fears, Jr. (interesting to see two different variations of the same junior in one family, that's a first in my book), Jeremy is the pivotal guard in Izzo's characteristically plodding, methodical offense. He led the country in assists with 9.2 per game, so expect a lot of playmaking from him."
            },
            {
              team: "North Dakota State",
              name: "Damari Wheeler-Thomas",
              note: "The Bison's top scorer and second best shooter by volume and percentage will be critical to the team's distant upset chances against this scrappy, formidable Spartans team."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 123, team2: 111.6 },
            { label: "AdjD", team1: 94.7, team2: 106.7 },
            { label: "Tempo", team1: 66.1, team2: 66.4 },
            { label: "3P%", team1: 35.9, team2: 36.5 },
            { label: "REB%", team1: 58.5, team2: 46.2 }
          ]
        },
        {
          id: "east-7",
          round: "First Round",
          label: "7 vs 10",
          team1: {
            seed: 7,
            name: "UCLA",
            shortName: "UCLA",
            record: "23-11",
            conference: "Big 10",
            net: 30,
            kenpom: 27,
            adjOff: 123.7,
            adjDef: 102,
            tempo: 64.7
          },
          team2: {
            seed: 10,
            name: "UCF",
            shortName: "UCF",
            record: "21-11",
            conference: "Big 12",
            net: 51,
            kenpom: 54,
            adjOff: 120.4,
            adjDef: 105.4,
            tempo: 69.3
          },
          pick: "UCLA",
          confidence: "Low",
          upsetLabel: "Moderate Upset Risk",
          swingFactor: "UCLA's shooting, if it shows up. The Bruins were 18th in the nation in 3-point percentage and will live and die by that part of their game.",
          whyTeam1Wins: "UCLA's superior shooting holds in this first round matchup and they're able to outgun their Big 12 opponent UCF to make the next round.",
          whyTeam2Wins: "UCF manages to limit or match the anticipated 3-point barrage from the Bruins while exploiting their interior advantages to own the boards and dominate the paint en route to a modest upset.",
          players: [
            {
              team: "UCLA",
              name: "Tyler Bilodeau",
              note: "The Bruins' leading scorer is also one of the nation's premier outside shooters, hitting 46.4% of his 4.5 3-point attempts per game."
            },
            {
              team: "UCF",
              name: "Jamichael Stillwell",
              note: "With much of UCF's first round hopes hinging on its paint play and controlling the glass, look to senior big and leading rebounder Stillwell to play a huge role in the team's success or failure against UCLA."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 123.7, team2: 120.4 },
            { label: "AdjD", team1: 102, team2: 105.4 },
            { label: "Tempo", team1: 64.7, team2: 69.3 },
            { label: "3P%", team1: 38.2, team2: 36.2 },
            { label: "REB%", team1: 49.6, team2: 52.6 }
          ]
        },
        {
          id: "east-8",
          round: "First Round",
          label: "2 vs 15",
          team1: {
            seed: 2,
            name: "UCONN",
            shortName: "UCONN",
            record: "29-5",
            conference: "Big East",
            net: 10,
            kenpom: 11,
            adjOff: 122,
            adjDef: 94.1,
            tempo: 64.5
          },
          team2: {
            seed: 15,
            name: "Furman",
            shortName: "Furman",
            record: "22-12",
            conference: "SoCon",
            net: 186,
            kenpom: 188,
            adjOff: 107.5,
            adjDef: 109.4,
            tempo: 65.9
          },
          pick: "UCONN",
          confidence: "Very High",
          upsetLabel: "Very Low Upset Risk",
          swingFactor: "The experience and winning DNA of head coach Dan Hurley and his players, including former two-time national champion and senior leader Alex Karaban, who brings a steady hand to a deep and talented Huskies team.",
          whyTeam1Wins: "As stated, UCONN has the edge in talent and experience and coaching, so it's hard to imagine them getting upset here.",
          whyTeam2Wins: "Furman is no stranger to upsets in March as an underdog, having knocked off 4-seeded Virginia in 2023 as a 13-seed. If they can summon the magic of that team's upset win here, they might just stand a chance against the juggernaut coming out of Storrs, Connecticut.",
          players: [
            {
              team: "UCONN",
              name: "Alex Karaban",
              note: "The senior leader and two-time title winner is the key and the steady hand behind this offense, especially this time of year."
            },
            {
              team: "Furman",
              name: "Alex Wilkins",
              note: "The talented freshman Wilkins led Furman in scoring in his first season, but needs to limit his tendency to turn the ball over if the Paladins want to pull off a major upset against Hurley's Huskies."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 122, team2: 107.5 },
            { label: "AdjD", team1: 94.1, team2: 109.4 },
            { label: "Tempo", team1: 64.5, team2: 65.9 },
            { label: "3P%", team1: 35.2, team2: 32.7 },
            { label: "REB%", team1: 54.7, team2: 52.8 }
          ]
        },
        
      ]
    },
    {
      name: "South",
      slug: "south",
      games: [
        {
          id: "south-1",
          round: "First Round",
          label: "1 vs 16",
          team1: {
            seed: 1,
            name: "Houston",
            shortName: "Houston",
            record: "31-3",
            conference: "Big 12",
            net: 2,
            kenpom: 1,
            adjOff: 123.3,
            adjDef: 87.4,
            tempo: 63.2
          },
          team2: {
            seed: 16,
            name: "Howard",
            shortName: "Howard",
            record: "21-12",
            conference: "MEAC",
            net: 168,
            kenpom: 171,
            adjOff: 103.9,
            adjDef: 105.4,
            tempo: 70.3
          },
          pick: "Houston",
          confidence: "High",
          upsetLabel: "Low Upset Risk",
          swingFactor: "Can Howard survive Houston’s pressure and physicality?",
          whyTeam1Wins: "Houston’s defense narrows the game into uncomfortable possessions and rarely gives underdogs easy offense.",
          whyTeam2Wins: "Howard would need a huge shotmaking performance and early variance from three to create pressure.",
          players: [
            {
              team: "Houston",
              name: "Player E1",
              note: "Primary perimeter stopper."
            },
            {
              team: "Houston",
              name: "Player E2",
              note: "Interior anchor and rebounder."
            },
            {
              team: "Howard",
              name: "Player F1",
              note: "Lead scorer who has to create difficult offense."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 123.3, team2: 103.9 },
            { label: "AdjD", team1: 87.4, team2: 105.4 },
            { label: "Tempo", team1: 63.2, team2: 70.3 },
            { label: "3P%", team1: 38.1, team2: 34.0 },
            { label: "REB%", team1: 54.8, team2: 47.9 }
          ]
        }
      ]
    }
  ]
};