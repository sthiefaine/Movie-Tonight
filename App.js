import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

import Navigation from './src/containers/Navigation';

export default function App() {
  return (
    <Provider store={store}>

        <Navigation />

    </Provider>
  );
}