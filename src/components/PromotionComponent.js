import { Container } from '@mui/material';
import React from 'react';

const PromotionComponent = ({ movieTitle, movieLogo, movieVideo }) => {
    return (
        <Container sx={{ alignContent: "center" }}>
            <div className="promotion-logo-img-container">
                <img width="500" className="promotion-logo" alt={`${movieTitle} logo`} src={movieLogo} />
            </div>
            <div>
                <iframe width="560" height="315" src={movieVideo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </Container>
    )
}

export default PromotionComponent;