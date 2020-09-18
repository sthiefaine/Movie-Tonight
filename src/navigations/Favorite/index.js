import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ListFavorite from '../../containers/List/Favorite';
import FilmDetail from '../../containers/Detail';

const Stack = createStackNavigator();

function FavoriteNav() {
  return (

      <Stack.Navigator
        
      >
        <Stack.Screen 
          name="FavList" 
          component={ListFavorite} 
          options={{ title: 'Mes Favoris' }}
        />
        <Stack.Screen 
          name="FavDetails" 
          component={FilmDetail}
          options={{
          title: 'Détail',
        }}
        />
      </Stack.Navigator>
  );
}

export default FavoriteNav;
