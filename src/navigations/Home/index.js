import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import Home from '../../containers/Home';

const Stack = createStackNavigator();

function HomeNav() {
  return (

      <Stack.Navigator
      >
        <Stack.Screen 
          name="HomeScreen" 
          component={Home} 
          options={{ title: 'Movie Tonight' }}
        />
      </Stack.Navigator>
  );
}

export default HomeNav;
