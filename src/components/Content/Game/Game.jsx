import GameField from './FieldGame/FieldGame';
import classes from './Game.module.scss';
import { FILL_SPACE_WITH_CROSS_AC,FILL_SPACE_WITH_ZERO_AC ,SWITCH_CROSS_TO_ZERO_AC} from '../../../redux/cells_reducer';
import { connect } from 'react-redux';
import { PlayersMoveThunk } from './../../../redux/cells_reducer';
import GetResultsButton from './GetResultsButton';
let Game=(props)=>{
  return(
    <div className={classes.Game_container}>
      <h1>Tic Tac Toe</h1>
      <GameField {...props} />
      {props.result.player ? <GetResultsButton/> : null}
    </div>
  )
}
let mapDispatchToProps={
  FILL_SPACE_WITH_CROSS_AC,FILL_SPACE_WITH_ZERO_AC,PlayersMoveThunk,SWITCH_CROSS_TO_ZERO_AC
}
let mapStateToProps=(state)=>({
  cells:state.cellsState.cells,
  occuppied_Cells:state.cellsState.occuppied_Cells,
  result:state.cellsState.result
})
export default connect(mapStateToProps,mapDispatchToProps)(Game);