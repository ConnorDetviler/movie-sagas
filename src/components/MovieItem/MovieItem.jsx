import './MovieItem.css'

function MovieItem({movie}) {
    return (
        <div className="movie-card" >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
        </div>
    )
}

export default MovieItem;