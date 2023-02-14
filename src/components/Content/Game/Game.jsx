import GameField from './FieldGame/FieldGame';
import classes from './Game.module.scss';
import { connect } from 'react-redux';
import GetResultsButton from './GetResultsButton';
import { useEffect,useState } from 'react';
import CheckForVictory from '../../../Helpers/CheckForVictory';
import ZerosCellPick from '../../../Helpers/ZerosCellPick';
import markSpaceWithZero from '../../../Helpers/MarSpaceWithZero';
let setResul=(tempResult)=>({
  player:tempResult.player,
  winning_consequence:tempResult.winning_consequence,
  direction:tempResult.direction
})
let Game=(props)=>{
    let [shouldChangeSymbols,setshouldChangeSymbols]=useState(false);
  let [IsMoveOfZero,setIsMoveOfZero] = useState(false);
  let [TouchZeroCount,setTouchZeroCount]=useState(0);
  let [shouldCheckForVictory,setShouldCheckForVictory]=useState(false);
  let [cells,upDateCells]=useState([
    {whose:null,id:0},{whose:null,id:1},{whose:null,id:2},
    {whose:null,id:3},{whose:null,id:4},{whose:null,id:5},
    {whose:null,id:6},{whose:null,id:7},{whose:null,id:8},])
  let [occupiedCells,updateOccupiedCells]=useState({
    cross:[],
    zero:[]
  });
  let [result,upDateResult]=useState({
    player:null,
    winning_consequence:null,
    direction:null
  })
  window.store={
    cells:cells,
    occupiedCells:occupiedCells,
    result:result,
  }

  useEffect(()=>{
    if(occupiedCells.cross.length>0){
        let tempResult=CheckForVictory(cells,occupiedCells,3);
        if(tempResult.player!=null){
          upDateResult(setResul(tempResult));
        }else{
          setIsMoveOfZero(true);
        }
    }
  },[occupiedCells.cross])
  useEffect(()=>{
    if(shouldCheckForVictory){
      let tempResult=CheckForVictory(cells,occupiedCells,3);
      if(tempResult.player!=null){
        upDateResult(setResul(tempResult));
      }
      setShouldCheckForVictory(false);
    }
  },[shouldCheckForVictory])
  useEffect(()=>{
    if(IsMoveOfZero){
      let id=ZerosCellPick(cells,occupiedCells);
      markSpaceWithZero(id,upDateCells,updateOccupiedCells);
      setShouldCheckForVictory(true);
      setIsMoveOfZero(false); 
    }
  },[IsMoveOfZero])
  useEffect(()=>{
    console.log(shouldChangeSymbols);
    if(TouchZeroCount>3){
      setshouldChangeSymbols(true);
     setTouchZeroCount(0);
    }
  },[TouchZeroCount])
  return(
    <div className={classes.Game_container}>
      <h1>Tic Tac Toe</h1>
      <GameField  houldChangeSymbols={shouldChangeSymbols} setTouchZeroCount={setTouchZeroCount} cells={cells} occupiedCells={occupiedCells} upDateCells={upDateCells} updateOccupiedCells={updateOccupiedCells} result={result} />
      {result.player ? <GetResultsButton/> : null}
    </div>
  )
}


export default Game;