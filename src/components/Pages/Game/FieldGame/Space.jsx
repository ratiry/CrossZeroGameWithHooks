import classes from './FieldGame.module.scss';
import { useMemo } from 'react';
import CheckOccupiedCell from '../../../../Helpers/CheckOccupiedCell';
import { useRef } from 'react';
let Space=(props)=>{
  
  let onCkickFunction=()=>{
    if(props.result.player ===null){
      if(props.whose==='zero'){
        props.setTouchZeroCount(setTouchZeroCount=> setTouchZeroCount+1);
      }
      props.markSpaceWithCross(props.id,props.upDateCells,props.updateOccupiedCells);
    }
  }
    
  let Cases=[
    <img src='https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png'/>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>,
  null
];
let ExtraCases=[
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>,
  null
]
let lineCase=0;

let lineCases=[
  null,
  <div className={classes.line}></div>,
  <div className={classes.line + ' ' + classes.vertical}></div>,
  <div className={classes.line + ' ' + classes.RightDiagonal}></div>,
  <div className={classes.line + ' ' + classes.LeftDiagonal}></div>
]
if(props.result.player=='zero' || props.result.player=='cross'){
  if(props.result.winning_consequence.some(id=>id===props.id)){
    if(props.result.direction==="horizontal"){
      lineCase=1;
    }else if(props.result.direction==='vertical'){
      lineCase=2
    }else if(props.result.direction==='LeftDiagonal'){
      lineCase=4;
    }else{
      lineCase=3;
    }
  }
}

  let Case=2;
  if(props.whose=='zero'){
    Case=1;
  }else if(props.whose=='cross'){
    Case=0;
  }
  return(
    <div className={classes.Space}  onClick={onCkickFunction} >
      {props.shouldChangeSymbols ? ExtraCases[Case] :Cases[Case]}
      {lineCases[lineCase]}
    </div>
  )
}
export default Space;