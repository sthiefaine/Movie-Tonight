import { connect } from 'react-redux';

import Detail from '../../components/Detail';

import { 
    getMovieInfo,
} from '../../actions/movie';

import { 
    toggleFavorite,
} from '../../actions/favorite';

const mapStateToProps = (state) => ({
    moviesSearchResults: state.movie.moviesSearchResults,
    movieInfo: state.movie.movieInfo,
    favoriteMovies: state.favorite.favoriteMovies,
});

const mapDispatchToProps = (dispatch) => ({

    getMovieInfo: (value) => {
        dispatch(getMovieInfo(value));
    },

    toggleFavorite: (value) => {
        dispatch(toggleFavorite(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
