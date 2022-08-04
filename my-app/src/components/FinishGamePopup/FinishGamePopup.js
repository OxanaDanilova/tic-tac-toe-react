import React from "react";
import "./FinishGamePopup.css";

export class FinishGamePopup extends React.Component {
  closePopup() {
    const popup = document.querySelector(".fin-popup");
    popup.classList.add("hide");
  }
  startNewGame() {
    this.closePopup();
    console.log("this", this);
    console.log("props", this.props.newGame());
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
        <button onClick={() => this.closePopup()} className="close-btn">
          x
        </button>
        <button onClick={() => this.startNewGame()} className="new-game-btn">
          New game
        </button>
      </section>
    );
  }
}
