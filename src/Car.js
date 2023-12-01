export default class Car {
  #CAN_MOVE_OVER = 3;
  #moveCount = 0;
  #name = "";

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getMoveCount() {
    return this.#moveCount;
  }

  move(num) {
    if (this.canMove(num)) this.#moveCount++;
  }

  canMove(num) {
    return num > this.#CAN_MOVE_OVER ? true : false;
  }
}
