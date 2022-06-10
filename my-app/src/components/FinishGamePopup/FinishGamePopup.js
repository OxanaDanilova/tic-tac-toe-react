import React from "react";
import "./FinishGamePopup.css";

export class FinishGamePopup extends React.Component {
  closePopup() {
    const popup = document.querySelector(".fin-popup");
    popup.classList.add("hide");
  }
  startNewGame() {
    console.log("this", this);
    this.closePopup();
  }
  render() {
    return (
      <section className="fin-popup">
        <p>Game is finished!</p>
        <button onClick={this.closePopup} className="close-btn">
          x
        </button>
        <button onClick={this.startNewGame} className="new-game-btn">
          New game
        </button>
      </section>
    );
  }
}
