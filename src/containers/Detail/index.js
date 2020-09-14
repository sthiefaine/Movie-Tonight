import { connect } from 'react-redux';

import Detail from '../../components/Detail';

import { 
    getMovieInfo,
} from '../../../src/actions/movie';

const mapStateToProps = (state) => ({
    moviesSearchResults: state.movie.moviesSearchResults,
    movieInfo: state.movie.movieInfo,
});

const mapDispatchToProps = (dispatch) => ({

    getMovieInfo: (value) => {
        dispatch(getMovieInfo(value));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
