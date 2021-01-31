import './MovieItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";


function MovieItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const toDetails = () => {
        console.log('clicked: ', movie.title)
        history.push(`/details/${movie.id}`)
    }


    return (
        <div className="movie-card" onClick={toDetails}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} className="poster-image"/>
        </div>
    )
}

export default MovieItem;