import classes from './FieldGame.module.scss';
import Space from './Space';

let GameField=(props)=>{
  let markSpaceWithCross=(id)=>{
    props.upDateCells(Cells=>
      Cells.map((s)=>{
        if(s.id==id & s.whose===null){
          return {...s,whose:'cross'}
        }else{
          return s
        }
      }),
    )
  }
  let SpaceArray=props.cells.map((S)=>{ return <Space  markSpaceWithCross={markSpaceWithCross} {...props} id={S.id} whose={S.whose} />})
  return(
 <div className={classes.GameField}>
    {SpaceArray}
  </div>
  ) 
}
export default GameField;