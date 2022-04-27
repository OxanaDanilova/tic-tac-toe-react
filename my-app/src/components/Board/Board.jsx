import React from "react";

import "./Board.css";

export class Board extends React.Component {
  clickHandle(e) {
    if (e.target.id) {
      console.log(e.target.id);
    }
  }
  render() {
    return (
      <section onClick={this.clickHandle} className="board">
        <div id="1"></div>
        <div id="2"></div>
        <div id="3"></div>
        <div id="4"></div>
        <div id="5"></div>
        <div id="6"></div>
        <div id="7"></div>
        <div id="8"></div>
        <div id="9"></div>
      </section>
    );
  }
}
