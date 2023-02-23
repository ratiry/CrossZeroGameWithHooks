
import CheckOccupiedCell from './CheckOccupiedCell';
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let ZeroCellBasedOnPrevios=(cells,occuppied_Cells)=>{
  let id=null;
  for(let i=0;i<cells.length;i++){
    let definedHorizontalCondition=cells[i +2] !==undefined & cells[i +1] !==undefined;;
    let definedVerticalCondition=cells[i +3] !==undefined & cells[i +3+3] !==undefined;;
    let definedLeftDiagonalCondition=cells[i +3+1] !== undefined & cells[i +2*(3+1)]!==undefined;
    let definedRightDiagonal=cells[i +3-1] !== undefined & cells[i +2*(3-1)]!==undefined;
    if(definedHorizontalCondition){
      let onOneRowHorizontalCondition=Math.floor(cells[i].id/3) ===Math.floor(cells[i+1].id/3) & Math.floor(cells[i].id/3 ===Math.floor(cells[i+2].id/3));
      if(onOneRowHorizontalCondition){
        if(cells[i].whose =='zero'){
          if(cells[i+1].whose=='zero' & cells[i+2].whose==null){
            id= cells[i+2].id;
            debugger;
            break;
          }
          if(cells[i+1].whose==null & cells[i+2].whose=='zero'){
            id=cells[i+1].id;
            debugger;
            break;
          }
          if(cells[i+1].whose==null & cells[i+2].whose==null){
            id= cells[i+1].id;
            debugger;
            break;
          }
        }else if(cells[i].whose==null){
          if(cells[i+1].whose!='cross' & cells[i+2].whose!='cross' &   (cells[i+1].whose =='zero' || cells[i+2].whose=='zero')){
            debugger;
            id=cells[i].id;
            break;
          }
        }
        
      }
    }
    if(definedVerticalCondition){
      if(cells[i].whose=='zero'){
        if(cells[i+3].whose=='zero' & cells[i+6].whose==null){
          id=cells[i+6].id;
          break;
        }
        if(cells[i+6].whose=='zero' & cells[i+3].whose==null){
          id=cells[i+3].id;
          break;
        }
        if(cells[i+6].whose==null & cells[i+3].whose==null){
          id=cells[i+3].id;
          break;
        }
      }else if(cells[i].whose ==null){
        if(cells[i+3].whose !='cross' & cells[i+6].whose!='cross' & (cells[i+3].whose =='zero' || cells[i+6].whose=='zero')){
          id=cells[i].id;
          break;
        }
      }
    }
    if(definedLeftDiagonalCondition){
      if(cells[i].id =='zero'){
        if(cells[i+3+1].whose ==null & cells[i+2*(3+1)].whose ==null){
          id=cells[i+3+1].id;
          break;
        }
        if(cells[i+3+1].whose =='zero' & cells[i+2*(3+1)].whose ==null){
          id=cells[i+2*(3+1)];
          break;
        }
        if(cells[i+3+1].whose ==null & cells[i+2*(3+1)].whose =='zero'){
          id=cells[i+3+1].id;
          break;
        }
      }else if(cells[i].id ==null){
        if(cells[i+3+1].whose !='cross' & cells[i+2*(3+1)].whose!='cross' & (cells[i+3+1].whose =='zero' || cells[i+2*(3+1)].whose=='zero')){
          id=cells[i].id;
          break;
        }
      }
    }
    
  }
  debugger;
  return id;
}
let ZerosCellPick=(cells,occuppied_Cells,shouldChangeSymbols)=>{
  let IsApproved=false;
  let id=null;
  if(shouldChangeSymbols){
   id= ZeroCellBasedOnPrevios(cells,occuppied_Cells);
   if(id !=null){
    return id;
   }
  }
  while(!IsApproved){
    id=getRandomArbitrary(0,cells.length-1);
    let result=CheckOccupiedCell(id,occuppied_Cells);
    if(!result){
      IsApproved=true;
    }
  }
  return id;
}
export default ZerosCellPick;