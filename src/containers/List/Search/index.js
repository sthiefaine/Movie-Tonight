import { connect } from 'react-redux';

import ListSearch from '../../../components/Lists/Search';

import { 
    getMoviesSearch,
} from '../../../actions/movie';

import { 
    toggleFavorite,
} from '../../../actions/favorite';

const mapStateToProps = (state) => ({
    moviesSearchResults: state.movie.moviesSearchResults,
    favoriteMovies: state.favorite.favoriteMovies,
});

const mapDispatchToProps = (dispatch) => ({
    getMoviesSearch: (paginationValue) => {
        dispatch(getMoviesSearch(paginationValue));
    },
    toggleFavorite: (value) => {
        dispatch(toggleFavorite(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListSearch);
