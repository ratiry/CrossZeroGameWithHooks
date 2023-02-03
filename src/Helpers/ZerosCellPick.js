
import CheckOccupiedCell from './CheckOccupiedCell';
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let ZerosCellPick=(cells,occuppied_Cells)=>{
  let IsApproved=false;
  let id=null;
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