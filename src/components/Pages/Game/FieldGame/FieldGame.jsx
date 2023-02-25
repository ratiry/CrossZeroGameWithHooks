import classes from './FieldGame.module.scss';
import Space from './Space';
import markSpaceWithCross from '../../../../Helpers/markSpaceWithCross';

const GameField=(props)=>{

  const MarkWithCross=(id)=>{
    if(props.result.player===null){
      markSpaceWithCross(id,props.occupiedCells,props.upDateCells,props.updateOccupiedCells)
    }
  }

  const SpaceArray=props.cells.map((S)=>{ return <Space  markSpaceWithCross={()=>{MarkWithCross(S.id)}} {...props} id={S.id} whose={S.whose} />})
  
  return(
    <div className={classes.GameField}>
      {SpaceArray}
    </div>
  ) 
}

export default GameField;