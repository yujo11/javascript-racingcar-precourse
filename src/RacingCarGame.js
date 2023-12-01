import { generateRandomInt, range } from "/src/utils.js";
import Car from "/src/Car.js";
import Judge from "/src/Judge.js";

export default class RacingCarGame {
  #cars;
  #judge;

  constructor(cars) {
    this.#cars = cars.map((name) => new Car(name));
    this.#judge = new Judge();
  }

  play(laps) {
    const gameResults = [];

    for (const _ of range(laps)) {
      this.race(this.#cars);
      const result = this.#judge.judge(this.#cars);
      gameResults.push(result.format());
    }

    return gameResults;
  }

  race() {
    for (const car of this.#cars) {
      const rand = generateRandomInt(1);
      car.move(rand);
    }
  }
}
