export class Car {
  #name;
  #score;
  constructor(name) {
    this.#name = name;
    this.#score = '';
  }
  get name() {
    return this.#name;
  }
  get score() {
    return this.#score;
  }
  set score(score) {
    this.#score = score;
  }

  getScoreCount() {
    return this.#score.length;
  }
}

export class RacingCarGame {
  constructor() {
    this._cars = [];
    this._racingCount = 0;
    this.message = '';
  }

  get cars() {
    return this._cars;
  }

  set cars(carList) {
    this._cars = carList;
  }

  set racingCount(racingCount) {
    this._racingCount = racingCount;
  }

  play() {
    for (let i = 0; i < this._racingCount; i++) {
      for (let car of this._cars) {
        // car에 score 업데이트를 위해 car에 score setter 필요??
        car.score += this.race('-');
        this.message += `${car.name}: ${car.score} <br />`;
      }
      this.message += `<br />`;
    }
  }

  goOrStop() {
    return Math.floor(Math.random() * 10) >= 4;
  }

  race(char) {
    return this.goOrStop() ? char : '';
  }

  createShowResultElement() {
    const divResult = document.createElement('div');
    divResult.innerHTML = this.message;
    return divResult;
  }

  winners() {
    for (let i = this._racingCount; i > 0; i--) {
      const winners = [];
      for (let car of this._cars) {
        if (car.score.length === i) {
          winners.push(car.name);
        }
      }
      if (winners.length > 0) {
        return winners;
      }
    }
  }

  createShowWinnersElement() {
    const divResult = document.createElement('div');
    const winners = this.winners().join(', ');
    divResult.textContent = `최종 우승자: ${winners}`;
    return divResult;
  }
}
