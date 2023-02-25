import classes from './Welcome.module.scss';
import { ButtonWithText } from '../../common/buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { H1, P } from '../../common/typography/Typography';
import { GamePageUrl } from '../../../App'

const Welcome=()=>{
  
    const navigate=useNavigate();
  
    return(
      <div className={classes.Welcome}>
        <H1>Hello, traveler of a browser</H1>
        <P>
          Do you dare to < strong>lose</strong>  to the dumbest computer player of tic tac toe?
        </P>
        <ButtonWithText onClick={() => navigate(GamePageUrl)}><p>Just Do It</p></ButtonWithText>
        <img src={'https://media.makeameme.org/created/hooks-everywhere.jpg'}/>
      </div>
    )
}
export default Welcome;