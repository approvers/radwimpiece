import { useState } from "react";

type ScreenState = "launch" | "ingame" | "result";

const Game = () => {
  const [screenState, setScreenState] = useState<ScreenState>("launch");

  return (
    <div className="Game">
      <h1>Game</h1>
      {screenState === "launch" && (
        <button type="button" onClick={() => setScreenState("ingame")}>
          Launch Screen
        </button>
      )}
      {screenState === "ingame" && (
        <button type="button" onClick={() => setScreenState("result")}>
          In Game
        </button>
      )}
      {screenState === "result" && (
        <button type="button" onClick={() => setScreenState("launch")}>
          Result Screen
        </button>
      )}
    </div>
  );
};

export default Game;
