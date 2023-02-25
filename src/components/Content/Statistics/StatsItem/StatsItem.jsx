
import classes from './StatsItem.module.scss';
import { P } from '../../../common/Typography/Typography';

const StatsItem=(props)=>{
  return(
    <div className={classes.Item}>
      <div className={classes.number}>
        <P size='small' > {props.number }</P>
      </div>
      <div className={classes.type}>
        <P size='small'>{props.type}</P>
      </div>
      <div className={classes.img}>
      <img src={props.img}></img>
      </div>
    </div>
  )
}

export default StatsItem;