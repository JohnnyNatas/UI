import { Injectable } from '@angular/core';
import { PickArea } from 'src/app/pick-area';
import { PickBlock } from 'src/app/pick-block';
import { PickColumn } from 'src/app/pick-column';
import { PickRow } from 'src/app/pick-row';

@Injectable({
  providedIn: 'root'
})
export class HomechildService {

  constructor() {

  }


  create(rows:number,columns:number): PickArea {

    let pa: PickArea = new PickArea()    
    
    for(let i=0; i < rows;i++){          
      
      let pr = new PickRow(); 
      
      for(let j=0; j < columns;j++){
        let pickBlock = new PickBlock(i,j);
        pa.allPickBlocks.push(pickBlock );
        
        let pickColumn = new PickColumn(pickBlock);
        pr.pickColumns.push(pickColumn);
      }            

      pa.pickRows.push(pr);
    }
    
    return pa;
  }

}
