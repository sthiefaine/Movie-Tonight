import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList} from 'react-native';

import Cards from '../../Cards';
import FadeIn from '../../../animations/fadeIn';

import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';

const ListFavorite = ({
    favoriteMovies,
    toggleFavorite,
}) => {

    const moviesList = favoriteMovies.reverse();

    return (
        <>
            {moviesList?.length >= 1 && (
                    <FlatList
                    data={moviesList}
                    extraData={
                        favoriteMovies,
                        toggleFavorite
                    }
                    keyExtractor={item => item.id.toString()}
                    renderItem={
                        ({item}) => <FadeIn><Cards
                            movieInfo={item} 
                            favoriteMovies={favoriteMovies}
                            toggleFavorite={toggleFavorite}
                        /></FadeIn>
                    }
                    />
            )}
        </>
    )
}


export default ListFavorite;
