import { ButtonWithIcon, ButtonWithText } from "../../common/Buttons/Buttons";
import Container from "../../common/Typography/Container/Container";
import { H1 } from "../../common/Typography/Hs&P";
import classes from './Statistics.module.scss';
import StatsItem from "./StatsItem/StatsItem";
import { useNavigate } from 'react-router-dom';
let Statistics=(props)=>{
  let navigate=useNavigate();
let ToHomeClick=()=>{
  navigate('/')
}
let onResetClick=()=>{
  props.setVictories(0);
  props.setDefeats(0);
  props.setTies(0);
}
  return(
    <Container>
      <H1> Stats</H1>
      <div className={classes.StatsItem_Container}>
      <StatsItem number={props.Victories} type='Vctories' img='https://media.makeameme.org/created/yes-victory-5bdc2d.jpg'/>
      <StatsItem number={props.Defeats} type='Defeats' img='https://media.makeameme.org/created/admit-your.jpg'/>
      <StatsItem number={props.Ties} type='Ties' img='https://ih1.redbubble.net/image.1052582243.7719/st,small,845x845-pad,1000x1000,f8f8f8.jpg'/>
      </div>
      <div className={classes.Buttons}>
        <ButtonWithIcon onClick={ToHomeClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></ButtonWithIcon>
        <ButtonWithText onClick={onResetClick}><p>Reset</p></ButtonWithText>
      </div>
    </Container>
  )
}
export default Statistics;