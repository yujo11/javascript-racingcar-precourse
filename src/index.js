import RacingCarGame from "/src/RacingCarGame.js";

const $racingGameForm = document.querySelector(".racing-game-form");
const $carNamesSubmitButton = document.querySelector(".car-names-submit");
const $racingCountPanel = document.querySelector(".racing-count");
const $racingGameResult = document.querySelector(".racing-game-result");

// const racingGameFormState = {
//   carNames: [],
//   racingCount: 0,
// };

// const getCarNames = () => {
//   return [...racingGameFormState.carNames];
// };

// const setCarNames = (names) => {
//   racingGameFormState.carNames = names;
// };

// const getRacingCount = () => {
//   return racingGameFormState.racingCount;
// };

// const setRacingCount = (racingCount) => {
//   racingGameFormState.racingCount = racingCount;
// };

const showRacingCountPanel = () => {
  $racingCountPanel.dataset.visible = "true";
};

const showRacingGameResultPanel = () => {
  $racingGameResult.dataset.visible = "true";
};

const createCarInfoBox = ({ name, moveCount }) => {
  const $carInfoBox = document.createElement("div");
  $carInfoBox.textContent = `${name}: ${"-".repeat(moveCount)}`;

  return $carInfoBox;
};

const createWinnersInfoBox = (winners) => {
  const $winnerInfoBox = document.createElement("div");
  const winnersInfo = winners.map(({ name, _ }) => name).join(", ");
  $winnerInfoBox.textContent = `최종 우승자: ${winnersInfo}`;

  return $winnerInfoBox;
};

const createLapResultBox = ({ _, participants }) => {
  const $lapResultBox = document.createElement("div");

  participants
    .map(createCarInfoBox)
    .forEach((infoBox) => $lapResultBox.append(infoBox));

  return $lapResultBox;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const carNames = e.target["car-names-input"].value.split(",");
  const racingCount = e.target["racing-count-input"].value;
  const racingCarGame = new RacingCarGame(carNames);
  const results = racingCarGame.play(racingCount);
  const resultBoxes = results.map(createLapResultBox);
  resultBoxes.forEach((resultBox) => $racingGameResult.append(resultBox));
  $racingGameResult.append(createWinnersInfoBox(results.at(-1).winners));
  showRacingGameResultPanel();
};

const handleClickCarNamesButton = (e) => {
  showRacingCountPanel();
};

$racingGameForm.addEventListener("submit", handleSubmit);
$carNamesSubmitButton.addEventListener("click", handleClickCarNamesButton);
