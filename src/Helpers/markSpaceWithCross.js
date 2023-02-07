
let markSpaceWithCross=(id,upDateCells,updateOccupiedCells)=>{
  upDateCells(Cells=>
    Cells.map((s)=>{
      if(s.id==id & s.whose===null){
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
export default markSpaceWithCross;