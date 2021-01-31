import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function MovieDetails() {

    const dispatch = useDispatch();

    const movieData = useSelector((store) => store.genre)

    let { id } = useParams();
    console.log(id)

    useEffect(() => {
        dispatch({
            type: 'FETCH_GENRES',
            payload: id
        });
        console.log(movieData)
    }, []);

    return(
        <p>this is movie details {id}</p>
    )
}

export default MovieDetails;