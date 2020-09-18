import React, { useRef, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions
} from "react-native";

import { getImageFromApi } from '../../services/TMDBApi';

const Home = (
  {
    getMovieUpComing,
    movieUpComing,
  }) => {


    useEffect(() => {
      console.log('------ getMovieUpComing() -----')
      getMovieUpComing();

    }, [])

    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();
  
    const moviesList = movieUpComing.slice(0, 7);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                },
                
              }
            ],
            { useNativeDriver: false }
            )}
            scrollEventThrottle={1}
          >
            {moviesList.map((movie, movieIndex) => {
              return (
                <View
                  style={{ width: windowWidth, height: 250 }}
                  key={movieIndex}
                >
                  <ImageBackground style={styles.card}
                  source={{uri: getImageFromApi(movie.backdrop_path)}}
                  >
                    <View style={styles.textContainer}>
                      <Text style={styles.infoText}>
                        {movie.title}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {moviesList.map((movie, movieIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (movieIndex - 1),
                  windowWidth * movieIndex,
                  windowWidth * (movieIndex + 1)
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp"
              });
              return (
                <Animated.View
                  key={movieIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    scrollContainer: {
      height: 300,
      alignItems: "center",
      justifyContent: "center"
    },
    card: {
      flex: 1,
      marginVertical: 4,
      marginHorizontal: 16,
      borderRadius: 5,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center"
    },
    textContainer: {
      backgroundColor: "rgba(0,0,0, 0.7)",
      paddingHorizontal: 24,
      paddingVertical: 8,
      borderRadius: 5
    },
    infoText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold"
    },
    normalDot: {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: "silver",
      marginHorizontal: 4
    },
    indicatorContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }
  });

export default Home;
