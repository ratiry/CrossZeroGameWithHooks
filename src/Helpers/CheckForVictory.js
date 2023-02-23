
import NotOnOneRowRightDiagonal from "./NotOnOneRowRightDiagonal";
let conditipnsFunction=(index,cells,occuppied_Cells,player,rows)=>{
  let result = null;
  let winning_consequence=[];
  let direction = null;
  let definedHorizontalCondition=cells[occuppied_Cells[index].id +2] !==undefined & cells[occuppied_Cells[index].id +1] !==undefined;;
  let definedVerticalCondition=cells[occuppied_Cells[index].id +rows] !==undefined & cells[occuppied_Cells[index].id +rows+rows] !==undefined;;
  let definedLeftDiagonalCondition=cells[occuppied_Cells[index].id +rows+1] !== undefined & cells[occuppied_Cells[index].id +2*(rows+1)]!==undefined;
  let definedRightDiagonal=cells[occuppied_Cells[index].id +rows-1] !== undefined & cells[occuppied_Cells[index].id +2*(rows-1)]!==undefined;



  
  if(cells[occuppied_Cells[index].id].whose===player){
    if(definedHorizontalCondition){
      let onOneRowHorizontalCondition=Math.floor(cells[occuppied_Cells[index].id].id/rows) ===Math.floor(cells[occuppied_Cells[index].id+1].id/rows) & Math.floor(cells[occuppied_Cells[index].id].id/rows ===Math.floor(cells[occuppied_Cells[index].id+2].id/rows));
      let horizontalCpndition=cells[occuppied_Cells[index].id +1].whose==player & cells[occuppied_Cells[index].id +2].whose==player;    
      if(horizontalCpndition & onOneRowHorizontalCondition){
        result=player;
        winning_consequence=[cells[occuppied_Cells[index].id].id,cells[occuppied_Cells[index].id+1].id,cells[occuppied_Cells[index].id+2].id]
        direction='horizontal';
      }
    }
    if(definedVerticalCondition){
      let verticalCondition=cells[occuppied_Cells[index].id +rows].whose==player & cells[occuppied_Cells[index].id +rows+rows].whose==player;
      if(verticalCondition){
        result=player;
        winning_consequence=[cells[occuppied_Cells[index].id].id,cells[occuppied_Cells[index].id+rows].id,cells[occuppied_Cells[index].id+2*(rows)].id]
        direction='vertical';
      }
    }
    if(definedLeftDiagonalCondition){
      let LeftDiagonalCondition = cells[occuppied_Cells[index].id +rows+1].whose==player & cells[occuppied_Cells[index].id +2*(rows+1)].whose==player;
      if(LeftDiagonalCondition){
        result=player;
        winning_consequence=[cells[occuppied_Cells[index].id].id,cells[occuppied_Cells[index].id+rows+1].id,cells[occuppied_Cells[index].id+2*(rows+1)].id]
        direction='LeftDiagonal';

      }
    }
    if(definedRightDiagonal){
      let RightDiagonalCondition = cells[occuppied_Cells[index].id +rows-1].whose==player & cells[occuppied_Cells[index].id +2*(rows-1)].whose==player;
      
      if(RightDiagonalCondition ){
        let NotOnOneRow=NotOnOneRowRightDiagonal(cells,occuppied_Cells,index,false);
        if(NotOnOneRow){
          result=player;
          winning_consequence=[cells[occuppied_Cells[index].id].id,cells[occuppied_Cells[index].id+rows-1].id,cells[occuppied_Cells[index].id+2*(rows-1)].id]
          direction='RightDiagonal';
        }
      }
    }
  }
  return {player:result,winning_consequence:winning_consequence,direction:direction};
}
 let CheckForVictory=(cells,occuppied_Cells,rows)=>{
  let result = null;
  for(let i=0;i<occuppied_Cells.cross.length;i++){
    result =  conditipnsFunction(i,cells,occuppied_Cells.cross,'cross',rows);
   if(result.player){
      break;
   }
  }
  if(result.player===null){
    for(let i=0;i<occuppied_Cells.zero.length;i++){
      result =  conditipnsFunction(i,cells,occuppied_Cells.zero,'zero',rows);
     if(result.player){
        break;
     }
    }
  }
  if(cells.length==(occuppied_Cells.zero.length+occuppied_Cells.cross.length) & result.player==null){
    result={
      player:'tie',
      winning_consequence:null,
      direction:null
    }
  }
  return result;
}

export default CheckForVictory;