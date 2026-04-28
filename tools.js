const STORAGE_KEY = "commander-the-flag-tools-state-v1";

const keepers = [
  {
    name: "Lantern Moth Adept",
    stats: "2/1",
    abilities: "First Strike, Defensive Slash",
    image: "flag-keepers/Lantern%20Moth.png",
  },
  {
    name: "Clockwork Page",
    stats: "1/3",
    abilities: "Undying, Defensive Aura",
    image: "flag-keepers/Clockwork%20Page.png",
  },
  {
    name: "Runestone Gargoyle",
    stats: "3/3",
    abilities: "Protection from a random color, Defensive Aura",
    image: "flag-keepers/Runestone%20Gargoyle.png",
  },
  {
    name: "Ashclaw Duelist",
    stats: "3/2",
    abilities: "Double Strike, Defensive Slash",
    image: "flag-keepers/Ashclaw%20Duelist.png",
  },
  {
    name: "Mirrorlake Otter Mage",
    stats: "2/4",
    abilities: "Protection from a random color, Defensive Aura",
    image: "flag-keepers/Otter%20Mage.png",
  },
  {
    name: "Grimroot Stag",
    stats: "4/4",
    abilities: "Gym, Defensive Aura",
    image: "flag-keepers/Grimroot%20Stag.png",
  },
  {
    name: "Stormcoil Serpent",
    stats: "3/5",
    abilities: "Yummy, Defensive Aura",
    image: "flag-keepers/Stormcoil%20Serpent.png",
  },
  {
    name: "Bastion Badger",
    stats: "3/3",
    abilities: "Deathtouch, Defensive Slash",
    image: "flag-keepers/bastion%20Badger.png",
  },
  {
    name: "Obsidian Tortoise Matriarch",
    stats: "5/6",
    abilities: "Protection from a random color, Heavy Armor",
    image: "flag-keepers/Obsidian%20Tortoise.png",
  },
  {
    name: "Ironfur Dire Bear",
    stats: "6/5",
    abilities: "Double Strike, Heavy Armor",
    image: "flag-keepers/Ironfur%20Bear.png",
  },
];

const defaultTeam = () => ({
  wallHp: 20,
  wallBroken: false,
  morale: null,
  capturedTurns: 0,
  flagState: "secured",
  keeper: null,
});

const defaultState = () => ({
  red: defaultTeam(),
  blue: defaultTeam(),
});

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const normalizeFlagState = (flagState) => {
  if (flagState === "carried" || flagState === "enemy-secured") {
    return "captured";
  }

  if (flagState === "dropped") {
    return "dropped";
  }

  return "secured";
};

const loadState = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!saved?.red || !saved?.blue) {
      return defaultState();
    }

    const red = { ...defaultTeam(), ...saved.red };
    const blue = { ...defaultTeam(), ...saved.blue };

    red.capturedTurns ??= saved.red.victoryCount ?? 0;
    blue.capturedTurns ??= saved.blue.victoryCount ?? 0;
    red.flagState = normalizeFlagState(red.flagState);
    blue.flagState = normalizeFlagState(blue.flagState);

    return { red, blue };
  } catch {
    return defaultState();
  }
};

let state = loadState();

const saveState = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const getTeam = (team) => state[team];

const getOpponent = (team) => (team === "red" ? "Blue" : "Red");

const getRandomKeeper = () => keepers[Math.floor(Math.random() * keepers.length)];

const getMoraleModifier = (teamState) => {
  if (!teamState.wallBroken || teamState.morale === null) {
    return "Keeper modifier: none until the Wall breaks.";
  }

  if (teamState.morale >= 16) {
    return "Keeper modifier: +1/+1.";
  }

  if (teamState.morale >= 6) {
    return "Keeper modifier: no modifier.";
  }

  if (teamState.morale >= 1) {
    return "Keeper modifier: -1/-1.";
  }

  return "Keeper modifier: loses Defensive Aura, Heavy Armor, and Defensive Slash.";
};

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const setHidden = (selector, hidden) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.hidden = hidden;
  });
};

