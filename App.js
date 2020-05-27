import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator); 

// navigator is not a react component
// createAppContainer creates a default app component, or a react component, and display the content that the navigator is producing inside of that component. Makes sure it exports a react component from this file