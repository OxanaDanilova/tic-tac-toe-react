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
  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
        <UserPanel
          userFirstScore={this.state.userFirstScore}
          userSecondScore={this.state.userSecondScore}
        />
        <Board />
      </div>
    );
  }
}

export default App;
