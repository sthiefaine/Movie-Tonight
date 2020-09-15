import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchNav from './src/navigations/Search';
import FavoriteNav from './src/navigations/Favorite'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>

        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              keyboardHidesTabBar: true
            }}
            initialRouteName="TabRecherche"
          
          >
            <Tab.Screen 
              name="TabFavorite" 
              component={FavoriteNav} 
              options={{ title: 'Favoris' }}
            /> 
            <Tab.Screen 
              name="TabRecherche" 
              component={SearchNav} 
              options={{ title: 'Recherche' }}
            />
          </Tab.Navigator>
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
