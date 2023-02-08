import CheckOccupiedCell from "./CheckOccupiedCell";
let markSpaceWithCross=(id,occupiedCells,upDateCells,updateOccupiedCells)=>{
  let WasCellBefore=CheckOccupiedCell(id,occupiedCells);
  if(!WasCellBefore){
    upDateCells(Cells=>
      Cells.map((s)=>{
        if(s.id==id ){
          return {...s,whose:'cross'}
        }else{
          return s
        }
      }),
    )
     updateOccupiedCells(occupiedCells => {
      return { ...occupiedCells, 
        cross: [...occupiedCells.cross,{whose:'cross',id:id}],
       }
    });
  }
}
export default markSpaceWithCross;