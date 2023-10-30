import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  availabel: boolean;
  id: number;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.board = board;
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.availabel = false;
    this.id = Math.random();
  }

  isEmpty():Boolean {
    return this.figure === null;
  }

  isEmptyVertical(target: Cell): Boolean {
    if (this.x !== target.x) {
      return false;
    }
    const min = Math.min(this.y, target.y);
    const max = Math.min(this.y, target.y);
    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isEmptyHorizontal(target: Cell): Boolean {
    // if (this.y !== target.y) {
    //   return false;
    // }
    // const min = Math.min(target.x, this.x);
    // const max = Math.min(target.x, this.x);
    // for (let x = min + 1; x < max; x++) {
    //   if (!this.board.getCell(x, this.y).isEmpty()) {
    //     return false;
    //   }
    // }
    return true;
  }

  isEmptyDiagonal(): Boolean {
    return true;
  }

  setFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  }

  moveFigure(target: Cell) {
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target);
      target.setFigure(this.figure);
      this.figure = null;
    }
  }
}
