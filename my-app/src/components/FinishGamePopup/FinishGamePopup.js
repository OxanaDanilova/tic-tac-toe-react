import React from "react";
import "./FinishGamePopup.css";

export class FinishGamePopup extends React.Component {
  startNewGame() {
    const popup = document.querySelector(".fin-popup");
    popup.classList.add("hide");
    this.props.newGame();
  }
  render() {
    let message = "";
    if (this.props.winner) {
      if (this.props.winner === "x") {
        message = "Congratulations! The winner is X!";
      } else {
        message = "Congratulations! The winner is O!";
      }
    }
    return (
      <section className="fin-popup">
        <p>{message ? "" : "Game over!"}</p>
        <p>{message}</p>
        <button onClick={() => this.startNewGame()} className="new-game-btn">
          New game
        </button>
      </section>
    );
  }
}
