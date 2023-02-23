
let NotOnOneRowRightDiagonal=(cells,occuppied_Cells,index,Case)=>{
  if(!Case){
    let rowsArray=[Math.floor(cells[occuppied_Cells[index].id].id/3),Math.floor(cells[occuppied_Cells[index].id+3-1].id/3),Math.floor(cells[occuppied_Cells[index].id+2*(3-1)].id/3)];
    let NotOnOneRow=true;
    for(let i=0;i<rowsArray.length;i++){
      for(let ii=0;ii<rowsArray.length;ii++){
        if(rowsArray[i]==rowsArray[ii] & i!==ii){
          NotOnOneRow=false;
        }
      }
    }
    return NotOnOneRow;
  }else{
    let rowsArray=[Math.floor(cells[index].id/3),Math.floor(cells[index+3-1].id/3),Math.floor(cells[index+2*(3-1)].id/3)];
    let NotOnOneRow=true;
    for(let i=0;i<rowsArray.length;i++){
      for(let ii=0;ii<rowsArray.length;ii++){
        if(rowsArray[i]==rowsArray[ii] & i!==ii){
          NotOnOneRow=false;
        }
      }
    }
    return NotOnOneRow;
  }
}
export default NotOnOneRowRightDiagonal;