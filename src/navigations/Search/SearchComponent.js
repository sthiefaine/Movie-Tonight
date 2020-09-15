import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Search from '../../containers/Search'
import List from '../../containers/List';

const SearchComponent = () => {
  return (
    <>
      <Search/>
      <List/>
    </>
  );
}

export default SearchComponent;
