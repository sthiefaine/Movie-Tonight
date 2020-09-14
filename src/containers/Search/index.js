import { connect } from 'react-redux';

import Search from '../../../src/components/Search';

import { 
    setMoviesSearchValue,
    getMoviesSearch,
    cleanMoviesSearch,
} from '../../../src/actions/movie';

const mapStateToProps = (state) => ({
    moviesSearchValue: state.movie.searchMovie,
    totalPageResultValue: state.movie.moviesSearchTotalPage,
});

const mapDispatchToProps = (dispatch) => ({

    setMoviesSearchValue: (id, value) => {
        console.log('setMoviesSearchValue', id, value)
        dispatch(setMoviesSearchValue(id, value));
    },

    getMoviesSearch: (paginationValue) => {
        dispatch(getMoviesSearch(paginationValue));
    },

    cleanMoviesSearch: () => {
        dispatch(cleanMoviesSearch());
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
