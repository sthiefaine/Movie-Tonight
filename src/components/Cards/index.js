import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { getImageFromApi } from '../../services/TMDBApi'

import { HeartIcon } from '../../icons/icons';

import moment from 'moment';

const Cards = ({
  movieInfo, 
  favoriteMovies,
  toggleFavorite,
}) => {

  const navigation = useNavigation();
  const route = useRoute();

  const handleOnPressDetailForMovie = (movieId)  => {
    console.log('handleOnPressDetailForFilm', movieId)
    const routeName = route.name === 'FavList' ? 'FavDetails' : 'SearchDetails';
    /**
     * @param : route Name
     * @param2: Object into params
     */
    navigation.navigate(routeName, {
      movieId: movieId,
    }); 
  }

  const displayFavoriteImage = () => {
    const size = '20';
    var colorFill = 'none';
    var stroke = 'blue';

    if (favoriteMovies.findIndex(item => item.id === movieInfo.id) !== -1) {
      // Film dans nos favoris
      colorFill = 'red';
      stroke = 'red';
    }

    return (
      <View>
        <HeartIcon 
        colorFill={colorFill} 
        stroke={stroke}
        size={size}
        />
      </View>
    )
  }

  const handleOnPressToggleFavorite = () => {
    console.log('handleOnPressToggleFavorite Cards', movieInfo?.id)
   toggleFavorite(movieInfo); 
  }

    return (
        <TouchableOpacity 
          style={styles.main_container}
          onPress={() => handleOnPressDetailForMovie(movieInfo.id)}
        >
            <Image
                style={styles.image}
                source={{uri: getImageFromApi(movieInfo.poster_path)}}
            />
            <View style={styles.content_container}>

                <View style={styles.header_container}>
                    <Text style={styles.title_text}>{movieInfo.title}</Text>
                    <Text style={styles.vote_text}>{movieInfo.vote_average}</Text>
                </View>

                <View style={styles.description_container}>
                    <Text 
                      style={styles.description_text} 
                      numberOfLines={6}
                    >
                      {movieInfo.overview}
                    </Text>
                {/* La propriété numberOfLines permet de couper un texte */}
                </View>
                <View style={styles.date_container}>
                  <Text style={styles.date_text}>{moment(new Date(movieInfo.release_date)).format('DD/MM/YYYY')}</Text>
                  <TouchableOpacity
                    style={styles.favorite_container}
                    onPress={() => handleOnPressToggleFavorite()}
                  >
                    {displayFavoriteImage()}
                  </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
      },
      image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
      },
      content_container: {
        flex: 1,
        margin: 5
      },
      header_container: {
        flex: 3,
        flexDirection: 'row'
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
      },
      vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
      },
      description_container: {
        flex: 7
      },
      description_text: {
        fontStyle: 'italic',
        color: '#666666'
      },
      date_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      date_text: {
        textAlign: 'right',
        fontSize: 14
      },
      favorite_container: {
      },
  })

export default Cards;
