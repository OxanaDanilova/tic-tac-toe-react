import "./App.css";
import { Board } from "./components/Board/Board";
import { FinishGamePopup } from "./components/FinishGamePopup/FinishGamePopup";
import { UserPanel } from "./components/UserPanel/UserPanel";

function App() {
  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <UserPanel />
      <Board />
      <FinishGamePopup />
    </div>
  );
}

export default App;
