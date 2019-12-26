import React from 'react';
import {View, ActivityIndicator, SafeAreaView, FlatList, Text, Image, TouchableOpacity} from 'react-native';

class StoriesList extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });

  componentDidMount() {
    const {fetchStories} = this.props;

    fetchStories();
  }

  toStoryDetails = ({id, title, url}) => () => {
    this.props.navigation.navigate('story', {id, title, url});
  }

  render() {
    const {isLoadingActive, stories} = this.props;

    const data = stories.map(story => ({
      title: story.title,
      url: story.url,
      id: story.id,
    }));

    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        {!isLoadingActive && (
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image style={{width: 100, height: 100, margin: 20}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity onPress={this.toStoryDetails(item)}>
                  <View style={{flex: 1, margin: 30}}>
                    <Text>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        )}
        {isLoadingActive && <ActivityIndicator size="large" color="#0000ff" />}
      </SafeAreaView>
    );
  }
};

export default StoriesList;
