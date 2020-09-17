import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchNav from './Search';
import FavoriteNav from './Favorite';

import { SearchIcon, HeartIcon } from '../icons/icons';

const Tab = createBottomTabNavigator();

export default function Navigation({
  favoriteMoviesNb
}) {

  const favoriteTabBarBadge = favoriteMoviesNb >= 1 
  ? 'tabBarBadge'
  : ''



  return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route, focused }) => ({

              tabBarIcon: ({ focused }) => {
                
                if (route.name === 'TabRecherche') {
                  const stroke = focused
                    ? 'red'
                    : 'black';

                    return (
                      <SearchIcon
                        stroke={stroke}
                        size='30'   
                      />
                    )
                } else if (route.name === 'TabFavorite') {
                  const colorFill = focused 
                  ? 'red' 
                  : 'none';

                  return (
                    <HeartIcon 

                      colorFill={colorFill} 
                      stroke='black'
                      size='30' 
                    />
                  )
                }
              },

            })}
            tabBarOptions={{
              keyboardHidesTabBar: true
            }}
            initialRouteName="TabRecherche"
          
          >
            <Tab.Screen 
              name="TabRecherche" 
              component={SearchNav} 
              options={{ 
                title: 'Recherche',
              }}
            />

            <Tab.Screen 
              name="TabFavorite" 
              component={FavoriteNav} 
              options={{ 
                title: 'Favoris',
                [favoriteTabBarBadge]: `${favoriteMoviesNb}`, 
              }}
            /> 

          </Tab.Navigator>
        </NavigationContainer>
  );
}