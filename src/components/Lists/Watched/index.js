import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Watched = (
  {

  }) => {

    return (
      <View style={styles.main_container}>
        <Text>Vous avez déja vu ...</Text>
          
      </View>
    )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  })

export default Watched;
