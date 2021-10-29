import React from 'react'
import { Container } from '@mui/material'
import PromotionComponent from './PromotionComponent';
import UpcomingFilmsComponent from './UpcomingFilmsComponent';
import NowPlayingComponent from './NowPlayingComponent';
import SearchFilmsComponent from './SearchFilmsComponent';

function HomeComponent() {

    const movieTitle = "Addams Family 2"
    const movieLogo = "https://dx35vtwkllhj9.cloudfront.net/united-artists-releasing/the-addams-family-2-coppa/images/regions/us/tt.png"
    const movieVideo = "https://www.youtube.com/embed/Kd82bSBDE84"

    return (
        < Container sx={{ backgroundColor: "#81AF1A" }}>
            <PromotionComponent movieTitle={movieTitle} movieLogo={movieLogo} movieVideo={movieVideo} />
            <UpcomingFilmsComponent />
            <NowPlayingComponent />
            <SearchFilmsComponent />
        </Container >
    );
}

export default HomeComponent;