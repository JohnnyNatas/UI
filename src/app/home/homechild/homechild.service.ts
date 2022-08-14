import { Injectable } from '@angular/core';
import { PickArea } from 'src/app/pick-area';

@Injectable({
  providedIn: 'root'
})
export class HomechildService {
  
  columns: number;
  rows:number;
  pickArea: PickArea;

  constructor() {
    this.columns = 4;
    this.rows = 4;

  }

  create(): PickArea {

    var pa = {
      pickRows:
    };

    
    for(let i=0; i <this.columns;i++){

    }
    
    return pa;
  }

}
