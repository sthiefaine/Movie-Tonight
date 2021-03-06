import React, { useEffect, useLayoutEffect } from 'react'
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  Image,
  TouchableOpacity,
  Share,
  Platform,
  Button,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import moment from 'moment';
import numeral from 'numeral';

import { getImageFromApi } from '../../services/TMDBApi';

import { HeartIcon, ShareIconIOS, ShareIconAndroid } from '../../icons/icons';

const FilmDetail = ({
  movieInfo,
  getMovieInfo,
  favoriteMovies,
  toggleFavorite,
}) => {

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
   // getMovieInfo(route.params?.movieId)
   console.log('ICIIIIIII', movieInfo)
   console.log('dddddd', route.name)
   console.log('fffff', favoriteMovies)
  }, [])


    const movieInfoCheck = () => {

    }


  const handleShareMovie = () => {
    console.log('handleShareMovie')
    Share.share({  
      message: `L'application MovieTonight te propose de regarder ${movieInfo?.title}.
      Le film à une note de ${movieInfo?.vote_average} / 10.
      Genre(s) ${movieInfo?.genres.map(function(genre){
        return genre.name;
      }).join(" / ")}.`,
    })
  }

  useLayoutEffect(() => {

    navigation.setOptions({
      headerRight: () => { 

        const headerShareIcon = movieInfo != undefined && Platform.OS === 'ios' 
        ? <ShareIconIOS />
        : <ShareIconAndroid />


        return(
          <TouchableOpacity
            style={styles.share_touchable_headerrightbutton}
            onPress={() => handleShareMovie()}
            color="red"
          >{headerShareIcon}</TouchableOpacity>
        )
      },
    });

  }, [navigation]);

  const handleOnPressToggleFavorite = () => {
    console.log('handleOnPressToggleFavorite', movieInfo?.id)
   toggleFavorite(movieInfo); 
  }

  const displayFavoriteImage = () => {
    const size = '40';
    var colorFill = 'none';
    var stroke = 'blue';
    if (favoriteMovies.findIndex(item => item.id === movieInfo.id) !== -1) {

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
        {movieInfo != '' && movieInfo.id === route.params?.movieId && (
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

      {movieInfo.id !== route.params?.movieId && (
        <ScrollView style={styles.scrollview_container}>
          <Text style={styles.default_text}>TEST</Text>
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
  },
  share_touchable_headerrightbutton: {
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    elevation: 20,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
  },
})

export default FilmDetail;
