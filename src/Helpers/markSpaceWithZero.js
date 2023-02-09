
let markSpaceWithZero=(id,upDateCells,updateOccupiedCells)=>{
  upDateCells(Cells=>
    Cells.map((s)=>{
      if(s.id==id & s.whose===null){
        return {...s,whose:'zero'}
      }else{
        return s
      }
    }),
  )
   updateOccupiedCells(occupiedCells => {
    return { ...occupiedCells, 
      zero: [...occupiedCells.zero,{whose:'zero',id:id}],
     }
  });
}
export default markSpaceWithZero;