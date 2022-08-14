import { Component, OnInit } from '@angular/core';
import { PickBlock } from '../../pick-block'
import { PickArea } from '../../pick-area'
import { HomechildService } from './homechild.service';

@Component({
  selector: 'app-homechild',
  templateUrl: './homechild.component.html',
  styleUrls: ['./homechild.component.css']
})
export class HomechildComponent implements OnInit {

  //show: boolean;
  columns: number;
  rows:number;
  pickArea: PickArea;

  currentPickBlock: PickBlock | undefined;
  allPickBlocks: PickBlock[] | undefined;

  constructor(homeChildService: HomechildService) {
    this.columns = 10;
    this.rows = 10;

    this.pickArea = homeChildService.create(this.rows ,this.columns);      
    this.allPickBlocks = this.pickArea.allPickBlocks;
  }

  blockSelected(selection:PickBlock):void {
    
    console.info("clicked at row =" + selection.row + ",column = " + selection.column);        
  }

  overBlock(selection:PickBlock):void {
    console.info("clicked at row =" + selection.row + ",column = " + selection.column);        
    selection.mouseOver = true;
    this.currentPickBlock = selection;
    
  }
  
  leftBlock(selection:PickBlock):void {
    console.info("clicked at row =" + selection.row + ",column = " + selection.column);        
    selection.mouseOver = false
    this.currentPickBlock = undefined;    
  }

  mark(): void{
    if(this.currentPickBlock != undefined){
      this.allPickBlocks?.forEach((element)=>{
        if((element.row <= this.currentPickBlock?.row) && (element.column <= this.currentPickBlock?.column)){
          element.marked = true;  
        }        
    })
    }
  }

  unmark(): void{
    this.allPickBlocks?.forEach((element)=>{
         element.marked = false;
    })
  }


  ngOnInit(): void {

  }

}
