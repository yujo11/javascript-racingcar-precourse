export default class GameResult {
  #winners;
  #participants;

  constructor({ winners, participants }) {
    this.#winners = winners;
    this.#participants = participants;
  }

  format() {
    return {
      winners: this.#winners.map((winner) => ({
        name: winner.getName(),
        moveCount: winner.getMoveCount(),
      })),
      participants: this.#participants.map((participant) => ({
        name: participant.getName(),
        moveCount: participant.getMoveCount(),
      })),
    };
  }
}
