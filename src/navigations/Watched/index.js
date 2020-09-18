import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import Watched from '../../components/Lists/Watched';

const Stack = createStackNavigator();

function WatchedNav() {
  return (

      <Stack.Navigator
      >
        <Stack.Screen 
          name="WatchedScreen" 
          component={Watched} 
          options={{ title: 'Déja vu' }}
        />
      </Stack.Navigator>
  );
}

export default WatchedNav;
