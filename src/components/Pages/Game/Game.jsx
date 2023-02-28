import GameField from './FieldGame/FieldGame';
import { useEffect,useState } from 'react';
import CheckForVictory from '../../../Helpers/CheckForVictory';
import ZerosCellPick from '../../../Helpers/ZerosCellPick';
import markSpaceWithZero from '../../../Helpers/MarSpaceWithZero';
import { ButtonWithText } from '../../common/buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { H1 ,P} from '../../common/typography/Typography';
import classes from './Game.module.scss';

const Init = {
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
  prevousMove:null
}

const setResult=(tempResult)=>({
  player:tempResult.player,
  winning_consequence:tempResult.winning_consequence,
  direction:tempResult.direction
})

const Game=(props)=>{
  let navigate=useNavigate();
  let [shouldChangeSymbols,setShouldChangeSymbols]=useState(Init.shouldChangeSymbols);
  let [IsMoveOfZero,setIsMoveOfZero] = useState(Init.IsMoveOfZero);
  let [shouldCheckForVictory,setShouldCheckForVictory]=useState(Init.shouldCheckForVictory);
  let [cells,upDateCells]=useState(Init.cells)
  let [occupiedCells,updateOccupiedCells]=useState(Init.occupiedCells);
  let [result,upDateResult]=useState(Init.result)

  useEffect(()=>{
    if(occupiedCells.cross.length>0){
        let tempResult=CheckForVictory(cells,occupiedCells,3);
        if(tempResult.player!=null){
          upDateResult(setResult(tempResult));
        }else{
          setIsMoveOfZero(true);
        }
    }
  },[occupiedCells.cross])

  useEffect(()=>{
    if(shouldCheckForVictory){
      let tempResult=CheckForVictory(cells,occupiedCells,3);
      if(tempResult.player!=null){
        upDateResult(setResult(tempResult));
      }
      setShouldCheckForVictory(false);
    }
  },[shouldCheckForVictory])

  useEffect(()=>{
    if(IsMoveOfZero){
      let id=ZerosCellPick(cells,occupiedCells,shouldChangeSymbols);
      markSpaceWithZero(id,upDateCells,updateOccupiedCells);
      setShouldCheckForVictory(true);
      setIsMoveOfZero(false); 
    }
  },[IsMoveOfZero])



  useEffect(()=>{
    if(result.player!=null){
      switch(result.player){
        case 'cross':
          props.addVictory();
          break;
        case 'zero':
          props.addDefeat();
          break;
        case 'tie':
          props.addTie();
      }
    }
  },[result.player])

  const GoToResultsPage=()=>{
    navigate('/Results',{
      state:{
        result:result.player
      }
    })
  }

  return(
    <>
      <H1>Tic Tac Toe</H1>
      <GameField  shouldChangeSymbols={shouldChangeSymbols} cells={cells} occupiedCells={occupiedCells} upDateCells={upDateCells} updateOccupiedCells={updateOccupiedCells} result={result} />
      <div className={classes.TurboButtonContainer}>
        {shouldChangeSymbols ? <P size='large'>Turbo Regime is on</P>:<ButtonWithText onClick={()=>{setShouldChangeSymbols(true)}}><p>Turbo Regime</p></ButtonWithText>}
      </div>
      {result.player ? <ButtonWithText onClick={GoToResultsPage}><p>Get Results</p></ButtonWithText> : null}
    </>
  )
}


export default Game;