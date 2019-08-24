// log-in screen
import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: 'somethun',
      title: 'Josostagram',
      // text: 'Jyosostagram',
      image: require('./assets/welcome1.jpg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      // title: 'Title 2',
      text: 'まずは会員登録',
      image: require('./assets/welcome1.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      // title: 'Rocket guy',
      text: '写真をシェア',
      image: require('./assets/welcome1.jpg'),
      backgroundColor: '#22bcb5',
    }
  ];

  
class Home extends React.Component {
    state = {
      showRealApp: false,
      fontLoaded: false,
    }
    static navigationOptions = {
      header: null
    }
  
    render() {
      if (this.state.showRealApp) {
        return <Timeline />;
      } else {
        return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
      }
    }
  }