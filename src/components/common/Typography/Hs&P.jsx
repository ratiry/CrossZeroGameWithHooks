
import classes from './Hs&P.module.scss';
export let H1=(props)=>{
  return(
    <h1>{props.children}</h1>
  )
}
export let H2=(props)=>{
  return(
    <h2>{props.children}</h2>
  )
}
export let P=(props)=>{
  switch(props.size){
    case 'large':
      return(
        <p onClick={props.onClick}  className={classes.large+ ' ' + classes.P}>{props.children}</p>
      )
    case 'small':
      return(
        <p onClick={props.onClick} className={classes.small + ' ' + classes.P}>{props.children}</p>
      )
    default:
      return(
       <p onClick={props.onClick}  className={props.P}>{props.children}</p>
      )
  }
}