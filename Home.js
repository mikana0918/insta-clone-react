// log-in screen
import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { registerRootComponent } from 'expo';
import { LinearGradient } from 'expo';
import App from './App';
import Register from './Register'
import Carousel from 'react-native-snap-carousel';
  
export default class Home extends React.Component {

  constructor(props){
    super();
    this.state = {
      showRealApp: false
    }
  }
  
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Image source={item.image} style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width,}} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <Register/>;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
    }
  }
}

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./assets/welcom1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/welcome2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/welcome3.png'),
    backgroundColor: '#22bcb5',
  }
];

const styles = StyleSheet.create({

  }
  );
// export default Home;
registerRootComponent(Home);