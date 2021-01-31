import './MovieItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
      width: 200
    },
});

function MovieItem({movie}) {
    const classes = useStyles();

    const history = useHistory();
    const dispatch = useDispatch();

    const toDetails = () => {
        console.log('clicked: ', movie.title)
        history.push(`/details/${movie.id}`)
    }


    return (
        <Grid item className="movie-card" onClick={toDetails}>
            <Card>
                <CardActionArea>
                    <h3>{movie.title}</h3>
                    <CardMedia
                        className={classes.media}
                        image={movie.poster}
                        title={movie.title}
                    />
                    {/* <img src={movie.poster} alt={movie.title} className="poster-image"/> */}
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default MovieItem;