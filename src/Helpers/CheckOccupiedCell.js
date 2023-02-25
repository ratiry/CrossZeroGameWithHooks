const CheckOccupiedCell=(id,object)=>{
  let isOccupied=false;
  for(let ii=0;ii<Object.values(object).length;ii++){
    for(let i=0;i<Object.values(object)[ii].length;i++){
      if(Object.values(object)[ii][i].id===id){
        isOccupied=true;
        break;
      }
    }
  }
  return isOccupied;
}
export default CheckOccupiedCell;