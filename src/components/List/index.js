import React, {useState} from 'react'
import { StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'

import Cards from '../Cards'

const List = ({getMoviesSearch, moviesSearchResults}) => {

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
                <SafeAreaView style={styles.list_container}>
                    <FlatList
                    data={moviesSearchResults.moviesList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <Cards data={item} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={handleOnScrollSearchMovies}
                    />
                </SafeAreaView>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    list_container: {
      flex: 1
    },
});

export default List;
