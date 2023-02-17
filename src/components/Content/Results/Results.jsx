
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import classes from './Results.module.scss';
import DeclaringResults from './Declaring_Results/DeclaringResults';
import { H1, } from '../../common/Typography/Hs&P';
import { ButtonWithIcon } from '../../common/Buttons/Buttons';
let Results=(props)=>{
  let location=useLocation();
  let navigate=useNavigate();
  let result='';
  let onClickHomeButton=()=>{
    navigate('/')
  }
  let onClickRestartButton=()=>{
    navigate('/Game');
  }
  if(location.state !=null){
    switch(location.state.result){
      case 'tie':
        result='tie'
        break
      case 'cross':
        result='cross'
        break
      case 'zero':
        result='zero'
        break;
      default:
        result=''
    }
    return(
      <div  className={classes.Results}>
        <H1>Results</H1>
        <DeclaringResults result={result}/>
        <div className={classes.buttonsContainer}>
          <ButtonWithIcon onClick={onClickHomeButton}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></ButtonWithIcon>
          <ButtonWithIcon onClick={onClickRestartButton}>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"/></svg></ButtonWithIcon>
        </div>
      </div>
    )
  }else{
    return <Navigate to='/Game'/>
  }
}

export default Results;