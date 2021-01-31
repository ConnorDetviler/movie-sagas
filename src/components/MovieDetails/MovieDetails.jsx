import { useParams } from 'react-router-dom';

function MovieDetails() {

    let { id } = useParams();
    console.log(id)

    return(
        <p>this is movie details {id}</p>
    )
}

export default MovieDetails;