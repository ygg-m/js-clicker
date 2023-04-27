import { BasicInfo } from "./Components/BasicInfo";
import { useGame } from "./Context/GameContext";

function App() {
  const { click, count, handleClickerButton, powerUpClick } = useGame();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <BasicInfo />

      <div className="flex gap-2">
        <button className="btn" onClick={() => handleClickerButton()}>
          Clicker
        </button>
        <button className="btn" onClick={() => powerUpClick(1)}>
          Power Up
        </button>
      </div>

      <div className="divider" />

      <div>Points: {count.points}</div>
      <div>Click: {count.clicks}</div>

      <div className="divider" />
      <div>Click Power: {click.power}</div>
    </div>
  );
}

export default App;
