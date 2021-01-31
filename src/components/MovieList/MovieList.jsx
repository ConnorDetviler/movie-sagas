import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem.jsx'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
}));

function MovieList() {
    const classes= useStyles();
    const spacing = 3;

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={() => history.push('/addmovie')}>Add Movie!</button>
            <Grid container justify="center" spacing={spacing}>
                {movies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movie={movie}/>
                    );
                })}
            </Grid>
        </main>

    );
}

export default MovieList;