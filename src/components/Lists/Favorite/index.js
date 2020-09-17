import React from 'react'
import { StyleSheet, SafeAreaView, FlatList} from 'react-native'

import Cards from '../../Cards'

const ListFavorite = ({
    favoriteMovies,
    toggleFavorite,
}) => {

    const moviesList = favoriteMovies;

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
                        ({item}) => <Cards
                            movieInfo={item} 
                            favoriteMovies={favoriteMovies}
                            toggleFavorite={toggleFavorite}
                        />
                    }
                    />
            )}
        </>
    )
}


export default ListFavorite;
