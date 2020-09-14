import React, { useEffect } from 'react'
import { 
  StyleSheet, 
  View, 
  Text, 
  ActivityIndicator, 
  ScrollView, 
  Image, 
  Button, 
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import numeral from 'numeral';

import { getImageFromApi } from '../../services/TMDBApi';

import { HeartIcon } from '../../selectors/icons';

const FilmDetail = ({
  moviesSearchResults,
  movieInfo,
  getMovieInfo,
  favoriteMovies,
  toggleFavorite,
}) => {


  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    getMovieInfo(route.params.movieId)
    console.log('toto', favoriteMovies)
  }, [])

  const handleOnPressToggleFavorite = () => {
    console.log('handleOnPressToggleFavorite', movieInfo)
   toggleFavorite(movieInfo.id); 
  }

const displayFavoriteImage = () => {
  const size = '40';
  var colorFill = 'none';
  var stroke = 'blue';
  if (favoriteMovies.findIndex(item => item === movieInfo.id) !== -1) {
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

    return (
      <>
        {movieInfo != '' && (
          <ScrollView style={styles.scrollview_container}>
            <Image
              style={styles.image}
              source={{uri: getImageFromApi(movieInfo.backdrop_path)}}
            />
            <Text style={styles.title_text}>{movieInfo.title}</Text>
            <TouchableOpacity
              style={styles.favorite_container}
              onPress={() => handleOnPressToggleFavorite()}>
              {displayFavoriteImage()}
            </TouchableOpacity>
            <Text style={styles.description_text}>{movieInfo.overview}</Text>
            <Text style={styles.default_text}>Sorti le {moment(new Date(movieInfo.release_date)).format('DD/MM/YYYY')}</Text>
            <Text style={styles.default_text}>Note : {movieInfo.vote_average} / 10</Text>
            <Text style={styles.default_text}>Nombre de votes : {movieInfo.vote_count}</Text>
            <Text style={styles.default_text}>Budget : {numeral(movieInfo.budget).format('0,0[.]00 $')}</Text>
            <Text style={styles.default_text}>Genre(s) : {movieInfo.genres.map(function(genre){
                return genre.name;
              }).join(" / ")}
            </Text>
            <Text style={styles.default_text}>Companie(s) : {movieInfo.production_companies.map(function(company){
                return company.name;
              }).join(" / ")}
            </Text>
          </ScrollView>
      )}
      </>
    )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  favorite_container: {
    alignItems: 'center',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})

export default FilmDetail;
