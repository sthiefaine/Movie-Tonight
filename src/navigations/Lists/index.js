import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import ListTopBar from './topBar';
import FilmDetail from '../../containers/Detail';

const Stack = createStackNavigator();

function ListsNav() {
  return (

      <Stack.Navigator
      >
        <Stack.Screen 
          name="ListsScreen" 
          component={ListTopBar} 
          options={{ title: 'Mes listes' }}
        />

        <Stack.Screen 
          name="FilmDetails" 
          component={FilmDetail}
          options={{
          title: 'Détail',
        }}
        />

      </Stack.Navigator>
  );
}

export default ListsNav;
