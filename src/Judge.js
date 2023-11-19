import { cloneInstance } from "/src/utils.js";
import GameResult from "/src/GameResult.js";

export default class Judge {
  judge(cars) {
    const maxMoveCount = Math.max(...cars.map((car) => car.getMoveCount()));
    const winners = cars.filter((car) => car.getMoveCount() === maxMoveCount);

    return new GameResult({
      winners: winners,
      participants: cars,
    });
  }
}
