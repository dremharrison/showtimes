import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material'
import HomeComponent from './components/HomeComponent';
import { FakeFilmData } from './shared/FakeFilmData';

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
      <HomeComponent filmsData={FakeFilmData} />
    </div>
  );
}

export default App;
