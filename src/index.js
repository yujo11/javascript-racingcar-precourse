import RacingCarGame from "/src/RacingCarGame.js";

const $carGameForm = document.querySelector(".car-game-form");

const handleSubmit = (e) => {
  e.preventDefault();
  const carNames = e.target["car-names-input"].value.split(",");
  const racingCount = e.target["racing-count-input"].value;
  const racingCarGame = new RacingCarGame(carNames);
  const result = racingCarGame.play(racingCount);
  console.log(result);
};

$carGameForm.addEventListener("submit", handleSubmit);
