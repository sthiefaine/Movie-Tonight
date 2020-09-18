import { connect } from 'react-redux';

import Home from '../../components/Home';

import { 
    getMovieUpComing,
} from '../../actions/movie';

import { 
    toggleFavorite,
} from '../../actions/favorite';

const mapStateToProps = (state) => ({
    movieUpComing: state.movie.movieUpComing,
    favoriteMovies: state.favorite.favoriteMovies,
});

const mapDispatchToProps = (dispatch) => ({

    getMovieUpComing: () => {
        dispatch(getMovieUpComing());
    },

    toggleFavorite: (value) => {
        dispatch(toggleFavorite(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
