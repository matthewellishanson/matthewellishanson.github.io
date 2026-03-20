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
            name: "Florida",
            shortName: "Florida",
            record: "26-7",
            conference: "SEC",
            net: 4,
            kenpom: 4,
            adjOff: 125.5,
            adjDef: 91.7,
            tempo: 70.6
          },
          team2: {
            seed: 16,
            name: "Prairie View A&M",
            shortName: "Prairie View A&M",
            record: "19-17",
            conference: "SWAC",
            net: 300,
            kenpom: 280,
            adjOff: 101.2,
            adjDef: 111,
            tempo: 70.8
          },
          pick: "Florida",
          confidence: "Very High",
          upsetLabel: "Very Low Upset Risk",
          swingFactor: "Florida's experience, talent and depth should prove way too much for the 19-17 Prairie View A&M Panthers to handle, let alone challenge seriously.",
          whyTeam1Wins: "Florida has so many different ways to win it's almost easier to identify the one or two ways they might not. Barring huge injuries, a dramatic variance in both team's shooting or some other unlikely scenario, expect an easy win for the defending national champions.",
          whyTeam2Wins: "A Panthers win would be unprecedented even by the standards of a 16 beating a 1-seed, which has only ever happened twice (both in the past decade though!). They'll need a miracle or two to pull that off.",
          players: [
            {
              team: "Florida",
              name: "Thomas Haugh",
              note: "The returning national champion led the Gators in scoring in his third college season, and should be the key to their title defense here and going forward."
            },
            {
              team: "Prairie View A&M",
              name: "Dontae Horne",
              note: "The Panthers' top scorer averaged 20.3 points per game in his senior season, but will have to reach another level AND get a lot of help from his teammates for them to even stay in this game."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 125.5, team2: 101.2 },
            { label: "AdjD", team1: 91.7, team2: 111 },
            { label: "Tempo", team1: 70.6, team2: 70.8 },
            { label: "3P%", team1: 30.8, team2: 33.4 },
            { label: "REB%", team1: 59.5, team2: 45.9 }
          ]
        },
        {
          id: "south-2",
          round: "First Round",
          label: "8 vs 9",
          team1: {
            seed: 8,
            name: "Clemson",
            shortName: "Clemson",
            record: "24-10",
            conference: "ACC",
            net: 34,
            kenpom: 36,
            adjOff: 116.5,
            adjDef: 97.3,
            tempo: 64.3
          },
          team2: {
            seed: 9,
            name: "Iowa",
            shortName: "Iowa",
            record: "21-12",
            conference: "Big 10",
            net: 27,
            kenpom: 25,
            adjOff: 121.7,
            adjDef: 99.3,
            tempo: 63.1
          },
          pick: "Iowa",
          confidence: "Very Low",
          upsetLabel: "High Upset Risk",
          swingFactor: "Iowa's offense vs. Clemson's defense. Both teams favor one side of the ball and rely on their strengths on their respective ends to win games, so it's a tale of which side wins out.",
          whyTeam1Wins: "Clemson slows the pace and potency of Iowa's offensive attack, drawing a first round win, grit and grind style, through their superior defense.",
          whyTeam2Wins: "Iowa's offense proves too much for the Clemson Tigers' stellar defense, and the Hawkeyes shoot their way to the second round.",
          players: [
            {
              team: "Clemson",
              name: "Carter Welling",
              note: "Welling gets the edge over his teammates on this balanced, deep Clemson roster, due to his team lead in rebounds and blocks, both of which will be needed against this Iowa offense."
            },
            {
              team: "Iowa",
              name: "Bennett Stirtz",
              note: "The leading minutes getter in the Big 10 also led the Hawkeyes in scoring with 20 ppg while shooting 37.6% from beyond on 6.6 3PA per game."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 116.5, team2: 121.7 },
            { label: "AdjD", team1: 97.3, team2: 99.3 },
            { label: "Tempo", team1: 64.3, team2: 63.1 },
            { label: "3P%", team1: 34.1, team2: 35.7 },
            { label: "REB%", team1: 51.4, team2: 50.8 }
          ]
        },
        {
          id: "south-3",
          round: "First Round",
          label: "5 vs 12",
          team1: {
            seed: 5,
            name: "Vanderbilt",
            shortName: "Vanderbilt",
            record: "26-8",
            conference: "SEC",
            net: 13,
            kenpom: 12,
            adjOff: 126.7,
            adjDef: 99.3,
            tempo: 68.9
          },
          team2: {
            seed: 12,
            name: "McNeese State",
            shortName: "McNeese State",
            record: "28-5",
            conference: "Southland",
            net: 56,
            kenpom: 66,
            adjOff: 114.3,
            adjDef: 101.8,
            tempo: 66.2
          },
          pick: "Vanderbilt",
          confidence: "Medium",
          upsetLabel: "Low Upset Risk",
          swingFactor: "Vanderbilt's pace and space offense should be the difference here, unless McNeese can slow them down.",
          whyTeam1Wins: "Vanderbilt wins through its high powered offense, ranked 13th in points per game in the country, and cruises to a second round matchup with Nebraska or Troy.",
          whyTeam2Wins: "McNeese's strong defense finds a way to curb this dangerous Vanderbilt offense, while taking care of the ball to avoid giving the Commodores fast break opportunities.",
          players: [
            {
              team: "Vanderbilt",
              name: "Tyler Nickel",
              note: "The sharpshooting forward may not lead the Commodores in scoring, but his 7 3-point attempts per game on 40% shooting makes him a huge stretch player for this electric Vanderbilt offense."
            },
            {
              team: "McNeese",
              name: "Javohn Garcia",
              note: "The senior guard may be the team's best defender as well as a top producer on the other end, and stands to have the biggest impact as the spearhead of this defense as they attempt to slow down Vandy."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 126.7, team2: 114.3 },
            { label: "AdjD", team1: 99.3, team2: 101.8 },
            { label: "Tempo", team1: 68.9, team2: 66.2 },
            { label: "3P%", team1: 35.5, team2: 31.9 },
            { label: "REB%", team1: 50.3, team2: 49.7 }
          ]
        },
        {
          id: "south-4",
          round: "First Round",
          label: "4 vs 13",
          team1: {
            seed: 4,
            name: "Nebraska",
            shortName: "UNL",
            record: "26-6",
            conference: "Big 10",
            net: 14,
            kenpom: 14,
            adjOff: 118.5,
            adjDef: 92.3,
            tempo: 66.8
          },
          team2: {
            seed: 13,
            name: "Troy",
            shortName: "Troy",
            record: "22-11",
            conference: "Sun Belt",
            net: 125,
            kenpom: 141,
            adjOff: 110.7,
            adjDef: 108.9,
            tempo: 65
          },
          pick: "Nebraska",
          confidence: "Medium",
          upsetLabel: "Toss-Up",
          swingFactor: "Three point shooting, on both sides, as each team is heavily reliant on them to drive their offenses.",
          whyTeam1Wins: "Nebraska's experience from Big 10 competition and the sheer desperation and support from the Huskers traveling fanbase should carry them to their first ever NCAA tournament win Thursday morning.",
          whyTeam2Wins: "Troy's three point shooting outguns that of the Huskers while exploiting Nebraska's nerves about securing their first ever tournament win, leading to an upset and another disappointment for UNL.",
          players: [
            {
              team: "Nebraska",
              name: "Pryce Sandfort",
              note: "The Huskers' leading scorer is a sniper from deep and one of the best shooters the school has had in its long but limited college basketball history. Look for him to come out gunning Thursday."
            },
            {
              team: "Troy",
              name: "Thomas Dowd",
              note: "Another gunner like Sandfort, Dowd will have to sink as many threes as he can to keep up with the firepower Nebraska will bring to this matchup on the other end. With some help from twins Cooper and Cobi Campbell, he may just have enough to spoil Huskers' dreams everywhere."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 118.5, team2: 110.7 },
            { label: "AdjD", team1: 92.3, team2: 108.9 },
            { label: "Tempo", team1: 66.8, team2: 65 },
            { label: "3P%", team1: 35.3, team2: 33.5 },
            { label: "REB%", team1: 50.2, team2: 51.8 }
          ]
        },
        {
          id: "south-5",
          round: "First Round",
          label: "6 vs 11",
          team1: {
            seed: 6,
            name: "North Carolina",
            shortName: "UNC",
            record: "24-8",
            conference: "ACC",
            net: 24,
            kenpom: 30,
            adjOff: 121.3,
            adjDef: 100.5,
            tempo: 68
          },
          team2: {
            seed: 11,
            name: "VCU",
            shortName: "VCU",
            record: "27-7",
            conference: "Atlantic 10",
            net: 43,
            kenpom: 44,
            adjOff: 119.9,
            adjDef: 102.5,
            tempo: 68.6
          },
          pick: "UNC",
          confidence: "Low",
          upsetLabel: "Toss-Up",
          swingFactor: "How much does the rest of this UNC roster have in the tank without star freshman Caleb Wilson?",
          whyTeam1Wins: "UNC proves they can win without Wilson on the strength of their depth and high-end talent, cruising to a win over scrappy VCU.",
          whyTeam2Wins: "VCU exploits the undermanned UNC roster in the wake of Wilson's season-ending injury, upsetting the Tarheels with their balanced attack led by Terrence Hill.",
          players: [
            {
              team: "UNC",
              name: "Seth Trimble",
              note: "An aggressive dog of a guard who has the grit and talent and mental fortitude to carry this Tarheels team in Wilson's absence."
            },
            {
              team: "VCU",
              name: "Terrence Hill Jr.",
              note: "Hill Jr. is the nominal leader and top scorer for this balanced, capable VCU squad, and should be a crucial piece of their efforts to upset UNC Thursday."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 121.3, team2: 119.9 },
            { label: "AdjD", team1: 100.5, team2: 102.5 },
            { label: "Tempo", team1: 68, team2: 68.6 },
            { label: "3P%", team1: 34.5, team2: 36.7 },
            { label: "REB%", team1: 52.6, team2: 51.7 }
          ]
        },
        {
          id: "south-6",
          round: "First Round",
          label: "3 vs 11",
          team1: {
            seed: 3,
            name: "Illinois",
            shortName: "Illinois",
            record: "24-8",
            conference: "Big 10",
            net: 8,
            kenpom: 7,
            adjOff: 131.1,
            adjDef: 99,
            tempo: 65.6
          },
          team2: {
            seed: 14,
            name: "Penn",
            shortName: "Penn",
            record: "18-11",
            conference: "Ivy",
            net: 139,
            kenpom: 150,
            adjOff: 107.3,
            adjDef: 106,
            tempo: 69.1
          },
          pick: "Illinois",
          confidence: "Medium",
          upsetLabel: "Moderate Upset Risk",
          swingFactor: "Can surprise phenom freshman Keaton Wagler and the rest of Illinois' elite offense outgun Ivy League champs Penn? Or will Penn become the latest in a surprisingly strong history of Ivy upsets?",
          whyTeam1Wins: "Illinois is a sleeper contender to win it all, in my book, so it would take a big turnover game or a terrible shooting night for them to go down in round 1. Expect a close game but an Illini W.",
          whyTeam2Wins: "I've always taken Ivy to win round 1, and historically I have been right almost one in every three seasons. Something about smart coaches and smart players just seems to catch better teams off guard more than the odds say they should, so never sleep on the team that makes this tournament out of that conference.",
          players: [
            {
              team: "Illinois",
              name: "Keaton Wagler",
              note: "The Shawnee Mission, KS (my hometown) native was unheralded coming out of high school and famously committed to play for Brad Underwood without the Illini coach having ever seen him play. The results have been something out of a Hollywood movie, with Wagler leading the team in scoring and cementing his place as a likely lottery pick in this loaded draft class, but can the Hollywood story have a Hollywood ending for his team?"
            },
            {
              team: "Penn",
              name: "TJ Power",
              note: "The Quakers (yes, they still go by that) junior forward is neck and neck with teammate Ethan Roberts in leading this team in points per game, but his size will be more important in this matchup against one of the best rebounding teams in the nation."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 131.1, team2: 107.3 },
            { label: "AdjD", team1: 99, team2: 106 },
            { label: "Tempo", team1: 65.6, team2: 69.1 },
            { label: "3P%", team1: 34.7, team2: 38.6 },
            { label: "REB%", team1: 56.7, team2: 49.5 }
          ]
        },
        {
          id: "south-7",
          round: "First Round",
          label: "7 vs 10",
          team1: {
            seed: 7,
            name: "Saint Mary's",
            shortName: "Saint Mary's",
            record: "27-5",
            conference: "WCC",
            net: 22,
            kenpom: 24,
            adjOff: 120.3,
            adjDef: 97.3,
            tempo: 65.2
          },
          team2: {
            seed: 10,
            name: "Texas A&M",
            shortName: "Texas A&M",
            record: "21-11",
            conference: "SEC",
            net: 44,
            kenpom: 39,
            adjOff: 119.7,
            adjDef: 101.1,
            tempo: 70.5
          },
          pick: "Saint Mary's",
          confidence: "Low",
          upsetLabel: "Toss-Up",
          swingFactor: "Can Saint Mary's hot 3-point shooting - they're 10th in 3-point percentage in the country - sustain and keep up with the Aggies' explosive offense, ranked 9th in the nation?",
          whyTeam1Wins: "",
          whyTeam2Wins: "",
          players: [
            {
              team: "Saint Mary's",
              name: "Paulius Murauskas",
              note: "The Gaels are a European-heavy team led by Murauskas, who put up 18.8 ppg and 7.7 rpg this season as a junior and will have to be great to get Saint Mary's into the second round over this A&M team that is very capable of upsetting them."
            },
            {
              team: "Texas A&M",
              name: "Rashaun Agee",
              note: "One of nine seniors on this A&M squad, Agee led the team's balanced attack with 14.7 ppg and 8.9 rpg."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 120.3, team2: 119.7 },
            { label: "AdjD", team1: 97.3, team2: 101.1 },
            { label: "Tempo", team1: 65.2, team2: 70.5 },
            { label: "3P%", team1: 38.9, team2: 36.4 },
            { label: "REB%", team1: 57.9, team2: 49.9 }
          ]
        },
        {
          id: "south-8",
          round: "First Round",
          label: "2 vs 15",
          team1: {
            seed: 2,
            name: "Houston",
            shortName: "Houston",
            record: "28-6",
            conference: "Big 12",
            net: 5,
            kenpom: 5,
            adjOff: 124.8,
            adjDef: 91.4,
            tempo: 63.4
          },
          team2: {
            seed: 15,
            name: "Idaho",
            shortName: "Idaho",
            record: "21-14",
            conference: "Big Sky",
            net: 145,
            kenpom: 149,
            adjOff: 108.7,
            adjDef: 107.3,
            tempo: 67.8
          },
          pick: "Houston",
          confidence: "Very High",
          upsetLabel: "Very Low Upset Risk",
          swingFactor: "Houston's suffocating defensive scheme and a roster built to execute it.",
          whyTeam1Wins: "Under Kelvin Sampson, the Cougars have become one of the flagship defensive basketball teams in the nation, and once again have a roster perfectly suited to their scrappy, tough, bruising style of play. Expect big things and an easy round 1 victory from this team.",
          whyTeam2Wins: "Potato power? I don't know, honestly, this one feels pretty lopsided on paper. But it's March, and madness has been known to occur this time of year, so you can't count any team out, even in a matchup as uneven as this one.",
          players: [
            {
              team: "Houston",
              name: "Kingston Flemings",
              note: "Arguably the best NBA prospect Houston has produced since Hakeem Olajuwon, this surefire lottery pick has led the Cougars in scoring as a freshman point guard while holding his own on the other end despite a wiry, slight frame."
            },
            {
              team: "Idaho",
              name: "Jackson Rasmussen",
              note: "The 6'7\" freshman and leading scorer for the Vandals would have to be exceptional holding his own against Houston's big, bruising bigs for Idaho to have any shot at an upset."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 124.8, team2: 108.7 },
            { label: "AdjD", team1: 91.4, team2: 107.3 },
            { label: "Tempo", team1: 63.4, team2: 67.8 },
            { label: "3P%", team1: 34.9, team2: 35.6 },
            { label: "REB%", team1: 52.2, team2: 51.8 }
          ]
        }
      ]
    },
    {
      name: "West",
      slug: "west",
      games: [
        {
          id: "west-1",
          round: "First Round",
          label: "1 vs 16",
          team1: {
            seed: 1,
            name: "Arizona",
            shortName: "Arizona",
            record: "32-2",
            conference: "Big 12",
            net: 3,
            kenpom: 2,
            adjOff: 127.6,
            adjDef: 90,
            tempo: 69.9
          },
          team2: {
            seed: 16,
            name: "Long Island",
            shortName: "LIU",
            record: "",
            conference: "NEC",
            net: 198,
            kenpom: 216,
            adjOff: 105.6,
            adjDef: 109.6,
            tempo: 67.9
          },
          pick: "Arizona",
          confidence: "Very High",
          upsetLabel: "Very Low Upset Risk",
          swingFactor: "Only direct intervention from God Himself could swing this one in Long Island's favor. Arizona may be the eventual champion, so there's very little room for error for their 16-seed opponent this round, and even a perfect showing from the Sharks might still not be enough to beat the Wildcats.",
          whyTeam1Wins: "Arizona wins because they're as deep and talented a team as there is in the country this season.",
          whyTeam2Wins: "Long Island wins because leading scorer Jamal Fuller goes bananas with a 40-point masterpiece... or something crazy unlikely like that.",
          players: [
            {
              team: "Arizona",
              name: "Brayden Burries",
              note: "On a loaded, experienced, title contending Wildcats team, Burries may have the highest potential for the NBA, with some mock drafts elevating him into the top half of this year's stacked lottery - he'll have a chance to prove he belongs in that elite talent pool during what should be a lengthy Arizona run this tournament."
            },
            {
              team: "Long Island",
              name: "Jamal Fuller",
              note: "Like I said, Long Island's leading scorer may need to put up Herculean numbers to pull off the upset against Arizona. Crazier things have happened in this tournament, though, and Fuller is a legit number one option for the Sharks, so I guess I'm saying there's a chance."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 127.6, team2: 105.6 },
            { label: "AdjD", team1: 90, team2: 109.6 },
            { label: "Tempo", team1: 69.9, team2: 67.9 },
            { label: "3P%", team1: 36, team2: 36.1 },
            { label: "REB%", team1: 57.3, team2: 51.3 }
          ]
        },
        {
          id: "west-2",
          round: "First Round",
          label: "8 vs 9",
          team1: {
            seed: 8,
            name: "Villanova",
            shortName: "Villanova",
            record: "24-8",
            conference: "Big East",
            net: 35,
            kenpom: 33,
            adjOff: 120.3,
            adjDef: 100.4,
            tempo: 65.3
          },
          team2: {
            seed: 9,
            name: "Utah State",
            shortName: "Utah State",
            record: "28-6",
            conference: "MWC",
            net: 26,
            kenpom: 29,
            adjOff: 122.2,
            adjDef: 101.4,
            tempo: 67.7
          },
          pick: "Utah State",
          confidence: "Low",
          upsetLabel: "High Upset Risk",
          swingFactor: "Can a turnover prone Villanova squad hold onto the ball against a ball-hawking Utah State defense, and will the threes fall for the Wildcats?",
          whyTeam1Wins: "Villanova wins by controlling the ball and hitting their threes at volume.",
          whyTeam2Wins: "Utah State disrupts Villanova head coach Kevin Willard's offense through physical, point-of-attack defense and creating turnovers, and senior guard MJ Collins has a strong game to lead the Aggies' offense.",
          players: [
            {
              team: "Villanova",
              name: "Acaden Lewis",
              note: "As freshman point guard and leading passer for the Wildcats with 5.3 APG, Lewis will be critical to withstanding the ball pressure from the Aggies and running the Wildcats offense smoothly in the face of Utah State's turnover-generating defense."
            },
            {
              team: "Utah St",
              name: "MJ Collins",
              note: "Alongside second option and backcourt running mate Mason Falsley, the Aggies' leading scorer Collins will be essential to their upset hopes on both ends of the floor, but especially as the vanguard of their offense against a proven Villanova defense."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 120.3, team2: 122.2 },
            { label: "AdjD", team1: 100.4, team2: 101.4 },
            { label: "Tempo", team1: 65.3, team2: 67.7 },
            { label: "3P%", team1: 35.3, team2: 35.8 },
            { label: "REB%", team1: 49.8, team2: 50.9 }
          ]
        },
        {
          id: "west-3",
          round: "First Round",
          label: "5 vs 12",
          team1: {
            seed: 5,
            name: "Wisconsin",
            shortName: "Wisconsin",
            record: "24-11",
            conference: "Big 10",
            net: 25,
            kenpom: 22,
            adjOff: 124.9,
            adjDef: 102.1,
            tempo: 68.8
          },
          team2: {
            seed: 12,
            name: "High Point",
            shortName: "High Point",
            record: "30-4",
            conference: "Big South",
            net: 75,
            kenpom: 89,
            adjOff: 117.2,
            adjDef: 108.1,
            tempo: 70
          },
          pick: "High Point",
          confidence: "Low",
          upsetLabel: "High Upset Risk",
          swingFactor: "Can Wisconsin slow down the formidable mid-major challenger High Point's powerful, balanced offense?",
          whyTeam1Wins: "Wisconsin shows its power conference meddle by stamping out the 31-4 Panthers' best chance at their first ever tournament win, using their defense, Big 10-tested roster and tournament experience to thwart the upset.",
          whyTeam2Wins: "High Point's no joke, and have a very real upset potential here. They're 6th in the country in free throws made and attempted, first in steals per game and fourth in points per game.",
          players: [
            {
              team: "Wisconsin",
              name: "Nick Boyd",
              note: "The sharpshooter led the Badgers in scoring this season with 20.7 PPG on 36.5% 3-point shooting with a decent volume, taking 4.8 threes a game. His shot may decide this one."
            },
            {
              team: "High Point",
              name: "Owen Aquino",
              note: "The only player on the Panthers to average more than 2 stocks (steals + blocks) per game, Aquino's size and defense will be put to the test against the Badgers in this first round."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 124.9, team2: 117.2 },
            { label: "AdjD", team1: 102.1, team2: 108.1 },
            { label: "Tempo", team1: 68.8, team2: 70 },
            { label: "3P%", team1: 35.6, team2: 36.2 },
            { label: "REB%", team1: 50.4, team2: 50.1 }
          ]
        },
        {
          id: "west-4",
          round: "First Round",
          label: "4 vs 13",
          team1: {
            seed: 4,
            name: "Arkansas",
            shortName: "Arkansas",
            record: "27-8",
            conference: "SEC",
            net: 15,
            kenpom: 15,
            adjOff: 127.9,
            adjDef: 101.7,
            tempo: 71.2
          },
          team2: {
            seed: 13,
            name: "Hawaii",
            shortName: "Hawaii",
            record: "24-9",
            conference: "Big West",
            net: 101,
            kenpom: 109,
            adjOff: 107.1,
            adjDef: 101.5,
            tempo: 69.8
          },
          pick: "Arkansas",
          confidence: "Medium",
          upsetLabel: "Low Upset Risk",
          swingFactor: "Arkansas' ability to leverage its high scoring backcourt against Hawaii will make or break their first round chances. Darius Acuff will be key here.",
          whyTeam1Wins: "Arkansas' guards are some of the best in the country, led by Acuff, who projects to be a top pick in this year's NBA Draft.",
          whyTeam2Wins: "Hawaii's frontcourt, led by 7-foot senior Isaac Johnson, will be critical if they're going to knock off the Razorbacks Thursday.",
          players: [
            {
              team: "Arkansas",
              name: "Darius Acuff",
              note: "The presumptive top 10 pick should be instrumental to the Razorbacks' chances this March, and ought to have a big tournament debut against a Hawaii defense that hasn't faced anyone of his caliber all season."
            },
            {
              team: "Hawaii",
              name: "Isaac Johnson",
              note: "The 7-footer will be a huge key to Hawaii's gameplan against the Razorbacks. If he can stay on the court and not get played off from foul trouble or not being able to keep up with Arkansas' speedy, rangy backcourt, then the Rainbow Warriors have a shot to stay in this game."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 127.9, team2: 107.1 },
            { label: "AdjD", team1: 101.7, team2: 101.5 },
            { label: "Tempo", team1: 71.2, team2: 69.8 },
            { label: "3P%", team1: 38.3, team2: 31.6 },
            { label: "REB%", team1: 51.2, team2: 53.7 }
          ]
        },
        {
          id: "west-5",
          round: "First Round",
          label: "6 vs 11",
          team1: {
            seed: 6,
            name: "BYU",
            shortName: "BYU",
            record: "23-12",
            conference: "Big 12",
            net: 23,
            kenpom: 23,
            adjOff: 124.9,
            adjDef: 102.2,
            tempo: 69.9
          },
          team2: {
            seed: 11,
            name: "Texas",
            shortName: "Texas",
            record: "20-14",
            conference: "SEC",
            net: 42,
            kenpom: 34,
            adjOff: 124.2,
            adjDef: 104.5,
            tempo: 66.8
          },
          pick: "BYU",
          confidence: "Medium",
          upsetLabel: "Moderate Upset Risk",
          swingFactor: "Can BYU's offense survive its ultra dependency on star freshman and future number one pick AJ Dybantsa, in the absence of his injured teammate Richie Saunders?",
          whyTeam1Wins: "BYU wins because Dybantsa is the best overall talent in the country right now and can power through at least one NCAA tournament matchup without Saunders as his Robin.",
          whyTeam2Wins: "Texas has a good chance to pull off this upset with BYU so overly reliant on Dybantsa for the lion's share of their offense. Double and triple team the freshman phenom and they might take the BYU offense out altogether.",
          players: [
            {
              team: "BYU",
              name: "AJ Dybantsa",
              note: "Dybantsa is the most likely number one pick in this coming draft, and is only getting better with each game. His dominance and his ability to read and react to double teams that Texas will likely throw his way will be the key to this game."
            },
            {
              team: "Texas",
              name: "Dailyn Swain",
              note: "The Longhorn's best offensive option will also be their primary defender on Dybantsa in this game. He'll need to be big and reliable on both ends for Texas to pull off the upset."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 124.9, team2: 124.2 },
            { label: "AdjD", team1: 102.2, team2: 104.5 },
            { label: "Tempo", team1: 69.9, team2: 66.8 },
            { label: "3P%", team1: 34.5, team2: 35.2 },
            { label: "REB%", team1: 52.5, team2: 54.9 }
          ]
        },
        {
          id: "west-6",
          round: "First Round",
          label: "3 vs 14",
          team1: {
            seed: 3,
            name: "Gonzaga",
            shortName: "Gonzaga",
            record: "31-3",
            conference: "WCC",
            net: 7,
            kenpom: 12,
            adjOff: 121.3,
            adjDef: 93.8,
            tempo: 68.5
          },
          team2: {
            seed: 14,
            name: "Kennesaw State",
            shortName: "Kennesaw State",
            record: "21-14",
            conference: "CUSA",
            net: 155,
            kenpom: 152,
            adjOff: 110.6,
            adjDef: 109.4,
            tempo: 71.1
          },
          pick: "Gonzaga",
          confidence: "High",
          upsetLabel: "Low Upset Risk",
          swingFactor: "Gonzaga's overall talent on both ends should trump a very strong offense from Kennesaw State, but an upset is not out of the question here.",
          whyTeam1Wins: "Gonzaga is one of the few teams in the country with a top 20 offense and defense, and has talent, experience and coaching needed to make a deep run. Expect a win over a worthwhile Kennesaw State team that can challenge but probably won't have enough to knock off the Zags.",
          whyTeam2Wins: "Kennesaw State",
          players: [
            {
              team: "Gonzaga",
              name: "Graham Ike",
              note: "The Zags' best player is a force to be reckoned with in the paint, averaging 19.7 PPG and 8.2 RPG. He should be able to exploit his size advantage against Kennesaw State's smaller frontcourt."
            },
            {
              team: "Kennesaw State",
              name: "RJ Johnson",
              note: "Johnson leads the Owls in scoring as a 6'4\" junior guard, and will need a big game against Mark Few's experienced difference."
            }
          ],
          profileStats: [
            { label: "AdjO", team1: 121.3, team2: 110.6 },
            { label: "AdjD", team1: 93.8, team2: 109.4 },
            { label: "Tempo", team1: 68.5, team2: 71.1 },
            { label: "3P%", team1: 33.5, team2: 34.7 },
            { label: "REB%", team1: 55.4, team2: 51.6 }
          ]
        },
      ]
    }
  ]
};