import React from 'react'
import { TextField, IconButton } from '@mui/material'
import { MyLocation } from '@mui/icons-material';

function FilmComponent() {
  return (
    <div className="film-component-container">
      <TextField id="filled-basic" label="input postal code" variant="filled" />
      <IconButton><MyLocation /></IconButton>
    </div>
  );
}

export default FilmComponent;