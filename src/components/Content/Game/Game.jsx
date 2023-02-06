import GameField from './FieldGame/FieldGame';
import classes from './Game.module.scss';
import { connect } from 'react-redux';
import GetResultsButton from './GetResultsButton';
let Game=(props)=>{
  return(
    <div className={classes.Game_container}>
      <h1>Tic Tac Toe</h1>
      <GameField  {...props} />
      {props.result.player ? <GetResultsButton/> : null}
    </div>
  )
}


export default Game;