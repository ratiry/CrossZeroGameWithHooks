
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
        <p className={classes.large}>{props.children}</p>
      )
    case 'small':
      return(
        <p className={classes.large}>{props.children}</p>
      )
    default:
      return(
       <p>{props.children}</p>
      )
  }
}