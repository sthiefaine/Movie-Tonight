import { connect } from 'react-redux';

import FlatListSearch from '../../components/Search/flatList';

import { 
    getMoviesSearch,
} from '../../actions/movie';

import { 
    toggleFavorite,
} from '../../actions/favorite';

import { 
    toggleWatched,
} from '../../actions/watched';

import {
    toggleWantToWatch,
} from '../../actions/wantToWatch';

const mapStateToProps = (state, ownProps) => ({
    moviesListName: ownProps.moviesListName,
    moviesSearchResults: state.movie.moviesSearchResults,
    favoriteMovies: state.favorite.favoriteMovies,
    watchedMovies: state.watched.watchedMovies,
    wantToWatchMovies: state.wantToWatch.wantToWatchMovies,
});

const mapDispatchToProps = (dispatch) => ({
    getMoviesSearch: (paginationValue) => {
        dispatch(getMoviesSearch(paginationValue));
    },
    toggleFavorite: (value) => {
        dispatch(toggleFavorite(value));
    },
    toggleWatched: (value) => {
        dispatch(toggleWatched(value));
    },
    toggleWantToWatch: (value) => {
        dispatch(toggleWantToWatch(value));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FlatListSearch);
