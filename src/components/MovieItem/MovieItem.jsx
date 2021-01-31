import './MovieItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";


function MovieItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const toDetails = () => {
        console.log('clicked: ', movie.title)
        dispatch({
            type: 'FETCH_GENRES',
            payload: movie
        })
    }


    return (
        <div className="movie-card" onClick={toDetails}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
        </div>
    )
}

export default MovieItem;