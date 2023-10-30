import { useEffect, useState } from "react";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState<Board>(new Board());

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <BoardComponent setBoard={setBoard} board={board} />
    </div>
  );
}

export default App;
