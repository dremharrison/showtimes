import React from 'react'
import { TextField, Container, ImageList, ImageListItem, ImageListItemBar, Grid } from '@mui/material'


function HomeComponent({ filmsData }) {

    return (

        <Container>
            <TextField className="search-films-text-field" id="filled-basic" label="search now playing" variant="filled" margin="dense" fullWidth />
            <Grid container justifyContent="center">
                <ImageList sx={{ width: '60%', height: '40%', }} cols={3} gap={8}>
                    {filmsData.map((item) => (
                        <ImageListItem onClick={console.log(item.title)} key={item.image}>
                            <img
                                src={`${item.image}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                // subtitle={<span>by: {item.author}</span>}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>

        </Container>



    );
}

export default HomeComponent;