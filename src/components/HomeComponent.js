import React, { useEffect, useState } from 'react'
import { TextField, Container, ImageList, ImageListItem, ImageListItemBar, Grid } from '@mui/material'

function HomeComponent() {
    const [response, setResponse] = useState([]);
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState()

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not OK')
                }
                return res.json();
            })
            .then((data) => {
                setQueryResults(data.results)
            })
            .catch(err => {
                console.error(err)
            })
    }, [query]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not OK')
                }
                return res.json();
            })
            .then((data) => {
                setResponse(data.results)
            })
            .catch(err => {
                console.error(err)
            })
    }, []);

    return (
        < Container >
            <TextField className="search-films-text-field" onChange={handleChange} id="filled-basic" label="search now playing" variant="filled" margin="dense" fullWidth />
            <Grid container justifyContent="center">
                <ImageList sx={{ width: '60%', height: '40%', }} cols={2} gap={8}>
                    {(query.length !== 0 ? queryResults === undefined ? response : queryResults : response).map((item) => (
                        <ImageListItem onClick={() => console.log(item.title)} key={item.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}
                                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={<span>released: {item.release_date}</span>}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </Container >

    );
}

export default HomeComponent;