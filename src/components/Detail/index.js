import React, { useEffect } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment'
import numeral from 'numeral'

import { getImageFromApi } from '../../services/TMDBApi';

const FilmDetail = ({
  moviesSearchResults,
  movieInfo,
  getMovieInfo,
}) => {


  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    getMovieInfo(route.params.movieId)
  }, [])

    return (
      <>
        {movieInfo != '' && (
          <ScrollView style={styles.scrollview_container}>
            <Image
              style={styles.image}
              source={{uri: getImageFromApi(movieInfo.backdrop_path)}}
            />
            <Text style={styles.title_text}>{movieInfo.title}</Text>
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
