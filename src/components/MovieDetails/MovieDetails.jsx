import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function MovieDetails() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movieDetails = useSelector((store) => store.genres)
    let { id } = useParams();
    console.log(id)

    useEffect(() => {
        dispatch({
            type: 'FETCH_GENRES',
            payload: id
        });
    }, []);

    return(
        // <p>hello</p>
        <div>
            {/* <p>you've made it to movie details for {movieDetails.title} </p> */}
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.description}</p>
            <img src={movieDetails.poster} alt={"movie Poster for", movieDetails.title} />
            <ul>
                {movieDetails.genres.map((genre) => {
                    return <li key={movieDetails.genres.indexOf(genre)}>{genre}</li>
                })}
            </ul>
            <button onClick={() => history.push('/')} >Back</button>
        </div>
    )
}

export default MovieDetails;