import './App.css';
import { AppBar, Toolbar, Typography, InputAdornment, TextField, Grid } from '@mui/material'
import HomeComponent from './components/HomeComponent';
import { MyLocation } from '@mui/icons-material';
import HeaderComponent from './components/HeaderComponent';

function App() {

  return (
    <div className="App">
      <HeaderComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
