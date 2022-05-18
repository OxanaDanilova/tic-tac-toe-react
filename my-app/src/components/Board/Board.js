import React from "react";

import "./Board.css";

export class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      gameStatus: "x",
      boardArr: ["", "", "", "", "", "", "", "", ""],
      winner: "",
    };
  }
  isFinished(boardArr) {
    let winner;
    if (
      boardArr[0] === boardArr[1] &&
      boardArr[1] === boardArr[2] &&
      boardArr[0] !== ""
    )
      winner = boardArr[0];
    else if (
      boardArr[3] === boardArr[4] &&
      boardArr[4] === boardArr[5] &&
      boardArr[3] !== ""
    )
      winner = boardArr[3];
    else if (
      boardArr[6] === boardArr[7] &&
      boardArr[7] === boardArr[8] &&
      boardArr[6] !== ""
    )
      winner = boardArr[6];
    else if (
      boardArr[0] === boardArr[3] &&
      boardArr[3] === boardArr[6] &&
      boardArr[0] !== ""
    )
      winner = boardArr[0];
    else if (
      boardArr[1] === boardArr[4] &&
      boardArr[4] === boardArr[7] &&
      boardArr[1] !== ""
    )
      winner = boardArr[1];
    else if (
      boardArr[2] === boardArr[5] &&
      boardArr[5] === boardArr[8] &&
      boardArr[2] !== ""
    )
      winner = boardArr[2];
    else if (
      boardArr[0] === boardArr[4] &&
      boardArr[4] === boardArr[8] &&
      boardArr[0] !== ""
    )
      winner = boardArr[0];
    else if (
      boardArr[2] === boardArr[4] &&
      boardArr[4] === boardArr[6] &&
      boardArr[2] !== ""
    )
      winner = boardArr[2];
    if (winner) {
      alert(`Game is finished. The winner is ${winner}`);
      this.setState({ winner: winner });
    }
  }
  clickHandle(e, { gameStatus, boardArr, winner }) {
    if (boardArr.includes("") && !winner) {
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
