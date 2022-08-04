import React from "react";
import "./App.css";
import { Board } from "./components/Board/Board";
import { UserPanel } from "./components/UserPanel/UserPanel";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userFirstScore: 0,
      userSecondScore: 0,
    };
  }
  addScoreX() {
    this.setState({ userFirstScore: this.state.userFirstScore + 100 });
  }
  addScoreO() {
    this.setState({ userSecondScore: this.state.userSecondScore + 100 });
  }

  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
        <UserPanel
          userFirstScore={this.state.userFirstScore}
          userSecondScore={this.state.userSecondScore}
        />
        <Board
          addScoreX={() => this.addScoreX()}
          addScoreO={() => this.addScoreO()}
        />
      </div>
    );
  }
}

export default App;
