import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchNav from './src/navigations/Search';
import FilmDetail from './src/components/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Recherche" component={SearchNav} />
            <Stack.Screen name="Detail du film" component={FilmDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
