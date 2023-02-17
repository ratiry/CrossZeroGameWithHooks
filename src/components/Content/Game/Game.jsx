import GameField from './FieldGame/FieldGame';
import classes from './Game.module.scss';
import { useEffect,useState } from 'react';
import CheckForVictory from '../../../Helpers/CheckForVictory';
import ZerosCellPick from '../../../Helpers/ZerosCellPick';
import markSpaceWithZero from '../../../Helpers/MarSpaceWithZero';
import { ButtonWithText } from '../../common/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import Intialization from '../../../Helpers/Initialization';
import BackToIntialization from '../../../Helpers/BackToinitialization';
import { H1 } from '../../common/Typography/Hs&P';
let setResul=(tempResult)=>({
  player:tempResult.player,
  winning_consequence:tempResult.winning_consequence,
  direction:tempResult.direction
})
let Game=(props)=>{
  let navigate=useNavigate();
  let [shouldChangeSymbols,setshouldChangeSymbols]=useState(Intialization.shouldChangeSymbols);
  let [IsMoveOfZero,setIsMoveOfZero] = useState(Intialization.IsMoveOfZero);
  let [TouchZeroCount,setTouchZeroCount]=useState(Intialization.TouchZeroCount);
  let [shouldCheckForVictory,setShouldCheckForVictory]=useState(Intialization.shouldChangeSymbols);
  let [cells,upDateCells]=useState(Intialization.cells)
  let [occupiedCells,updateOccupiedCells]=useState(Intialization.occupiedCells);
  let [result,upDateResult]=useState(Intialization.result)
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
  useEffect(()=>{
    return ()=>{
      BackToIntialization(setshouldChangeSymbols,setIsMoveOfZero,setShouldCheckForVictory,upDateCells,updateOccupiedCells,upDateResult)
    }
  },[]);
  let GoToResultsPage=()=>{
    navigate('/Results',{
      state:{
        result:result.player
      }
    })
  }
  return(
    <div className={classes.Game_container}>
      <H1>Tic Tac Toe</H1>
      <GameField  shouldChangeSymbols={shouldChangeSymbols} setTouchZeroCount={setTouchZeroCount} cells={cells} occupiedCells={occupiedCells} upDateCells={upDateCells} updateOccupiedCells={updateOccupiedCells} result={result} />
      {result.player ? <ButtonWithText onClick={GoToResultsPage}><p>Get Results</p></ButtonWithText> : null}
    </div>
  )
}


export default Game;