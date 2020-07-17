var game = {
  ordinal: {
    stringified: "0",
    omegas: {
      omegaCoeffs: [0],
      omegaExps: [1]
    },
    numbers: 0
  },
  unlocks: {
    prestige: false
  }
};
var template = `f<sub>${game.ordinal.stringified}</sub>(${factor})`;
var factor = 10;
setInterval(update, 50);
function increaseOrdinal() {
  game.ordinal.numbers++;
  stringifyOrdinal();
}
function maxOrdinal() {
  if (game.ordinal.numbers >= factor) {
    game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1]++;
    game.ordinal.numbers = 0;
  }
  if (game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1] >= factor) {
    game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1] = 0;
    game.ordinal.omegas.omegaCoeffs.unshift(1);
    game.ordinal.omegas.omegaExps[game.ordinal.omegas.omegaExps.length - 1] = 2;
  }
  stringifyOrdinal();
}
function stringifyOrdinal() {
  if (game.ordinal.omegas.omegaExps[game.ordinal.omegas.omegaExps.length - 1] > 1) {
    if (game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 2] == 1) {
      if (game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1] == 1) {
        if (game.ordinal.numbers >= 1) {
          game.ordinal.stringified = `ω<sup>${game.ordinal.omegas.omegaExps[game.ordinal.omegas.omegaExps.length - 1]}</sup>+ω+${game.ordinal.numbers}`;
        } else {
          game.ordinal.stringified = `ω<sup>${game.ordinal.omegas.omegaExps[game.ordinal.omegas.omegaExps.length - 1]}</sup>+ω`;
        }
      } else if (game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1] > 1) {
        if (game.ordinal.numbers >= 1) {
          game.ordinal.stringified = `ω<sup>${game.ordinal.omegas.omegaExps[game.ordinal.omegas.omegaExps.length - 1]}</sup>+ω${game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1]}+${game.ordinal.numbers}`;
        } else {
          game.ordinal.stringified = `ω<sup>${game.ordinal.omegas.omegaExps[game.ordinal.omegas.omegaExps.length - 1]}</sup>+ω${game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1]}`;
        }
      } else {
        if (game.ordinal.numbers >= 1) {
          game.ordinal.stringified = `ω<sup>${game.ordinal.omegas.omegaExps[game.ordinal.omegas.omegaExps.length - 1]}</sup>+${game.ordinal.numbers}`;
        } else {
          game.ordinal.stringified = `ω<sup>${game.ordinal.omegas.omegaExps[game.ordinal.omegas.omegaExps.length - 1]}</sup>`;
        }
      }
    }
  } else if (game.ordinal.omegas.omegaExps[game.ordinal.omegas.omegaExps.length - 1] == 1) {
    if (game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1] > 1) {
      if (game.ordinal.numbers > 0) {
        game.ordinal.stringified = `ω${game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1]}+${game.ordinal.numbers}`;
      } else {
        game.ordinal.stringified = `ω${game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1]}`;
      }
    } else if (game.ordinal.omegas.omegaCoeffs[game.ordinal.omegas.omegaCoeffs.length - 1] == 1) {
      if (game.ordinal.numbers > 0) {
        game.ordinal.stringified = `ω+${game.ordinal.numbers}`;
      } else {
        game.ordinal.stringified = `ω`;
      }
    } else {
      game.ordinal.stringified = `${game.ordinal.numbers}`;
    }
  } /* else {
    other stuff
  } */
}
function update() {
  template = `f<sub>${game.ordinal.stringified}</sub>(${factor})`;
  get("fgh").innerHTML = template;
  if (!game.unlocks.prestige && game.ordinal.omegas >= 1) {
    game.unlocks.prestige = true;
  }
}
function get(id) {
  return document.getElementById(id);
}