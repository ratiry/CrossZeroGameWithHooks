
import CheckOccupiedCell from './CheckOccupiedCell';
import NotOnOneRowRightDiagonal from './NotOnOneRowRightDiagonal';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const SelectIdWithMaxPriority=(Options)=>{
  let priority=0;
  let id=-1;
  for(let i=0;i<Options.length;i++){
    if(priority<Options[i].priority){
      priority=Options[i].priority;
    }
  }
  for(let i=0;i<Options.length;i++){
    if(priority ===Options[i].priority){
      id=Options[i].id;
      break;
    }
  }
  return id;
}
let makeOption=(id,priority)=>({
  id,
  priority
})
const SelectIdToContradictCross=(cells,occuppied_Cells)=>{
  let Options=[];
  for(let i=0;i<cells.length;i++){
    let definedHorizontalCondition=cells[i +2] !==undefined & cells[i +1] !==undefined;;
    let definedVerticalCondition=cells[i +3] !==undefined & cells[i +3+3] !==undefined;;
    let definedLeftDiagonalCondition=cells[i +3+1] !== undefined & cells[i +2*(3+1)]!==undefined;
    let definedRightDiagonal=cells[i +3-1] !== undefined & cells[i +2*(3-1)]!==undefined;
    if(definedHorizontalCondition){
      let onOneRowHorizontalCondition=Math.floor(cells[i].id/3) ===Math.floor(cells[i+1].id/3) & Math.floor(cells[i].id/3 ===Math.floor(cells[i+2].id/3));
      if(onOneRowHorizontalCondition){
        if(cells[i].whose =='cross'){
          if(cells[i+1].whose=='cross' & cells[i+2].whose==null){
            let id= cells[i+2].id;
            Options.push(makeOption(id,3));
          }
          if(cells[i+1].whose==null & cells[i+2].whose=='cross'){
            let id=cells[i+1].id;
            Options.push(makeOption(id,3));
          }
        }else if(cells[i].whose==null){
          if(cells[i+1].whose=='cross' & cells[i+2].whose=='cross'){
            let id=cells[i].id;
            Options.push(makeOption(id,3));
          }
        }
      }
    }
    if(definedVerticalCondition){
      if(cells[i].whose=='cross'){
        if(cells[i+3].whose=='cross' & cells[i+6].whose==null){
          let id=cells[i+6].id;
          Options.push(makeOption(id,3));
        }
        if(cells[i+6].whose=='cross' & cells[i+3].whose==null){
          let  id=cells[i+3].id;
          Options.push(makeOption(id,3));
        }
      }else if(cells[i].whose ==null){
        if(cells[i+3].whose =='cross' & cells[i+6].whose=='cross'){
          let id=cells[i].id;
          Options.push(makeOption(id,3));
        }
      }
    }
    
    if(definedLeftDiagonalCondition){
      if(cells[i].whose =='cross'){
        if(cells[i+3+1].whose =='cross' & cells[i+2*(3+1)].whose ==null){
          let id=cells[i+2*(3+1)].id;
          Options.push(makeOption(id,3));
        }
        if(cells[i+3+1].whose ==null & cells[i+2*(3+1)].whose =='cross'){
          let id=cells[i+3+1].id;
          Options.push(makeOption(id,3));
        }
      }else if(cells[i].whose ==null){
        if(cells[i+3+1].whose =='cross' & cells[i+2*(3+1)].whose=='cross' ){
          let id=cells[i].id;
          Options.push(makeOption(id,3));
        }
      }
    }
    if(definedRightDiagonal){
      let notOnOneRow=NotOnOneRowRightDiagonal(cells,occuppied_Cells,i,true);
      if(notOnOneRow){
        if(cells[i].whose =='cross'){
          if(cells[i+3-1].whose=='cross' & cells[i+2*(3-1)].whose==null){
            let id=cells[i+2*(3-1)].id;
            Options.push(makeOption(id,3));
          }
          if(cells[i+3-1].whose==null & cells[i+2*(3-1)].whose=='cross'){
            let  id=cells[i+3-1].id;
            Options.push(makeOption(id,3));
          }
        }else if(cells[i].whose ==null){
          if(cells[i+3-1].whose =='cross' & cells[i+2*(3-1)].whose=='cross'){
            let  id=cells[i].id;
             Options.push(makeOption(id,3));
          }
        }     
      }
    }
  }
  return Options;
}
const ZeroCellBasedOnPrevios=(cells,occuppied_Cells)=>{
  let Options=[];
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
            let id= cells[i+2].id;
            Options.push(makeOption(id,2));
          }
          if(cells[i+1].whose==null & cells[i+2].whose=='zero'){
            let id=cells[i+1].id;
            Options.push(makeOption(id,2));
          }
          if(cells[i+1].whose==null & cells[i+2].whose==null){
            let id= cells[i+1].id;
            Options.push(makeOption(id,1));
          }
        }else if(cells[i].whose==null){
          if(cells[i+1].whose!='cross' & cells[i+2].whose!='cross' &   (cells[i+1].whose =='zero' || cells[i+2].whose=='zero')){
            let id=cells[i].id;
            if(cells[i+1].whose =='zero' & cells[i+2].whose=='zero'){
              Options.push(makeOption(id,2));
            }else{
              Options.push(makeOption(id,1));
            }
          }
        }
        
      }
    }
    if(definedVerticalCondition){
      if(cells[i].whose=='zero'){
        if(cells[i+3].whose=='zero' & cells[i+6].whose==null){
          let id=cells[i+6].id;
          Options.push(makeOption(id,2));
        }
        if(cells[i+6].whose=='zero' & cells[i+3].whose==null){
          let  id=cells[i+3].id;
          Options.push(makeOption(id,2));
        }
        if(cells[i+6].whose==null & cells[i+3].whose==null){
          let id=cells[i+3].id;
          Options.push(makeOption(id,1));
        }
      }else if(cells[i].whose ==null){
        if(cells[i+3].whose !='cross' & cells[i+6].whose!='cross' & (cells[i+3].whose =='zero' || cells[i+6].whose=='zero')){
          let id=cells[i].id;
          if(cells[i+3].whose =='zero' & cells[i+6].whose=='zero'){
            Options.push(makeOption(id,2));
          }else{
            Options.push(makeOption(id,1));
          }
        }
      }
    }
    
    if(definedLeftDiagonalCondition){
      if(cells[i].whose =='zero'){
        if(cells[i+3+1].whose ==null & cells[i+2*(3+1)].whose ==null){
          let id=cells[i+3+1].id;
          Options.push(makeOption(id,1));
          
        }
        if(cells[i+3+1].whose =='zero' & cells[i+2*(3+1)].whose ==null){
          let id=cells[i+2*(3+1)].id;
          Options.push(makeOption(id,2));
        }
        if(cells[i+3+1].whose ==null & cells[i+2*(3+1)].whose =='zero'){
          let id=cells[i+3+1].id;
          Options.push(makeOption(id,2));
        }
      }else if(cells[i].whose ==null){
        if(cells[i+3+1].whose !='cross' & cells[i+2*(3+1)].whose!='cross' & (cells[i+3+1].whose =='zero' || cells[i+2*(3+1)].whose=='zero')){
          let id=cells[i].id;
          if(cells[i+3+1].whose =='zero' & cells[i+2*(3+1)].whose=='zero'){
            Options.push(makeOption(id,2));
          }else{
            Options.push(makeOption(id,1));
          }
        }
      }
    }
    if(definedRightDiagonal){
      let notOnOneRow=NotOnOneRowRightDiagonal(cells,occuppied_Cells,i,true);
      if(notOnOneRow){
        if(cells[i].whose =='zero'){
          if(cells[i+3-1].whose=='zero' & cells[i+2*(3-1)].whose==null){
            let id=cells[i+2*(3-1)].id;
            Options.push(makeOption(id,2));
          }
          if(cells[i+3-1].whose==null & cells[i+2*(3-1)].whose=='zero'){
            let  id=cells[i+3-1].id;
            Options.push(makeOption(id,2));
          }
          if(cells[i+3-1].whose==null & cells[i+2*(3-1)].whose==null){
            let  id=cells[i+3-1].id;
            Options.push(makeOption(id,1))
          }
        }else if(cells[i].whose ==null){
          if(cells[i+3-1].whose !='cross' & cells[i+2*(3-1)].whose!='cross' & (cells[i+3-1].whose =='zero' || cells[i+2*(3-1)].whose=='zero')){
            let  id=cells[i].id;
            if(cells[i+3-1].whose =='zero' & cells[i+2*(3-1)].whose=='zero'){
              Options.push(makeOption(id,2));
            }else {
              Options.push(makeOption(id,1));
            }
          }
        }     
      }
    }
  }
  return Options;
}

const ZerosCellPick=(cells,occuppied_Cells,shouldChangeSymbols)=>{
  let IsApproved=false;
  let id=null;
  if(shouldChangeSymbols){
   let Options=  ZeroCellBasedOnPrevios(cells,occuppied_Cells);
   let OptionsToContradictCross=SelectIdToContradictCross(cells,occuppied_Cells);
   if(OptionsToContradictCross.length>0){
    Options= Options.concat(OptionsToContradictCross);
   }
   if(Options.length>0){
    id=SelectIdWithMaxPriority(Options);
    if(id>-1){
      return id;
    }
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