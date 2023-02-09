import './App.module.scss';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Game from './components/Content/Game/Game';
import Welcome from './components/Content/Welcome/Welcome';
import { useReducer, useState, useEffect } from 'react';
import Results from './components/Content/Results/Results';
import NotFound from './components/Content/NotFound/NotFound';
import CheckForVictory from './Helpers/CheckForVictory';
import ZerosCellPick from './Helpers/ZerosCellPick';
import markSpaceWithZero from './Helpers/MarSpaceWithZero';
let setResul=(tempResult)=>({
  player:tempResult.player,
  winning_consequence:tempResult.winning_consequence,
  direction:tempResult.direction
})
function App() {
  let [IsMoveOfZero,setIsMoveOfZero] = useState(false);
  let [shouldCheckForVictory,setShouldCheckForVictory]=useState(false);
  let [cells,upDateCells]=useState([
    {whose:null,id:0},{whose:null,id:1},{whose:null,id:2},
    {whose:null,id:3},{whose:null,id:4},{whose:null,id:5},
    {whose:null,id:6},{whose:null,id:7},{whose:null,id:8},])
  let [occupiedCells,updateOccupiedCells]=useState({
    cross:[],
    zero:[]
  });
  let [result,upDateResult]=useState({
    player:null,
    winning_consequence:null,
    direction:null
  })
  window.store={
    cells:cells,
    occupiedCells:occupiedCells,
    result:result,
  }

  useEffect(()=>{
    if(occupiedCells.cross.length>0){
        let tempResult=CheckForVictory(cells,occupiedCells,3);
        if(tempResult.player!=null){
          upDateResult(setResul(tempResult));
        }else{
          setIsMoveOfZero(true);
        }
    }
  },[occupiedCells.cross])
  useEffect(()=>{
    if(shouldCheckForVictory){
      let tempResult=CheckForVictory(cells,occupiedCells,3);
      if(tempResult.player!=null){
        upDateResult(setResul(tempResult));
      }
      setShouldCheckForVictory(false);
    }
  },[shouldCheckForVictory])
  useEffect(()=>{
    if(IsMoveOfZero){
      let id=ZerosCellPick(cells,occupiedCells);
      markSpaceWithZero(id,upDateCells,updateOccupiedCells);
      setShouldCheckForVictory(true);
      setIsMoveOfZero(false); 
    }
  },[IsMoveOfZero])

  return (
    <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <div className={classes.Content}>
            <Routes>
              <Route path={'/'} element={<Welcome/>} />
              <Route path={'/Game' } element={<Game  cells={cells} occupiedCells={occupiedCells} upDateCells={upDateCells} updateOccupiedCells={updateOccupiedCells} result={result}/>}/>
              <Route path={'/Results'} element={<Results result={result}upDateResult={upDateResult} setIsMoveOfZero={setIsMoveOfZero} setShouldCheckForVictory={setShouldCheckForVictory} upDateCells={upDateCells} updateOccupiedCells={updateOccupiedCells}/>}/>
              <Route path={'*'} element={<NotFound/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App;
