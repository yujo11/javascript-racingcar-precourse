import RacingCarGame from "/src/RacingCarGame.js";

const $racingGameForm = document.querySelector(".racing-game-form");
const $carNamesSubmitButton = document.querySelector(".car-names-submit");
const $racingCountPanel = document.querySelector(".racing-count");
const $racingGameResult = document.querySelector(".racing-game-result");
const $carNamesInput = document.querySelector("#car-names-input");

const showRacingCountPanel = () => {
  $racingCountPanel.dataset.visible = "true";
};

const showRacingGameResultPanel = () => {
  $racingGameResult.dataset.visible = "true";
};

const validateCarNamesInput = (carNames) => {
  if (!carNames.every((carName) => carName.length <= 5))
    throw new Error("자동차 이름은 5자 이하입니다.");

  return true;
};

const validateRacingCountInput = (racingCount) => {
  if (!racingCount > 0) throw new Error("1 이상의 숫자를 입력해 주세요.");

  return true;
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
  const carNames = e.target["car-names-input"].value
    .split(",")
    .map((name) => name.trim());
  const racingCount = e.target["racing-count-input"].value;
  try {
    validateCarNamesInput(carNames);
    validateRacingCountInput(racingCount);
    const racingCarGame = new RacingCarGame(carNames);
    const results = racingCarGame.play(racingCount);

    const resultBoxes = results.map(createLapResultBox);
    resultBoxes.forEach((resultBox) => $racingGameResult.append(resultBox));
    $racingGameResult.append(createWinnersInfoBox(results.at(-1).winners));
    showRacingGameResultPanel();
  } catch (err) {
    alert(err);
  }
};

const handleCarNamesButtonClick = (e) => {
  const carNames = $carNamesInput.value.split(",").map((name) => name.trim());
  try {
    validateCarNamesInput(carNames);
    showRacingCountPanel();
  } catch (err) {
    alert(err.message);
    $carNamesInput.focus();
  }
};

$racingGameForm.addEventListener("submit", handleSubmit);
$carNamesSubmitButton.addEventListener("click", handleCarNamesButtonClick);
