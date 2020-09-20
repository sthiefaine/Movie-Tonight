import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './SearchScreen';
import FilmDetail from '../../containers/Detail';

const Stack = createStackNavigator();

function SearchNav() {
  return (

      <Stack.Navigator
      >
        <Stack.Screen 
          name="SearchRecherche" 
          component={SearchScreen} 
          options={{ title: 'Rechercher un film' }}
        />
        <Stack.Screen 
          name="SearchDetails" 
          component={FilmDetail} 
          options={{ title: 'Détail du film' }}
        />
      </Stack.Navigator>
  );
}

export default SearchNav;
