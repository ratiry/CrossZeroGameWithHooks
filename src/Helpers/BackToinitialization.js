
let BackToIntialization=(setIsMoveOfZero,setShouldCheckForVictory,upDateCells,updateOccupiedCells,upDateResult)=>{
  setIsMoveOfZero(false);
  setShouldCheckForVictory(false);
  upDateCells([
    {whose:null,id:0},{whose:null,id:1},{whose:null,id:2},
    {whose:null,id:3},{whose:null,id:4},{whose:null,id:5},
    {whose:null,id:6},{whose:null,id:7},{whose:null,id:8},]);
  updateOccupiedCells({
    cross:[],
    zero:[]
  })
  upDateResult({
    player:null,
    winning_consequence:null,
    direction:null
  })
}
export default BackToIntialization;