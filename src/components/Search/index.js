import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native'

const Search = (
  {
    setMoviesSearchValue,
    getMoviesSearch,
    cleanMoviesSearch,
    totalPageResultValue,
    moviesSearchValue,
  }) => {



  const handleOnChangeSearchMoviesValue = (id, text) => {
    console.log('handleOnClickSearchMovies', id, text)
    setMoviesSearchValue(id, text);
  }

  const handleOnClickSearchMovies = () => {
    console.log('handleOnClickSearchMovies')
    Keyboard.dismiss();
    cleanMoviesSearch();
    getMoviesSearch(1);
  }



    return (
        <View>
            <TextInput 
              id='searchMovie'
              style={styles.textinput} 
              placeholder='Titre du film' 
              value={moviesSearchValue}
              onChangeText={(text) => handleOnChangeSearchMoviesValue('searchMovie', text)}
              onSubmitEditing={() => handleOnClickSearchMovies()}
            />
            <Button title='Rechercher' onPress={() => handleOnClickSearchMovies()}/>
            <Text>je veux1: {moviesSearchValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  })

export default Search;
