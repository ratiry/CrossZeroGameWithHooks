import classes from './FieldGame.module.scss';
import { useMemo } from 'react';
import CheckOccupiedCell from '../../../../Helpers/CheckOccupiedCell';
let Space=(props)=>{
  
  
  let Cases=[
    <img src='https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png'/>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>,
  null
];
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
    <div className={classes.Space} onClick={()=>{props.markSpaceWithCross(props.id)}} >
      {Cases[Case]}
      {lineCases[lineCase]}
    </div>
  )
}
export default Space;