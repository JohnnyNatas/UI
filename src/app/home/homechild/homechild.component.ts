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

  constructor(homeChildService: HomechildService) {
    this.columns = 10;
    this.rows = 10;

    this.pickArea = homeChildService.create(this.rows ,this.columns);  

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

  }

  /*
  isMouseOver(): boolean{
    if (this.currentPickBlock != undefined && this.currentPickBlock.mouseOver)
      return true;
    else 
      return false;
  }
  */

  ngOnInit(): void {

  }

}
