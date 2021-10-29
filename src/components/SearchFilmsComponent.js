import React, { useEffect, useState } from 'react'
import { TextField, Container, ImageList, ImageListItem, ImageListItemBar, Grid, Typography, Modal, Box, Rating } from '@mui/material'

function SearchFilmsComponent() {
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState()
    const [open, setOpen] = useState(false);
    const [openedMovieObject, setOpenedMovieObject] = useState({});

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
                console.log(data.results)
            })
            .catch(err => {
                console.error(err)
            })
    }, [query]);

    const handleOpen = (movie) => {
        setOpen(true)
        setOpenedMovieObject(movie)
    };

    const handleClose = () => setOpen(false);

    const truncateString = (str, num) => {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Grid container  >
            <Typography variant="h5" mt={5} color="#fff" component="div">
                Search Films
            </Typography>

            <ImageList sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: 0,
            }}>
                {(query.length !== 0 ? queryResults !== undefined ? queryResults.map((item) => (
                    <ImageListItem sx={{ width: '200px', height: 'auto' }} onClick={() => handleOpen(item)} key={item.id}>
                        <img
                            src={item.poster_path !== null ? `https://image.tmdb.org/t/p/w400/${item.poster_path}` : `https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4=`}
                            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={`${item.title}`}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{ width: '200px' }}
                            title={item.title}
                            position="below"
                        />
                    </ImageListItem>
                )) : null : null)}
            </ImageList>

            <TextField className="search-films-text-field" onChange={handleChange} id="filled-basic" label="search by film title" variant="filled" margin="dense" fullWidth />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {openedMovieObject.title}
                    </Typography>
                    <img
                        src={openedMovieObject.poster_path !== null ? `https://image.tmdb.org/t/p/w400/${openedMovieObject.poster_path}` : `https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4=`}
                        srcSet={`${openedMovieObject.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={`${openedMovieObject.title}`}
                        loading="lazy"
                    />
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        {open === true ? truncateString(openedMovieObject.overview, 200) : ""}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        {`released date: ${openedMovieObject.release_date}`}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        {`original language: ${openedMovieObject.original_language}`}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        {`original title: ${openedMovieObject.original_title}`}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        {`review: ${openedMovieObject.vote_average / 2}/5`}
                    </Typography>
                    <Rating name="read-only" value={openedMovieObject.vote_average / 2} max={5} precision={.5} readOnly />
                </Box>
            </Modal>
        </Grid >
    );
}

export default SearchFilmsComponent;