import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNav from './Home';
import SearchNav from './Search';
import FavoriteNav from './Favorite';
import WatchedNav from './Watched';

import { 
  SearchIcon, 
  HeartIcon,
  HomeIcon,
  ListIcon,
  EyeIcon,
} from '../icons/icons';

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
                
                if (route.name === 'TabHome') {
                  const stroke = focused
                    ? 'red'
                    : 'black';

                    return (
                      <HomeIcon
                        stroke={stroke}
                        size='30'   
                      />
                    )
                } 

                if (route.name === 'TabRecherche') {
                  const stroke = focused
                    ? 'blue'
                    : 'black';

                    return (
                      <SearchIcon
                        stroke={stroke}
                        size='30'   
                      />
                    )
                } 

                if (route.name === 'TabFavorite') {
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

                if (route.name === 'TabWatched') {
                  const stroke = focused 
                  ? 'green' 
                  : 'black';

                  return (
                    <EyeIcon 
                      stroke={stroke}
                      size='30' 
                    />
                  )
                }

              },

            })}
            tabBarOptions={{
              keyboardHidesTabBar: true
            }}
            initialRouteName="TabHome"
          
          >
            <Tab.Screen 
              name="TabHome" 
              component={HomeNav} 
              options={{ 
                title: 'Accueil',
              }}
            />

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

            <Tab.Screen 
              name="TabWatched" 
              component={WatchedNav} 
              options={{ 
                title: 'Déja Vu',
              }}
            />

          </Tab.Navigator>
        </NavigationContainer>
  );
}