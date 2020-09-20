import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View} from 'react-native';

import Cards from '../Cards';
import FadeIn from '../../animations/fadeIn';


const FlatListSearch = ({
    getMoviesSearch, 
    moviesSearchResults,
    favoriteMovies,
    toggleFavorite,
    watchedMovies,
    toggleWatched,
    toggleWantToWatch,
    wantToWatchMovies,
}) => {
   
    const moviesList = moviesSearchResults.moviesList;

    const paginationValue = moviesSearchResults.moviesActualPage; 
    const paginationNextValue = paginationValue + 1;

    const handleOnScrollSearchMovies = () => {
        console.log('handleOnScrollSearchMovies')
        console.log('pagination value =', paginationValue )

        if(
            moviesSearchResults.moviesTotalPage >= 1 &&
            (paginationNextValue <= moviesSearchResults.moviesTotalPage)
        ) {
            getMoviesSearch(paginationNextValue);
        }
    }


    return (
        <>
            {moviesSearchResults?.moviesNbResults && (
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
                        ({item}) => {

                            return (
                                <>
                                    {item?.overview.length !==0 && (
                                        <FadeIn>
                                            <Cards
                                                movieInfo={item} 
                                                favoriteMovies={favoriteMovies}
                                                toggleFavorite={toggleFavorite}
                                                watchedMovies={watchedMovies}
                                                toggleWatched={toggleWatched}
                                                toggleWantToWatch={toggleWantToWatch}
                                                wantToWatchMovies={wantToWatchMovies}
                                            />
                                        </FadeIn>
                                    )}
                                </>
                            )
                        }
                    }
                    onEndReachedThreshold={0.5}
                    onEndReached={handleOnScrollSearchMovies}
                    />
            )}
        </>
    )
}

export default FlatListSearch;
