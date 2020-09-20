import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNav from './Home';
import SearchNav from './Search';
import ListsNav from './Lists';

import { 
  SearchIcon, 
  HomeIcon,
  ListIcon,
} from '../icons/icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {

  return (
        <NavigationContainer>
          <Tab.Navigator
            shifting={true}
            activeColor="black"
            inactiveColor="grey"
            screenOptions={(
              { route }) => ({

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

                if (route.name === 'TabLists') {
                  const stroke = focused 
                  ? 'green' 
                  : 'black';

                  return (
                    <ListIcon 
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
                tabBarColor: '#FF000010',
              }}
            />

            <Tab.Screen 
              name="TabRecherche" 
              component={SearchNav} 
              options={{ 
                title: 'Recherche',
                tabBarColor: '#0000FF10',
              }}
            />

            <Tab.Screen 
              name="TabLists" 
              component={ListsNav} 
              options={{ 
                title: 'Listes',
                tabBarColor: '#00800010',
              }}
            />

          </Tab.Navigator>
        </NavigationContainer>
  );
}