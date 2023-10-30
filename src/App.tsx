import { useEffect, useState } from "react";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {
  const [board, setBoard] = useState<Board>(new Board());

  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));

  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  const swapPlayer = () => {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  };

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };
  return (
    <div>
      <h1 className="text-center my-[10px] text-[24px] font-[700]">
        Player: {currentPlayer?.color}
      </h1>
      <Timer currentPlayer={currentPlayer} restart={restart} />
      <div className="flex items-center">
        <div className="w-screen h-screen flex justify-center items-center">
          <BoardComponent
            setBoard={setBoard}
            board={board}
            currentPlayer={currentPlayer}
            swapPlayer={swapPlayer}
          />
          <div className="w-20% bg-slate-400 h-[512px] grid grid-rows-2 ml-[20px] p-[10px] rounded-[10px]">
            <LostFigures
              figures={board.lostBlackFigures}
              title="Lost figures:"
            />
            <LostFigures
              figures={board.lostWhiteFigures}
              title="Lost figures:"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
