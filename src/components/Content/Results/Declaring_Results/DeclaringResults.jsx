import classes from './DeclaringResults.module.scss';
import { H2 } from '../../../common/Typography/Typography';

const DeclaringResults=(props)=>{
  let Case=0;
  const Cases=[
    {result:'TIE',img:'https://i.imgflip.com/bero1.jpg?a464712'},
    {result:'victory',img:'https://media.makeameme.org/created/victory-5bc4da.jpg'},
    {result:'defeat',img:'https://media.makeameme.org/created/admit-your.jpg'}
  ]
  if(props.result=='cross'){
    Case=1;
  }else if(props.result=='zero'){
    Case=2;
  }
  return(
    <div className={classes.DeclaringResults_container}>
      <H2>{Cases[Case].result}</H2>
      <img src={Cases[Case].img}/>
    </div>
  )
}

export default DeclaringResults;