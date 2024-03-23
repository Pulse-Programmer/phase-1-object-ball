function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          Number: 0,
          Shoe: 16,
          Points: 22,
          Rebounds: 12,
          Assists: 12,
          Steals: 3,
          Blocks: 1,
          "Slam Dunks": 1,
        },
        "Reggie Evans": {
          Number: 30,
          Shoe: 14,
          Points: 12,
          Rebounds: 12,
          Assists: 12,
          Steals: 12,
          Blocks: 12,
          "Slam Dunks": 7,
        },
        "Brook Lopez": {
          Number: 11,
          Shoe: 17,
          Points: 17,
          Rebounds: 19,
          Assists: 10,
          Steals: 3,
          Blocks: 1,
          "Slam Dunks": 15,
        },
        "Mason Plumlee": {
          Number: 1,
          Shoe: 19,
          Points: 26,
          Rebounds: 12,
          Assists: 6,
          Steals: 3,
          Blocks: 8,
          "Slam Dunks": 5,
        },
        "Jason Terry": {
          Number: 31,
          Shoe: 15,
          Points: 19,
          Rebounds: 2,
          Assists: 2,
          Steals: 4,
          Blocks: 11,
          "Slam Dunks": 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          Number: 4,
          Shoe: 18,
          Points: 10,
          Rebounds: 1,
          Assists: 1,
          Steals: 2,
          Blocks: 7,
          "Slam Dunks": 2,
        },
        "Bismak Biyombo": {
          Number: 0,
          Shoe: 16,
          Points: 12,
          Rebounds: 4,
          Assists: 7,
          Steals: 7,
          Blocks: 15,
          "Slam Dunks": 10,
        },
        "DeSagna Diop": {
          Number: 2,
          Shoe: 14,
          Points: 24,
          Rebounds: 12,
          Assists: 12,
          Steals: 4,
          Blocks: 5,
          "Slam Dunks": 5,
        },
        "Ben Gordon": {
          Number: 8,
          Shoe: 15,
          Points: 33,
          Rebounds: 3,
          Assists: 2,
          Steals: 1,
          Blocks: 1,
          "Slam Dunks": 0,
        },
        "Brendan Haywood": {
          Number: 33,
          Shoe: 15,
          Points: 6,
          Rebounds: 12,
          Assists: 12,
          Steals: 22,
          Blocks: 5,
          "Slam Dunks": 12,
        },
      },
    },
  };
}

//console.log(gameObject());

function numPointsScored(name) {
  const obj = gameObject();
  let home = obj.home.players[name];

  if (home === undefined) {
    let away = obj.away.players[name];
    if (away === undefined) {
      console.log("Player does not exist!");
    } else {
      return away.Points;
    }
  } else {
    return home.Points;
  }
}

function shoeSize(name) {
  const obj = gameObject();
  let home = obj.home.players[name];

  if (home === undefined) {
    let away = obj.away.players[name];
    if (away === undefined) {
      console.log("Player does not exist!");
    } else {
      return away.Shoe;
    }
  } else {
    return home.Shoe;
  }
}

function teamColors(name) {
  const obj = gameObject();
  let home = obj.home.teamName;

  if (name !== home) {
    let away = obj.away.teamName;
    if (name !== away) {
      console.log("Team does not exist!");
    } else {
      return obj.away.colors;
    }
  } else {
    return obj.home.colors;
  }
}

function teamNames() {
  const obj = gameObject();
  const tNames = [];

  tNames.push(obj.home.teamName, obj.away.teamName);
  return tNames;
}

function playerNumbers(team_name) {
  const obj = gameObject();
  let homeTeam = obj.home.teamName;
  const numberArray = [];

  if (homeTeam !== team_name) {
    let awayTeam = obj.away.teamName;

    if (awayTeam !== team_name) {
      console.log(`Team not available! Enter among ${teamNames()}`);
    } else {
      const objAway = obj.away.players;
      for (const player in objAway) {
        numberArray.push(objAway[player].Number);
      }
      return numberArray;
    }
  } else {
    const objHome = obj.home.players;
    for (const player in objHome) {
      numberArray.push(objHome[player].Number);
    }
    return numberArray;
  }
}

function playerStats(name) {
  const obj = gameObject();
  let homeStats = obj.home.players[name];

  if (homeStats === undefined) {
    let awayStats = obj.away.players[name];
    if (awayStats === undefined) {
      console.log("Player does not exist!");
    } else {
      return awayStats;
    }
  } else {
    return homeStats;
  }
}

function bigShoeRebounds() {
  const obj = gameObject();
  let sizeTracker = 0;
  let statsWithMaxSize;

  if (obj.home.players) {
    const homePlayers = obj.home.players;

    for (const player in homePlayers) {
      let stats = homePlayers[player];

      if (stats.Shoe > sizeTracker) {
        sizeTracker = stats.Shoe;
        statsWithMaxSize = stats;
      }
    }
  } else {
    console.log("Home team unavailable!");
  }

  if (obj.away.players) {
    const awayPlayers = obj.away.players;

    for (const player in awayPlayers) {
      let stats = awayPlayers[player];

      if (stats.Shoe > sizeTracker) {
        sizeTracker = stats.Shoe;
        statsWithMaxSize = stats;
      }
    }
  } else {
    console.log("Away team unavailable!");
  }
  return statsWithMaxSize.Rebounds;
}

// console.log(bigShoeRebounds());

function mostPointsScored() {
  const obj = gameObject();
  let pointsTracker = 0;
  let pointPlayer;

  for (const player in obj.home.players) {
    let points = obj.home.players[player].Points;
    if (points > pointsTracker) {
      pointsTracker = points;
      pointPlayer = player;
    }
  }

  for (const player in obj.away.players) {
    let points = obj.away.players[player].Points;
    if (points > pointsTracker) {
      pointsTracker = points;
      pointPlayer = player;
    }
  }
  return pointPlayer;
}

function winningTeam() {
  const obj = gameObject();
  let pointsTotalHome = 0;
  let pointsTotalAway = 0;

  for (const player in obj.home.players) {
    let points = obj.home.players[player].Points;
    pointsTotalHome += points;
  }

  for (const player in obj.away.players) {
    let points = obj.away.players[player].Points;
    pointsTotalAway += points;
  }

  if (pointsTotalHome > pointsTotalAway) {
    return obj.home.teamName;
  } else if (pointsTotalAway > pointsTotalHome) {
    return obj.away.teamName;
  } else {
    console.log("It is a draw!");
  }
}

function playerWithLongestName() {
  const obj = gameObject();
  let longestName = 0;
  let playerName;

  for (const player in obj.home.players) {
    let nameLength = player.length;

    if (nameLength > longestName) {
      longestName = nameLength;
      playerName = player;
    }
  }

  for (const player in obj.away.players) {
    let nameLength = player.length;

    if (nameLength > longestName) {
      longestName = nameLength;
      playerName = player;
    }
  }
  return playerName;
}

function doesLongNameStealATon() {
  const obj = gameObject();
  let maxSteals = 0;
  let maxStealsPlayer;

  for (const player in obj.home.players) {
    let currentSteals = obj.home.players[player].Steals;

    if (currentSteals > maxSteals) {
      maxSteals = currentSteals;
      maxStealsPlayer = player;
    }
  }

  for (const player in obj.away.players) {
    let currentSteals = obj.away.players[player].Steals;

    if (currentSteals > maxSteals) {
      maxSteals = currentSteals;
      maxStealsPlayer = player;
    }
  }

  if (maxStealsPlayer === playerWithLongestName()) {
    return true;
  } else return false;
}
