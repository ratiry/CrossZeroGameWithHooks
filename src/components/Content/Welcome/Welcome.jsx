import classes from './Welcome.module.scss';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ButtonWithText } from '../../common/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { H1, P } from '../../common/Typography/Hs&P';
import Container from '../../common/Typography/Container/Container';
let Welcome=()=>{
    let navigate=useNavigate();
    let GoToGamePage=()=>{
      navigate('/Game');
    }
    return(
      <>
          <div className={classes.Welcome}>
        {/* <P size='large'>Hello , BlaBla</P> */}
        <H1>Hello , BlaBla</H1>
          <P >
            Do you dare to < strong>lose</strong>  to the dumbest computer player of tic tac toe?
          </P>
        <ButtonWithText onClick={GoToGamePage}><p>Just Do It</p></ButtonWithText>
          <img src={'https://media.makeameme.org/created/hooks-everywhere.jpg'}/>
        </div>
      </>
    )
}
export default Welcome;