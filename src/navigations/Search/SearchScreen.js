import * as React from 'react';

import Search from '../../containers/Search'
import FlatListSearch from '../../containers/Search/flatList';

const SearchScreen = () => {
  return (
    <>
      <Search/>
      <FlatListSearch />
    </>
  );
}

export default SearchScreen;
