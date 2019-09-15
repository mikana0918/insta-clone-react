import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, Linking, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Story from "./Story";
import Carousel from 'react-native-snap-carousel';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { Asset } from 'expo-asset';

class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigate }) => ({
    header: null
    })
    constructor(props) {
      super(props);
      this.state = {
      
        modalVisible: false,
        currentIndex: 0,
        stories: [
          {
            id: "WpIAc9by5iU",
            story: require('./assets/welcome1.jpg'),
            title: "はじめての投稿🌟"
          }, {
            id: "sNPnbI1arSE",
            story: require('./assets/insta-maid1.jpg'),
            title: "つらたん"
          }, {
            id: "VOgFZfRVaww",
            story: require('./assets/insta-loli1.jpg'),
            title: "しぬ"
          }
        ]
      };   
  }

  _renderItem ({item, index}) {
    return (
      <View style={styles.slide}>  
      <Image
        source={require('./assets/mitsuamigirl001_TP_V.jpg')}
        style={{ width: '100%', height: '100%'}}/>
        
  </View>
    );
}

  closeModal = () => {
    this.setState({ modalVisible: false});
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }  

  //material menu 
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };


    render() {
      const {navigate} = this.props.navigation;
      return (
        <LinearGradient
        colors={['#ddd6f3', '#faaca8']}
        style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
        <View style={{height:'100%'}}>

            {/* <Story/> */}

            <View style={{ }}>
              {/* <Image  
                style={{height:'50%',aspectRatio:1.0}}
                source={require('./assets/insta-ex1.jpg')}>
              </Image> */}
              <Text>aaaa</Text>
            </View>
        </View>
        </LinearGradient>
      );
    }
  }

  const styles = StyleSheet.create({
    welcomeImages:{
      height: Dimensions.get('window').height, 
      width: Dimensions.get('window').width,
      resizeMode: 'cover',
      zIndex: 0,
      position: 'relative',
    },
    title:{
      alignItems: 'center',
      justifyContent: 'center',
      color: 'pink',
      zIndex: 2,
      fontSize:40,
      position: 'absolute',
      textAlign: 'center',
      textAlignVertical: "center",
      top:'35%',
      left:'30%',
      // fontFamily:'insta-font'  
    },
    text:{
      position: 'absolute',
      height: Dimensions.get('window').height, 
      width: Dimensions.get('window').width,
      backgroundColor:'rgba(0,0,0,0.6)', 
    },
    slide:{
      backgroundColor:'rgba(0,0,0,0.6)',
    },
    image:{
      resizeMode: 'contain',
    },
    carousel:{
      // borderRadius:10,
    },
    storyEnd:{
      width:100,
      height:100,
      backgroundColor:"gray"
    }
  }
  );

export default ProfileScreen;