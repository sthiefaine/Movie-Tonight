import { connect } from 'react-redux';

import Search from '../../components/Search';

import { 
    setMoviesSearchValue,
    getMoviesSearch,
} from '../../actions/movie';

const mapStateToProps = (state) => ({
    moviesSearchValue: state.movie.searchMovie,
});

const mapDispatchToProps = (dispatch) => ({

    setMoviesSearchValue: (id, value) => {
        console.log('setMoviesSearchValue', id, value)
        dispatch(setMoviesSearchValue(id, value));
    },

    getMoviesSearch: () => {
        dispatch(getMoviesSearch());
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
