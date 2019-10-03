import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import Timeline from './Timeline';
import SearchScreen from './SearchScreen';
import RankingScreen from './RankingScreen';
import ProfilesScreen from './ProfileScreen';
import MessageScreen from './MessageScreen';
import SendScreen from './SendScreen';
import ImageDetail from './ImageDetail';
import MyPosts from './MyPosts';
import Following from './Following';
import Followers from './Followers';
import Notification from './Notification';
import Post from './Post';
import Camera from './CameraExample';
// import Ionicons from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import * as firebase from "./utils/firebase";
// import "firebase/auth";
// import "firebase/firestore";
// import LoginScreen from './Home';



class App extends React.Component {
  
  render () {
      return (
          <AppStackNavigator/>
      );
  }
}

AppNavigator = createStackNavigator(
  { 
  bottomNavigation:{
  screen: createMaterialTopTabNavigator(
  {
      ホーム: {
        screen: Timeline,
        activeTintColor: '#faaca8',
        navigationOptions: {
          tabBarIcon: ({ tintColor }) =>           
          <Icon
          name='home'
          size={24}
          color={tintColor}
          // color={'#7DA3B3'}
          />      
        }    
      },
      検索: {
        screen: SearchScreen,
        activeTintColor: 'pink',
        navigationOptions: {
          tabBarIcon: ({ tintColor }) =>           
          <Icon
          name='search'
          size={24}
          color={tintColor}
          // color={'#7DA3B3'}
          />      
        }    
      },
      投稿: {
        screen: Post,
        activeTintColor: 'pink',
        navigationOptions: {
          tabBarIcon: ({ tintColor }) =>           
          <Icon
          name='add-to-photos'
          size={24}
          color={tintColor}
          // color={'#7DA3B3'}
          />      
        }   
      },
      通知: {
        screen: Notification,
        activeTintColor: 'pink',
        navigationOptions: {
          tabBarIcon: ({ tintColor }) =>           
          <Icon
          name='notifications'
          size={24}
          color={tintColor}
          // color={'#7DA3B3'}
          type='Ionicons'
          />      
        }
      },
    　プロフィール: {
      screen: ProfilesScreen,
      activeTintColor: 'pink',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>           
        <Icon
        name= 'user'
        type= {'font-awesome'}
        size={22}
        color={tintColor}
        // color={'#7DA3B3'}
        />      
      }},
  },
  // { 
  //   initialRouteName: LoginScreen
  // },
  {
    navigationOptions: {
      header: null,
      // headerMode: 'screen',
  },

    tabBarOptions:{
      showIcon: true,
      showLabel: false,
      activeTintColor: '#403032',
      activeBackgroundColor:'#E6ACB6',
      style: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',     
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
      },
    },
  },
   
  )
},
  pageNavigation:{
  screen:createStackNavigator(
  {
      Search: SearchScreen,
      Ranking: RankingScreen, 
      ImageDetail: ImageDetail,
      MyPosts: MyPosts,
      Following: Following,
      Followers: Followers,
      Camera: Camera,

  },
  {
    navigationOptions: {
      header: null,
      // headerMode: 'screen',
    }
  },
  // { 
  //   initialRouteName: LoginScreen
  // }
)},
profileMessageNavigation:{
  screen:createStackNavigator
  (
    {
        Message: MessageScreen,
        Send: SendScreen,
        Profile: ProfilesScreen,
    },
    {
      navigationOptions: {
        header: null,
        headerMode: 'screen',
        initialRouteName: 'Profile'
        
      }
    }
  )
},
},
);


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

export default createAppContainer(AppNavigator);