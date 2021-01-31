import { useHistory } from 'react-router-dom'
import { useState } from 'react'

function AddMovie() {

    const history = useHistory();

    let [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    })

    const handleChange = (event) => {
        // console.log(event.target.name, event.target.value)
        const value = event.target.value;
        setNewMovie({...newMovie, [event.target.name]: value})
    }

    const newMovieSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h2>Add a new movie!</h2>
            <form onSubmit={newMovieSubmit}>
                <input
                    placeholder="title"
                    type="text"
                    value={newMovie.title}
                    onChange={handleChange}
                    name="title"
                />
                <input
                    placeholder="image url"
                    type="text"
                    value={newMovie.poster}
                    onChange={handleChange}
                    name="poster"
                />
                <textarea
                    placeholder="description"
                    value={newMovie.description}
                    onChange={handleChange}
                    name="description"
                ></textarea>
                <select
                    value={newMovie.genre_id}
                    onChange={handleChange}
                    name="genre_id"
                >
                    <option defaultValue="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
                </select>
                <input type="submit"/>
            </form>
            <button onClick={() => history.push('/')} >cancel</button>
        </div>
    )
}

export default AddMovie