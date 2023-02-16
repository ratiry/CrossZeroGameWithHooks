import classes from './Buttons.module.scss';
export let  ButtonWithIcon=(props)=>{
  return(
    <button className={classes.button_with_icon} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
export let ButtonWithText=(props)=>{
  return(
    <button onClick={props.onClick} className={classes.Button_with_text}>
       {props.children}
    </button>
  )
}