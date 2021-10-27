import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import { FakeFilmData } from './shared/FakeFilmData';
import FilmComponent from './components/FilmComponent';

function App() {

  return (
    <div className="App">
      <AppBar position="static" className="home-appbar">
        <Toolbar variant="dense" className="home-toolbar">
          <Typography variant="h6" color="white" component="div">
            Showtimes
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomeComponent filmsData={FakeFilmData} />
          </Route>
          <Route path="/film">
            <FilmComponent />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
