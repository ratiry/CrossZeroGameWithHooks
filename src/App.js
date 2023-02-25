import { BrowserRouter, Routes,Route } from 'react-router-dom';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Game from './components/Content/Game/Game';
import Welcome from './components/Content/Welcome/Welcome';
import Results from './components/Content/Results/Results';
import NotFound from './components/Content/NotFound/NotFound';
import useLocalStorage from './Helpers/Hooks/useLocalStorage';
import Statistics from './components/Content/Statistics/Statistics';
import Container from './components/common/layout/Container';

export const GamePageUrl = '/Game';
export const StatisticsPageUrl = '/Statistics';
export const ResultsPageUrl = '/Results';

function App() {
  let [Victories,setVictories]=useLocalStorage('amountOfVictories', 0);
  let [Defeats,setDefeats]=useLocalStorage('amountOfDefeats', 0);
  let [Ties,setTies]=useLocalStorage('amountOfTies', 0);

  const addVictory=()=>{
    setVictories(Victories=>Victories+1);
  }
  const addDefeat=()=>{
    setDefeats(Defeats=>Defeats+1);
  }
  const addTie=()=>{
    setTies(Ties=>Ties+1);
  }
  
  return (
    <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <div className={classes.Content}>
            <Container>
              <Routes>
                <Route path={'/'} element={<Welcome/>} />
                <Route path={GamePageUrl} element={<Game addVictory={addVictory} addDefeat={addDefeat} addTie={addTie}/>}/>
                <Route path={ResultsPageUrl} element={<Results />}/>
                <Route path={'*'} element={<NotFound/>} />
                <Route path={StatisticsPageUrl} element={<Statistics setVictories={setVictories} setDefeats={setDefeats} setTies={setTies} Victories={Victories} Defeats={Defeats} Ties={Ties}/>}/>
              </Routes>
            </Container>
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App;
