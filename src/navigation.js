import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StoriesContainer from './containers/stories';
import Story from './components/Story';

const storiesStack = createStackNavigator({
  storiesList: {screen: StoriesContainer},
  story: {screen: Story},
});

export default createAppContainer(storiesStack);