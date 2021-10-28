import './App.css';
import { AppBar, Toolbar, Typography, InputAdornment, TextField, Grid } from '@mui/material'
import HomeComponent from './components/HomeComponent';
import { MyLocation } from '@mui/icons-material';

function App() {

  return (
    <div className="App">
      <AppBar position="static" className="home-appbar">
        <Toolbar sx={{justifyContent: "space-between"}} variant="dense" className="home-toolbar">
          <Typography variant="h6" color="white" component="div">
            Showtimes
          </Typography>
          <Grid component="div">
            <TextField id="filled-basic" label="input postal code" variant="filled" size="small"  margin="normal" InputProps={{
              endAdornment: (
            <InputAdornment position="end">
              <MyLocation />
            </InputAdornment>
          ),
        }}/>
          </Grid>

        </Toolbar>
      </AppBar>
      <HomeComponent />
    </div>
  );
}

export default App;
