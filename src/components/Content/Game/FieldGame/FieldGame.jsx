import classes from './FieldGame.module.scss';
import Space from './Space';

let GameField=(props)=>{
  let SpacArray=props.cells.map((S)=>{ return <Space  {...props} id={S.id} whose={S.whose} />})
  return(
 <div className={classes.GameField}>
    {SpacArray}
  </div>
  ) 
}
export default GameField;