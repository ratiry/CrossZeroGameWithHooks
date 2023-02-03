import CheckForVictory from "../Helpers/CheckForVictory";
import ZerosCellPick from './../Helpers/ZerosCellPick';
const FILL_SPACE_WITH_ZERO='FILL_SPACE_WITH_ZERO';
const FILL_SPACE_WITH_CROSS='FILL_SPACE_WITH_CROSS';
const CHECK_FOR_VICTORY='CHECK_FOR_VICTORY';
const SWITCH_CROSS_TO_ZERO='SWITCH_CROSS_TO_ZERO';
const RETURN_TO_INTIAL_STATE='RETURN_TO_INTIAL_STATE';
let intialization={
  cells:[
    {whose:null, id:0},{whose:null,id:1},{whose:null,id:2},
    {whose:null,id:3},{whose:null,id:4},{whose:null,id:5},
    {whose:null,id:6},{whose:null,id:7},{whose:null,id:8},
  ],
  occuppied_Cells:{
    cross:[],
    zero:[]
  },
  rows:3,
  result:{
    player:null,
    winning_consequence:null,
    direction:null
  }
}

let cells_reducer=(State=intialization,action)=>{
  let make_new_occypied_space=(whose,id)=>({
    whose,
    id
  })
  switch(action.type){
    case FILL_SPACE_WITH_CROSS:
      return {...State,
        cells:State.cells.map((c)=>{
          if(c.id===action.id){
            return {...c,whose:'cross'}
          }else{
            return c
          }
        }),
        occuppied_Cells:{
          cross:[...State.occuppied_Cells.cross , make_new_occypied_space('cross',action.id)],
          zero:State.occuppied_Cells.zero
        }
      }
    case FILL_SPACE_WITH_ZERO:
      if(State.result.player ===null){
        let id=ZerosCellPick(State.cells,State.occuppied_Cells);
        return{
          ...State,
          cells:State.cells.map((c)=>{
            if(c.id===id){
              return {...c,whose:'zero'}
            }else{
              return c
            }
          }),
          occuppied_Cells:{
            zero:[...State.occuppied_Cells.zero , make_new_occypied_space('zero',id)],
            cross:State.occuppied_Cells.cross
          }
        }  
      }else{
        return State
      }
    case CHECK_FOR_VICTORY:

      let result= CheckForVictory(State.cells,State.occuppied_Cells,State.rows);
      if(result.player =='cross' || result.player=='zero' || result.player=='tie'){
        return{
          ...State,
          result:result
        }
      }else{
        return State
      }
    case RETURN_TO_INTIAL_STATE:
      return{
        ...State,
        cells:[...intialization.cells],
        occuppied_Cells:{...intialization.occuppied_Cells},
        rows:intialization.rows,
        result:{...intialization.result}
      }
    case SWITCH_CROSS_TO_ZERO:
      return{
        ...State,
        cells:[...State.cells.map((c)=>{
          if(c.whose=='cross'){
            return{...c,whose:'zero'}
          }else if(c.whose =='zero'){
            return{...c,whose:'cross'}
          }else{
            return c
          }
        })],
        occuppied_Cells:{
          zero:[...State.occuppied_Cells.cross.map((c)=>{
           return {...c,whose:'zero'}
          })],
          cross:[...State.occuppied_Cells.zero.map((c)=>{
            return{ ...c,whose:'cross'}
          })]
        },
        rows:intialization.rows,
        result:{...intialization.result}
      }
    default: return State
  }
}

export let PlayersMoveThunk=(id)=>(dispatch)=>{
  dispatch(FILL_SPACE_WITH_CROSS_AC(id));
  dispatch(CheckForVictoryAC());
  dispatch(FILL_SPACE_WITH_ZERO_AC());
  dispatch(CheckForVictoryAC());
}
export let FILL_SPACE_WITH_CROSS_AC=(id)=>({
  type:FILL_SPACE_WITH_CROSS,
  id
})
export let FILL_SPACE_WITH_ZERO_AC=()=>({
  type:FILL_SPACE_WITH_ZERO,
})
export let SWITCH_CROSS_TO_ZERO_AC=()=>({
  type:SWITCH_CROSS_TO_ZERO
})
export let CheckForVictoryAC=()=>({
  type:CHECK_FOR_VICTORY
})
export let ReturnToIntialStateAC=()=>({
  type:RETURN_TO_INTIAL_STATE
})
export default cells_reducer;