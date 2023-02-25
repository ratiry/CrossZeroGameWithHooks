const CheckOccupiedCell=(id,object)=>{
  let IsOccupied=false;
  for(let ii=0;ii<Object.values(object).length;ii++){
    for(let i=0;i<Object.values(object)[ii].length;i++){
      if(Object.values(object)[ii][i].id===id){
        IsOccupied=true;
        break;
      }
    }
  }
  return IsOccupied;
}
export default CheckOccupiedCell;