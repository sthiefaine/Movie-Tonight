import React, {useState} from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { getImageFromApi } from '../../services/TMDBApi'

import { 
  HeartIcon, 
  EyeIcon,
  PlusIcon,
  CheckIcon,
} from '../../icons/icons';

import moment from 'moment';

const Cards = ({
  movieInfo, 
  favoriteMovies,
  toggleFavorite,
  watchedMovies,
  toggleWatched,
  toggleWantToWatch,
  wantToWatchMovies,
}) => {

  const navigation = useNavigation();
  const route = useRoute();

  const handleOnPressDetailForMovie = (movieId)  => {
    console.log('handleOnPressDetailForFilm', movieId)
    const routeName = route.name === 'SearchRecherche' ? 'SearchDetails': 'FilmDetails';


    /**
     * @param : route Name
     * @param2: Object into params
     */
    navigation.navigate(routeName, {
      movieId: movieId,
    }); 
  }

  const displayFavoriteImage = () => {
    const size = '30';
    var colorFill = 'none';
    var stroke = 'blue';

    if (favoriteMovies.findIndex(item => item.id === movieInfo.id) !== -1) {
      colorFill = 'green';
      stroke = 'red';
    }

    return (
    
        <HeartIcon 
        colorFill={colorFill} 
        stroke={stroke}
        size={size}
        />
    
    )
  }

  const displayWatchedImage = () => {
    const size = '30';
    var colorFill = 'none';
    var stroke = 'red';

    if (watchedMovies.findIndex(item => item.id === movieInfo.id) !== -1) {
      colorFill = 'green';
      stroke = 'green';
    }

    return (
    
        <EyeIcon
        colorFill={colorFill} 
        stroke={stroke}
        size={size}
        />
    
    )
  }

  const displayWantToWatchImage = () => {
    const size = '30';
    var stroke = 'blue';

    if (wantToWatchMovies.findIndex(item => item.id === movieInfo.id) !== -1) {


      stroke = 'green';
      return (
     
        <CheckIcon
        stroke={stroke}
        size={size}
        />
    
      )

    }

    return (
   
        <PlusIcon
        stroke={stroke}
        size={size}
        />
   
    )
  }


  const handleOnPressToggleFavorite = () => {
    console.log('handleOnPressToggleFavorite Cards', movieInfo?.id)
    toggleFavorite(movieInfo); 
  }

  const handleOnPressToggleWatched = () => {
    console.log('handleOnPressToggleWatched Cards', movieInfo?.id)
    toggleWatched(movieInfo); 
  }

  const handleOnPressToggleWantToWatch = () => {
    console.log('handleOnPressToggleWantToWatch Cards', movieInfo?.id)
    toggleWantToWatch(movieInfo); 
  }

    return (

        <TouchableOpacity 
          style={styles.main_container}
          onPress={() => handleOnPressDetailForMovie(movieInfo.id)}
        >
            <ImageBackground
                style={styles.image}
                source={{uri: getImageFromApi(movieInfo.poster_path)}}
            >
              <Text style={styles.date_text}>{moment(new Date(movieInfo.release_date)).format('DD/MM/YYYY')}</Text>
            </ImageBackground>
            <View style={styles.content_container}>

                <View style={styles.header_container}>
                    <Text style={styles.title_text}>{movieInfo.title}</Text>
                    
                </View>

                <View style={styles.description_container}>
                    <Text 
                      style={styles.description_text} 
                      numberOfLines={4}
                    >
                      {movieInfo.overview}
                    </Text>
                </View>
                <View style={styles.date_container}>

                  <Text style={styles.vote_text}>{movieInfo.vote_average}</Text>

                  <View style={styles.userActions}>

                  <TouchableOpacity
                    style={styles.icons}
                      onPress={() => handleOnPressToggleWantToWatch()}
                    >
                      {displayWantToWatchImage()}
                    </TouchableOpacity>

                    
                    <TouchableOpacity
                      style={styles.icons}
                      onPress={() => handleOnPressToggleFavorite()}
                    >
                      {displayFavoriteImage()}
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.icons}
                      onPress={() => handleOnPressToggleWatched()}
                    >
                      {displayWatchedImage()}
                    </TouchableOpacity>

                  </View>

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
        backgroundColor: 'gray',
        alignItems: "center",
        justifyContent: "flex-end"
      },
      date_text: {
        width: 120,
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: '#FFFFFF80',
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
        fontSize: 19,
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
        flex: 5
      },
      description_text: {
        fontStyle: 'italic',
        color: '#666666'
      },
      date_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      userActions: {
        flexGrow: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      icons: {
        marginLeft: 20,
      }
  })

export default Cards;
