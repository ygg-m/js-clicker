import { BasicInfo } from "./Components/BasicInfo";
import { DetailWindow } from "./Components/DetailWindow";
import { Enemy } from "./Components/Enemy";
import { Equipment } from "./Components/Equipment";
import { Player } from "./Components/Player";
import { Status } from "./Components/Status";
import { useGame } from "./Context/GameContext";

function App() {
  const { click, count, current, handleClickerButton, powerUpClick, detailWindows, handleCloseDetailWindow } = useGame();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center select-none z-0 overflow-hidden"> 
      {detailWindows.map((window, i) => window.equipData ? (
        <DetailWindow key={i} x={window.x} y={window.y} onClose={() => handleCloseDetailWindow(i)} equipData={window.equipData} />
      ) : <DetailWindow key={i} x={window.x} y={window.y} onClose={() => handleCloseDetailWindow(i)} itemData={window.itemData} />
      
      )}

      <BasicInfo />
      <Status />
      <Equipment />

      <div className="flex gap-2">
        <Player />
        <Enemy />
      </div>

      <div className="divider" />

      <div className="flex gap-2">
        <button className="btn" onClick={() => handleClickerButton()}>
          Clicker
        </button>
        <button className="btn" onClick={() => powerUpClick(1)}>
          Power Up
        </button>
      </div>

      <div className="divider" />
      <div className="grid place-items-center">
        <span>Current Stats</span>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-900 p-3 grid">
            <span className="opacity-50">Character</span>
            <span>Name: {current.character.name}</span>
            <span>Base Level: {current.character.baseLevel}</span>
            <span>Job Level: {current.character.jobLevel}</span>
            <span>HP: {current.enemy.healthPoints}</span>
          </div>
          <div className="bg-gray-900 p-3 grid">
            <span className="opacity-50">Enemy</span>
            
            <span>ID: {current.enemy.id}</span>
            <span>HP: {current.enemy.healthPoints}</span>
          </div>
          <div className="bg-gray-900 p-3 grid">
            <span className="opacity-50">Map</span>
            
            <span>ID: {current.map.id}</span>
            <span>HP: {current.map.enemiesDefeated}</span>
          </div>
        </div>

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
