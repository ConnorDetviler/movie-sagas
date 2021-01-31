import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres)
    yield takeEvery('ADD_NEW_MOVIE', addMovie)
}


function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }
}

function* fetchGenres(action) {
    // get genres for selected movie
    const id = action.payload;
    try {
        const movieGet = yield axios.get(`/api/genre/${id}`);
        const movieDetails = movieGet.data

        // for loop returns only the genres from the data recieved
        // then stores them in genreList array
        let genreList = [];
        for(let i = 0; i < movieDetails.length; i++) {
            genreList.push(movieDetails[i].name)
        }

        // object to be stored in reducer - only data that is needed
        const movieReducerObject = {
            id: movieDetails[0].id,
            title: movieDetails[0].title,
            description: movieDetails[0].description,
            poster: movieDetails[0].poster,
            genres: genreList
        }
        console.log('Reducer object: ', movieReducerObject)

        yield put({
            type: 'SET_GENRES',
            payload: movieReducerObject
        })
    } catch (error) {
        console.log('error in fetchGenres', error)
    }
}

function* addMovie(action) {
    try {
        const newMovie = action.payload;
        yield axios.post('/api/movie', newMovie);
        // yield put({})
    } catch (error) {
        console.log('error in index - addMovie:', error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const defaultGenreState = {
    id: 0,
    title: 'movie title',
    poster: 'img',
    description: 'movie description',
    genres: ['genre']
}

// Used to store the movie genres
const genres = (state = defaultGenreState, action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return {...state, ...action.payload}
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
