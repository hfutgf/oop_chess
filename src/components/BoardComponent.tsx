import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  swapPlayer: () => void;
  currentPlayer: Player | null;
}

const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const click = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      swapPlayer();
      updateBoard();
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  };

  useEffect(() => {
    highlightsCells();
  }, [selectedCell]);

  const highlightsCells = () => {
    board.highlightsCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  return (
    <div className="w-[512px] h-[512px] flex flex-wrap bg">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              click={click}
              cell={cell}
              key={cell.id}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
