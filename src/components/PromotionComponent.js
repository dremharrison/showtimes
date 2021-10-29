import { Container, Grid } from '@mui/material';
import React from 'react';

const PromotionComponent = ({ movieTitle, movieLogo, movieVideo }) => {
    return (
        <Container sx={{ alignContent: "center" }}>
            <Grid container className="promotion-logo-img-container" id="promotion-container">
                <img width="40%" className="promotion-logo" alt={`${movieTitle} logo`} src={movieLogo} />
            </Grid>
            <Grid container className="promotion-logo-video-container" id="promotion-container">
                <iframe width="50%" height="315" src={movieVideo} frameborder="0" title="promotion-video" allowfullscreen></iframe>
            </Grid>
        </Container>
    )
}

export default PromotionComponent;