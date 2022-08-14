export class PickBlock{
    row: number;
    column: number;
    mouseOver: boolean;
    _marked: boolean

    get marked(){
        if( this._marked && this.mouseOver)
            return false
        else 
            return this._marked 
    }    

    set marked(value: boolean){
        this._marked = value;        
    }

    constructor(row :number,col: number){
        this.row = row;
        this.column = col;
        this.mouseOver = false;
        this._marked = false;
    }
}