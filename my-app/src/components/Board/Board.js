import React from "react";

import "./Board.css";

export class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      gameStatus: "x",
      boardArr: ["", "", "", "", "", "", "", "", ""],
      winner: [],
    };
  }
  isFinished(boardArr) {
    const winner = [];
    if (
      boardArr[0] === boardArr[1] &&
      boardArr[1] === boardArr[2] &&
      boardArr[0] !== ""
    ) {
      winner.push(0, 1, 2);
    } else if (
      boardArr[3] === boardArr[4] &&
      boardArr[4] === boardArr[5] &&
      boardArr[3] !== ""
    )
      winner.push(3, 4, 5);
    else if (
      boardArr[6] === boardArr[7] &&
      boardArr[7] === boardArr[8] &&
      boardArr[6] !== ""
    )
      winner.push(6, 7, 8);
    else if (
      boardArr[0] === boardArr[3] &&
      boardArr[3] === boardArr[6] &&
      boardArr[0] !== ""
    )
      winner.push(0, 3, 6);
    else if (
      boardArr[1] === boardArr[4] &&
      boardArr[4] === boardArr[7] &&
      boardArr[1] !== ""
    )
      winner.push(1, 4, 7);
    else if (
      boardArr[2] === boardArr[5] &&
      boardArr[5] === boardArr[8] &&
      boardArr[2] !== ""
    )
      winner.push(2, 5, 8);
    else if (
      boardArr[0] === boardArr[4] &&
      boardArr[4] === boardArr[8] &&
      boardArr[0] !== ""
    )
      winner.push(0, 4, 8);
    else if (
      boardArr[2] === boardArr[4] &&
      boardArr[4] === boardArr[6] &&
      boardArr[2] !== ""
    )
      winner.push(2, 4, 6);
    if (winner.length) {
      console.log(`Game is finished. The winner is ${boardArr[winner[0]]}`);
      this.setState({ winner: winner });
      winner.forEach((elem) => {
        if (document.querySelectorAll(".board>div")[`${elem}`]) {
          const box = document.querySelectorAll(".board>div")[`${elem}`];
          box.classList.add("win-color");
        }
      });
    } else if (!boardArr.includes("")) {
      alert("Game is finished!");
    }
  }
  clickHandle(e, { gameStatus, boardArr, winner }) {
    if (boardArr.includes("") && !winner.length) {
      if (e.target.id) {
        let index = e.target.id;
        if (boardArr[index] === "") {
          console.log(e.target);
          e.target.innerHTML = gameStatus;
          e.target.classList.add(
            gameStatus === "x" ? "first-user-color" : "second-user-color"
          );
          boardArr[index] = gameStatus;
          gameStatus = gameStatus === "x" ? "o" : "x";
          this.setState({
            gameStatus: gameStatus,
            boardArr: boardArr,
          });
          this.isFinished(boardArr);
        }
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
