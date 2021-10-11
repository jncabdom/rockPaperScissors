const playerOptions = [
  {
    name: "rock",
    winsAgainst: ["scissors", "lizard"],
    index: 0
  },
  {
    name: "paper",
    winsAgainst: ["rock", "spock"],
    index: 1
  },
  {
    name: "scissors",
    winsAgainst: ["paper", "lizard"],
    index: 2
  },
  {
    name: "lizard",
    winsAgainst: ["paper", "spock"],
    index: 3
  },
  {
    name: "spock",
    winsAgainst: ["rock", "scissors"],
    index: 4
  },
];

let playerSelection;
let cpuSelection;

let optionsHolderDOM = document.querySelector(".options-holder");
let winnerText = document.querySelector(".winner-text");
let cpuText = document.querySelector(".cpu-selection");

const setListener = (buttonClass, index) => {
  document.querySelector(buttonClass).addEventListener('click',
  () => {
    playerSelection = playerOptions[index];
    beginGame();
    checkWinCondition();
  });
}

const getRandomOption = () =>
  playerOptions[getRandomNumber(playerOptions.length)];

const getRandomNumber = (max) =>
  Math.floor(Math.random() * max);

const beginGame = () => {
  cpuSelection = getRandomOption();
  updateCpuText(cpuSelection.name);
}

const checkWinCondition = () => {
  if (playerSelection.winsAgainst.includes(cpuSelection.name)) {
    updateWinnerText("Player", 0);
  }
  else if (cpuSelection.winsAgainst.includes(playerSelection.name)) {
    updateWinnerText("CPU", 0);
  }
  else updateWinnerText("", 1);
}

const createNewOption = (optionName) => {
  optionsHolderDOM.innerHTML +=
    `<div class="option ${optionName}-option">
       <img class="option-image" src="./${optionName}.png">
       <button class="option-button ${optionName}-button">Select ${optionName}</button>
     </div>`;
}

const updateWinnerText = (player, draw) => {
  winnerText.innerHTML =
    (draw === 1 ? `It's a draw! ` : `${player} wins!`)
    + ` Select again to play another game...`;
}

const updateCpuText = (selection) =>
  cpuText.innerHTML = `Cpu Selection: ${selection.charAt(0).toUpperCase() + selection.slice(1)}`;
  
// ---- BEGINNING OF THE GAME --- //
  
playerOptions.forEach(option => {
  createNewOption(option.name);
});

playerOptions.forEach(option => {
  setListener(`.${option.name}-button`, option.index);
});
