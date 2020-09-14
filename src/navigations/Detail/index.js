import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Detail from '../../containers/Detail'

const DetailStackNavigator = createStackNavigator({
  Detail: { 
    screen: Detail,
    navigationOptions: {
      title: 'Détail du film'
    }
  }
})

export default createAppContainer(DetailStackNavigator)