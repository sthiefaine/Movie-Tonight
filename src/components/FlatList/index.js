import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';


import Cards from '../Cards';
import FadeIn from '../../animations/fadeIn';

const FlatListComponent = ({
    moviesListName,
    moviesSearchResults,
    favoriteMovies,
    toggleFavorite,
    watchedMovies,
    toggleWatched,
    toggleWantToWatch,
    wantToWatchMovies,
}) => {

    moviesList = '';
    //? react navigation 5 is tricky
    // With 'TopBar' in list section 
    // moviesListName can be null due to component={Flatlist} props restriction so we will get useRoute().name value
    // we can pass params in the navigation 'TopBar' if u do that use useNavigation().params
    const moviesListNameCheck = moviesListName ?? useRoute().name;
    if (moviesListNameCheck === "moviesSearchResults") {
        moviesList = moviesSearchResults.moviesList;
    }
    if (moviesListNameCheck === "ListFavorite") {
        moviesList = favoriteMovies.reverse();
    }
    if (moviesListNameCheck === "ListWatched") {
        moviesList = watchedMovies.reverse();
    }
    if (moviesListNameCheck === "ListWantToWatch") {
        moviesList = wantToWatchMovies.reverse();
    }


    return (
        <>
            {moviesList?.length >= 1 && (
                    <FlatList
                    data={moviesList}
                    extraData={
                        favoriteMovies,
                        toggleFavorite,
                        watchedMovies,
                        toggleWatched,
                        toggleWantToWatch,
                        wantToWatchMovies
                    }
                    keyExtractor={item => item.id.toString()}
                    renderItem={
                        ({item}) => <FadeIn><Cards
                        movieInfo={item} 
                            favoriteMovies={favoriteMovies}
                            toggleFavorite={toggleFavorite}
                            watchedMovies={watchedMovies}
                            toggleWatched={toggleWatched}
                            toggleWantToWatch={toggleWantToWatch}
                            wantToWatchMovies={wantToWatchMovies}
                        /></FadeIn>
                    }
                    />
            )}
        </>
    )
}


export default FlatListComponent;