import React from "react";
import "./FinishGamePopup.scss";

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
        <p>
          {message ? (
            <i className="fa-solid fa-trophy prize"></i>
          ) : (
            "There is no winner."
          )}
        </p>
        <p>{message}</p>
        <button onClick={() => this.startNewGame()} className="new-game-btn">
          New game
        </button>

        {message && [
          <figure key="1" className="balloons left"></figure>,
          <figure key="2" className="balloons right"></figure>,
        ]}
      </section>
    );
  }
}
