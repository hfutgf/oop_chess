import { Figure, FigureNames } from "./Figure";
import whiteLogo from "../../assets/white-rook.png";
import blackLogo from "../../assets/black-rook.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }
  canMove(target: Cell): Boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}