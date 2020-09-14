import { connect } from 'react-redux';

import List from '../../components/List';

import { 
    getMoviesSearch,
} from '../../../src/actions/movie';


const mapStateToProps = (state) => ({
    moviesSearchResults: state.movie.moviesSearchResults,

});

const mapDispatchToProps = (dispatch) => ({
    getMoviesSearch: (paginationValue) => {
        dispatch(getMoviesSearch(paginationValue));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
