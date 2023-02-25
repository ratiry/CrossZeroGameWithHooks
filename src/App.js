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
import useLocalStorage from './Helpers/Hooks/useLocalStorage';
import Statistics from './components/Content/Statistics/Statistics';
import Container from './components/common/layout/Container';

function App() {
  const ammountOfVictories='ammountOfVictories';
  const ammountOfDefeats='ammountOfDefeats';
  const ammountOfTies='ammountOfTies';
  let [Victories,setVictories]=useLocalStorage(ammountOfVictories,0);
  let [Defeats,setDefeats]=useLocalStorage(ammountOfDefeats,0);
  let [Ties,setTies]=useLocalStorage(ammountOfTies,0);
  let addVictory=()=>{
    setVictories(Victories=>Victories+1);
  }
  let addDefeat=()=>{
    setDefeats(Defeats=>Defeats+1);
  }
  let addTie=()=>{
    setTies(Ties=>Ties+1);
  }
  console.log(Victories);
  return (
    <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <div className={classes.Content}>
            <Container>
              <Routes>
                <Route path={'/'} element={<Welcome/>} />
                <Route path={'/Game' } element={<Game addVictory={addVictory} addDefeat={addDefeat} addTie={addTie}/>}/>
                <Route path={'/Results'} element={<Results />}/>
                <Route path={'*'} element={<NotFound/>} />
                <Route path='/Statistics' element={<Statistics setVictories={setVictories} setDefeats={setDefeats} setTies={setTies} Victories={Victories} Defeats={Defeats} Ties={Ties}/>}/>
              </Routes>
            </Container>
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App;
