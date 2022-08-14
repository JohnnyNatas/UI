export class PickBlock{
    row: number;
    column: number;
    mouseOver: boolean;

    constructor(row :number,col: number){
        this.row = row;
        this.column = col;
        this.mouseOver = false;
    }
}