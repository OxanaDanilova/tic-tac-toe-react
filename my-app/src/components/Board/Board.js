import React from "react";

import "./Board.css";

export class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      gameStatus: "x",
      boardArr: ["", "", "", "", "x", "o", "", "", "x"],
    };
  }
  clickHandle(e, { gameStatus, boardArr }) {
    if (e.target.id) {
      let index = e.target.id;
      if (boardArr[index] === "") {
        console.log(e.target);
        e.target.innerHTML = gameStatus;
        boardArr[index] = gameStatus;
        gameStatus = gameStatus === "x" ? "o" : "x";
        this.setState({
          gameStatus: gameStatus,
          boardArr: boardArr,
        });
      }
    }
  }
  render() {
    return (
      <section
        onClick={(e) => this.clickHandle(e, this.state)}
        className="board"
      >
        {this.state.boardArr.map(
          (el, i) =>
            (el = (
              <div key={i} id={i}>
                {this.state.boardArr[i]}
              </div>
            ))
        )}
      </section>
    );
  }
}
