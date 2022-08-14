import { Component, OnInit } from '@angular/core';
import { PickBlock } from '../../pick-block'
import { PickArea } from '../../pick-area'
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

  constructor() {
    this.columns = 4;
    this.rows = 4;

    this.pickArea = {
      pickRows: [{
        pickColumns:[
          {
            block:{
              row: 1,
              column: 2
            }
          }
        ]
      }]
    };
    
    this.createPickBlocks();
  }

  createPickBlocks(){
    this.pickArea = {
      pickRows: [{
        pickColumns:[
          {
            block:{
              row: 1,
              column: 2
            }
          }
        ]
      }]
    };
  }

  ngOnInit(): void {

  }

}
