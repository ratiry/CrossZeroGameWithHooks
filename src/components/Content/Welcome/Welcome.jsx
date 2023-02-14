import classes from './Welcome.module.scss';
import Appclasses from './../../../App.module.scss';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ButtonWithText } from '../../common/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
let Welcome=()=>{
    let navigate=useNavigate();
    let GoToGamePage=()=>{
      navigate('/Game');
    }
    return(
      <div className={classes.Welcome + ' ' + Appclasses.container }>
        <p>
          Hello, BlaBlaBla
        </p>
        <p>
          Do you dare to < strong>lose</strong>  to the dumbest computer player of tic tac toe?
        </p>
       <ButtonWithText onClick={GoToGamePage}><p>Just Do It</p></ButtonWithText>
        <img src={'https://media.makeameme.org/created/hooks-everywhere.jpg'}/>
      </div>
    )
}
export default Welcome;