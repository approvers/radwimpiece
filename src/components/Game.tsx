import { z } from "zod";
import { useState } from "react";

type ScreenState = z.TypeOf<typeof State>;
const State = z.enum(["launch", "ingame", "result"]);

const Game = () => {
  const [screenState, setScreenState] = useState<ScreenState>("launch");

  return (
    <div className="Game">
      <h1>Game</h1>
      {screenState === "launch" && <>Launch Screen</>}
      {screenState === "ingame" && <>In Game</>}
      {screenState === "result" && <>Result Screen</>}
    </div>
  );
};

export default Game;
