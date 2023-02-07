import classes from './FieldGame.module.scss';
import Space from './Space';
import markSpaceWithCross from '../../../../Helpers/markSpaceWithCross';
let GameField=(props)=>{
  let SpaceArray=props.cells.map((S)=>{ return <Space  markSpaceWithCross={props.markSpaceWithCross} {...props} id={S.id} whose={S.whose} />})
  return(
 <div className={classes.GameField}>
    {SpaceArray}
  </div>
  ) 
}
export default GameField;