const setDisabled = (selector, disabled) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.disabled = disabled;
  });
};

const renderKeeper = (team) => {
  const keeper = getTeam(team).keeper;
  const image = document.querySelector(`[data-keeper-image="${team}"]`);
  const name = document.querySelector(`[data-keeper-name="${team}"]`);
  const details = document.querySelector(`[data-keeper-details="${team}"]`);
  const randomizeButton = document.querySelector(`[data-random-keeper="${team}"]`);

  if (!image || !name || !details) return;

  if (randomizeButton) {
    randomizeButton.disabled = Boolean(keeper);
    randomizeButton.textContent = keeper ? "Locked" : "Randomize";
    randomizeButton.title = keeper ? `Reset ${team} to randomize again.` : "";
  }

  if (!keeper) {
    image.src = team === "red" ? "flag-keepers/Red%20Flag.png" : "flag-keepers/Blue%20Flag.png";
    image.alt = `${team} team flag token`;
    name.textContent = "No Keeper assigned";
    details.textContent = "Roll a random Flag Keeper to defend this Tower.";
    return;
  }

  image.src = keeper.image;
  image.alt = `${keeper.name} card`;
  name.textContent = keeper.name;
  details.textContent = `${keeper.stats} · ${keeper.abilities}`;
};

const renderTeam = (team) => {
  const teamState = getTeam(team);
  const flagIsCaptured = teamState.wallBroken && teamState.flagState === "captured";
  const hasLostToCapture = flagIsCaptured && teamState.capturedTurns === 3;
  const teamName = team === "red" ? "Red" : "Blue";
  const opponentName = getOpponent(team);

  setText(`[data-wall-value="${team}"]`, String(teamState.wallHp));
  setText(`[data-wall-status="${team}"]`, teamState.wallBroken ? "Broken forever" : "Alive");
  setText(`[data-captured-value="${team}"]`, String(teamState.capturedTurns));
  setText(
    `[data-captured-status="${team}"]`,
    flagIsCaptured ? `${teamName} Flag is captured` : "Flag is safe",
  );
  setText(`[data-keeper-modifier="${team}"]`, getMoraleModifier(teamState));
  setText(
    `[data-victory-message="${team}"]`,
    `${opponentName} wins! ${teamName}'s Flag stayed captured for 3 turns.`,
  );
  setHidden(`[data-wall-tracker="${team}"]`, teamState.wallBroken);
  setHidden(`[data-wall-summary="${team}"]`, teamState.wallBroken);
  setHidden(`[data-breach-summary="${team}"]`, !teamState.wallBroken);
  setHidden(`[data-wall-broken-summary="${team}"]`, !teamState.wallBroken);
  setHidden(`[data-morale-summary="${team}"]`, !teamState.wallBroken);
  setHidden(`[data-morale-controls="${team}"]`, !teamState.wallBroken);
  setHidden(`[data-flag-controls="${team}"]`, !teamState.wallBroken);
  setHidden(`[data-captured-controls="${team}"]`, !flagIsCaptured);
  setHidden(`[data-victory-message="${team}"]`, !hasLostToCapture);
  setDisabled(`[data-captured-change="${team}:-1"]`, !flagIsCaptured || teamState.capturedTurns === 0);
  setDisabled(`[data-captured-change="${team}:1"]`, !flagIsCaptured || teamState.capturedTurns === 3);
  setDisabled(`[data-wall-change="${team}:1"]`, teamState.wallHp === 20);
  setDisabled(`[data-wall-change="${team}:5"]`, teamState.wallHp === 20);
  setDisabled(`[data-morale-change="${team}:-1"]`, !teamState.wallBroken || teamState.morale === 0);
  setDisabled(`[data-morale-change="${team}:-5"]`, !teamState.wallBroken || teamState.morale === 0);
  setDisabled(`[data-morale-change="${team}:1"]`, !teamState.wallBroken || teamState.morale === 20);
  setDisabled(`[data-morale-change="${team}:5"]`, !teamState.wallBroken || teamState.morale === 20);

  document.querySelectorAll(`[data-wall-value="${team}"]`).forEach((element) => {
    element.classList.toggle("blood-value", teamState.wallBroken);
  });

  document.querySelectorAll(`[data-captured-summary="${team}"]`).forEach((element) => {
    element.classList.toggle("is-complete", hasLostToCapture);
  });

  if (teamState.wallBroken) {
    setText(`[data-morale-value="${team}"]`, String(teamState.morale));
    setText(`[data-morale-status="${team}"]`, "Active");
  } else {
    setText(`[data-morale-value="${team}"]`, "Inactive");
    setText(`[data-morale-status="${team}"]`, "Break the Wall to activate");
  }

  document.querySelectorAll(`[data-flag-state-button^="${team}:"]`).forEach((button) => {
    const [, stateValue] = button.dataset.flagStateButton.split(":");
    const isActive = stateValue === teamState.flagState;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderKeeper(team);
};

const render = () => {
  renderTeam("red");
  renderTeam("blue");
};

const breakWall = (teamState) => {
  teamState.wallHp = 0;
  teamState.flagState = "secured";
  teamState.capturedTurns = 0;

  if (!teamState.wallBroken) {
    teamState.wallBroken = true;
    teamState.morale = 20;
  }
};

const changeWall = (team, delta) => {
  const teamState = getTeam(team);

  if (teamState.wallBroken && delta > 0) {
    return;
  }

  const nextWall = clamp(teamState.wallHp + delta, 0, 20);
  teamState.wallHp = nextWall;

  if (nextWall === 0) {
    breakWall(teamState);
  } else {
    teamState.flagState = "secured";
    teamState.capturedTurns = 0;
  }

  saveState();
  render();
};

const changeMorale = (team, delta) => {
  const teamState = getTeam(team);

  if (!teamState.wallBroken || teamState.morale === null) {
    return;
  }

  teamState.morale = clamp(teamState.morale + delta, 0, 20);

  saveState();
  render();
};

const changeCapturedTurns = (team, delta) => {
  const teamState = getTeam(team);
  if (teamState.flagState !== "captured") {
    return;
  }
  teamState.capturedTurns = clamp(teamState.capturedTurns + delta, 0, 3);
  saveState();
  render();
};

const resetTeam = (team) => {
  state[team] = defaultTeam();
  saveState();
  render();
};

document.querySelectorAll("[data-random-keeper]").forEach((button) => {
  button.addEventListener("click", () => {
    const team = button.dataset.randomKeeper;
    getTeam(team).keeper = getRandomKeeper();
    saveState();
    render();
  });
});

document.querySelectorAll("[data-wall-change]").forEach((button) => {
  button.addEventListener("click", () => {
    const [team, delta] = button.dataset.wallChange.split(":");
    changeWall(team, Number(delta));
  });
});

document.querySelectorAll("[data-morale-change]").forEach((button) => {
  button.addEventListener("click", () => {
    const [team, delta] = button.dataset.moraleChange.split(":");
    changeMorale(team, Number(delta));
  });
});

document.querySelectorAll("[data-flag-state-button]").forEach((button) => {
  button.addEventListener("click", () => {
    const [team, flagState] = button.dataset.flagStateButton.split(":");
    const teamState = getTeam(team);
    teamState.flagState = flagState;

    if (flagState !== "captured") {
      teamState.capturedTurns = 0;
    }

    saveState();
    render();
  });
});

document.querySelectorAll("[data-captured-change]").forEach((button) => {
  button.addEventListener("click", () => {
    const [team, delta] = button.dataset.capturedChange.split(":");
    changeCapturedTurns(team, Number(delta));
  });
});

document.querySelectorAll("[data-reset-team]").forEach((button) => {
  button.addEventListener("click", () => {
    resetTeam(button.dataset.resetTeam);
  });
});

document.querySelector("[data-reset-game]")?.addEventListener("click", () => {
  const shouldReset = window.confirm("Reset all Commander the Flag tool state?");

  if (!shouldReset) {
    return;
  }

  state = defaultState();
  saveState();
  render();
});

render();
