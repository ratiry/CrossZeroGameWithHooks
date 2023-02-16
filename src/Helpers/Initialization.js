
let Intialization= {
  shouldChangeSymbols:false,
  IsMoveOfZero:false,
  TouchZeroCount:0,
  shouldCheckForVictory:false,
  cells:[
    {whose:null,id:0},{whose:null,id:1},{whose:null,id:2},
    {whose:null,id:3},{whose:null,id:4},{whose:null,id:5},
    {whose:null,id:6},{whose:null,id:7},{whose:null,id:8} 
  ],
  occupiedCells:{
    cross:[],
    zero:[] 
  },
  result:{
    player:null,
    winning_consequence:null,
    direction:null
  },
  
}
export default Intialization; 