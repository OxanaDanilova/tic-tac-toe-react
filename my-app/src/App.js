import "./App.css";
import { Board } from "./components/Board/Board";
import { UserPanel } from "./components/UserPanel/UserPanel";

function App() {
  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <UserPanel />
      <Board />
    </div>
  );
}

export default App;
