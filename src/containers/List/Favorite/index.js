import { connect } from 'react-redux';

import ListFavorite from '../../../components/Lists/Favorite';

import { 
    toggleFavorite,
} from '../../../actions/favorite';

const mapStateToProps = (state) => ({
    favoriteMovies: state.favorite.favoriteMovies,
});

const mapDispatchToProps = (dispatch) => ({
    toggleFavorite: (value) => {
        dispatch(toggleFavorite(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListFavorite);
