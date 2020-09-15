import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../../containers/List';
import FilmDetail from '../../containers/Detail';


const Stack = createStackNavigator();

function FavoriteNav() {
  return (

      <Stack.Navigator
        initialRouteName="FavList"
      >
        <Stack.Screen 
          name="FavList" 
          component={List} 
          options={{ title: 'Mes Favoris' }}
        />
        <Stack.Screen 
          name="FavDetails" 
          component={FilmDetail} 
          options={{ title: 'Détail du film favori' }}
        />
      </Stack.Navigator>
  );
}

export default FavoriteNav;
