import { Car, RacingCarGame } from './game.js';
import { getInvalidMessage } from './validator.js';

const formCarNames = document.querySelector('#car-names');
const formRacingCount = document.querySelector('#racing-count');
const showResult = document.querySelector('#result');

const racingCarGame = new RacingCarGame();

formCarNames.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.elements['car-names-input'];
  const carNames = input.value.split(',').map((car) => car.trim());
  const errorMessage = getInvalidMessage(carNames);
  if (errorMessage) {
    alert(errorMessage);
    input.focus();
    return;
  }
  const carList = carNames.map((car) => new Car(car));
  racingCarGame.cars = carList;
  formRacingCount.style.visibility = 'visible';
});

formRacingCount.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.elements['racing-count-input'];
  const racingCount = input.value;
  if (racingCount <= 0) {
    alert('한 번 이상의 시행 횟수를 입력해주세요.');
    input.value = '';
    input.focus();
    return;
  }
  racingCarGame.racingCount = racingCount;
  showResult.style.visibility = 'visible';
  racingCarGame.play();

  const result = racingCarGame.createShowResultElement();
  showResult.append(result);

  const winners = racingCarGame.createShowWinnersElement();
  showResult.append(winners);
});
