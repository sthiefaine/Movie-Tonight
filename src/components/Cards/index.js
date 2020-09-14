import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getImageFromApi } from '../../services/TMDBApi'

const Cards = ({data}) => {

  const navigation = useNavigation();

  const handleOnPressDetailForMovie = (movieId)  => {
    console.log('handleOnPressDetailForFilm', movieId)
    /**
     * @param : route Name
     * @param2: Object into params
     */
    navigation.navigate('Details', {
      movieId: movieId,
    }); 
  }

    return (
        <TouchableOpacity 
          style={styles.main_container}
          onPress={() => handleOnPressDetailForMovie(data.id)}
        >
            <Image
                style={styles.image}
                source={{uri: getImageFromApi(data.poster_path)}}
            />
            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.title_text}>{data.title}</Text>
                    <Text style={styles.vote_text}>{data.vote_average}</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_text} numberOfLines={6}>{data.overview}</Text>
                {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
                </View>
                <View style={styles.date_container}>
                <Text style={styles.date_text}>Api</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row-reverse'
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
        flexDirection: 'row-reverse'
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap-reverse',
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
        flex: 1
      },
      date_text: {
        textAlign: 'right',
        fontSize: 14
      },
  })

export default Cards;
