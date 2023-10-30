import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      onClick={() => click(cell)}
      className={`w-[64px] h-[64px] flex items-center justify-center ${
        cell.color
      } ${selected ? "selected" : ""}`}
      style={{ background: cell.availabel && cell.figure ? "green" : "" }}
    >
      {cell.availabel && !cell.figure && <div className="available" />}
      {cell?.figure?.logo && (
        <img
          src={cell.figure.logo}
          alt="logo"
          className="w-[56px] h-[56px] relative"
        />
      )}
    </div>
  );
};

export default CellComponent;
