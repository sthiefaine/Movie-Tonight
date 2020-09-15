import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchComponent from './SearchComponent';
import FilmDetail from '../../containers/Detail';

const Stack = createStackNavigator();

function SearchNav() {
  return (

      <Stack.Navigator
        initialRouteName="SearchRecherche"
      >
        <Stack.Screen 
          name="SearchRecherche" 
          component={SearchComponent} 
          options={{ title: 'Recherche' }}
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
