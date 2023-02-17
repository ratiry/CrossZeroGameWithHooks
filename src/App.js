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

function App() {

  return (
    <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <div className={classes.Content}>
            <Routes>
              <Route path={'/'} element={<Welcome/>} />
              <Route path={'/Game' } element={<Game />}/>
              <Route path={'/Results'} element={<Results />}/>
              <Route path={'*'} element={<NotFound/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App;
