import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

class Story extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title', 'story'),
  });

  render() {
    const url = this.props.navigation.getParam('url', null);

    return (
      <View>
        <WebView source={{uri: url}} />
      </View>
    );
  }
}

export default Story;
