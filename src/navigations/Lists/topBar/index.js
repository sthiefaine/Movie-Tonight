import React, {useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FlatList from '../../../containers/FlatList';

const Tab = createMaterialTopTabNavigator();

const ListTopBar = () => {
  return (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#222',
            tabStyle: {
                padding: 0, margin:0,   //Padding 0 here
            },
            labelStyle: {
                fontSize: 12,
            },
            activeBackgroundColor: 'red',
            inactiveBackgroundColor: 'blue',
        }}
    >

      <Tab.Screen 
        name="ListWantToWatch" 
        component={FlatList} 
        options={{ title: 'À voir' }}
      />
      <Tab.Screen 
        name="ListFavorite" 
        component={FlatList} 
        options={{ title: 'Favoris' }}
      />
      <Tab.Screen 
        name="ListWatched" 
        component={FlatList} 
        options={{ title: 'Déjà vu' }}
      />
      <Tab.Screen 
        name="ListUserCustom" 
        component={FlatList} 
        options={{ title: 'Mes listes' }}
      />

    </Tab.Navigator>
  );
}

export default ListTopBar;
