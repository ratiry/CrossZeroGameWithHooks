import './App.module.scss';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Game from './components/Content/Game/Game';
import Welcome from './components/Content/Welcome/Welcome';
import { useReducer, useState } from 'react';
import Results from './components/Content/Results/Results';
import NotFound from './components/Content/NotFound/NotFound';

function App() {
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
  window.cells=cells;
  return (
    <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <div className={classes.Content}>
            <Routes>
              <Route path={'/'} element={<Welcome/>} />
              <Route path={'/Game' } element={<Game  cells={cells}  upDateCells={upDateCells} updateOccupiedCells={updateOccupiedCells} result={result}/>}/>
              <Route path={'/Results'} element={<Results/>}/>
              <Route path={'*'} element={<NotFound/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App;
