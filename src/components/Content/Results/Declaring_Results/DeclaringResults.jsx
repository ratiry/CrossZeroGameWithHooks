import classes from './DeclaringResults.module.scss';
let DeclaringResults=(props)=>{
  let Case=0;
  let Cases=[
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
      <p>{Cases[Case].result}</p>
      <img src={Cases[Case].img}/>
    </div>
  )
}
export default DeclaringResults;