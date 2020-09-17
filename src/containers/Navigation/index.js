import { connect } from 'react-redux';

import Navigation from '../../navigations';

const mapStateToProps = (state) => ({
    favoriteMoviesNb: state.favorite.favoriteMovies.length,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
