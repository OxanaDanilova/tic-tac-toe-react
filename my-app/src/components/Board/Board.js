import React from "react";

import "./Board.css";

export class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      gameStatus: "x",
      boardArr: ["x", "o", "", "", "x", "o", "", "", "x"],
    };
  }
  clickHandle(e) {
    if (e.target.id) {
      console.log(e.target);
      //e.target.innerHTML = this.state.gameStatus;

      //this.gameStatus = this.gameStatus === "x" ? "o" : "x";
    }
  }
  render() {
    return (
      <section onClick={this.clickHandle} className="board">
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
