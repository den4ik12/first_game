import {Cell} from "./Cell";
import {Colors} from "./Colors";

export class Board {
    cells: Cell[][] = [];

    public initCells() {
        let random: number = this.getRandomNumber(150, 1);
        for (let i = 0; i < 15; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 15; j++) {
                if ((random) % 2 !== 0) {
                    row.push(new Cell(this, i, j, Colors.BLACK, null))
                } else {
                    row.push(new Cell(this, i, j, Colors.WHITE, null))
                }

                random = this.getRandomNumber(150, 1);
            }
            this.cells.push(row);
        }
        this.setStartCell();
    }

    public getRandomNumber(max: number, min: number): number {
        return Math.floor(min + Math.random() * (max - min));
    }

    public upValid(colum: number, j: number): boolean {
        if (this.cells[colum + 1][j].color == Colors.BLACK || this.cells[colum - 1][j].color == Colors.BLACK)
            return true;
        return false;
    }

    public leftValid(column: number, row: number): boolean {
        if (this.cells[column][row + 1].color == Colors.BLACK || this.cells[column][row - 1].color == Colors.BLACK)
            return true;
        return false;
    }

    public setStartCell() {
        let startCell: Cell = this.cells[0][0];
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                try {
                    if (this.cells[i][j].color == Colors.BLACK && this.leftValid(i, j) && this.upValid(i, j))
                        startCell = this.cells[i][j];
                } catch (e) {

                }
            }
        }
        console.log(startCell);
        startCell.color = Colors.GREEN;
    }
}