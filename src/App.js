import React from "react";
import "./App.scss";
import { Board } from "./components/Board/Board";
import { UserPanel } from "./components/UserPanel/UserPanel";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userFirstScore: 0,
      userSecondScore: 0,
      active: "x",
    };
  }
  addScoreX() {
    this.setState({ userFirstScore: this.state.userFirstScore + 100 });
  }
  addScoreO() {
    this.setState({ userSecondScore: this.state.userSecondScore + 100 });
  }
  changeActive(activeUser) {
    console.log("active user", activeUser);
    activeUser === "x"
      ? this.setState({ active: "x" })
      : this.setState({ active: "o" });
  }

  render() {
    return (
      <div className="app">
        <h1>Tic-Tac-Toe</h1>
        <UserPanel
          userFirstScore={this.state.userFirstScore}
          userSecondScore={this.state.userSecondScore}
          activeUser={this.state.active}
        />
        <Board
          addScoreX={() => this.addScoreX()}
          addScoreO={() => this.addScoreO()}
          active={(x) => this.changeActive(x)}
        />
      </div>
    );
  }
}

export default App;
