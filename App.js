import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import Timeline from './Timeline';
import SearchScreen from './SearchScreen';
import RankingScreen from './RankingScreen';
import FavoriteScreen from './FavoriteScreen';
import ProfilesScreen from './ProfileScreen';
import MessageScreen from './MessageScreen';
import SendScreen from './SendScreen';
import ImageDetail from './ImageDetail';
import MyPosts from './MyPosts';
import Following from './Following';
import Followers from './Followers';
import Notification from './Notification';
import Post from './Post';
// import Ionicons from '@expo/vector-icons';
import { Icon } from 'react-native-elements';



class App extends React.Component {
  
  render () {
      return (
          <AppStackNavigator/>
      );
  }
}

AppNavigator = createStackNavigator({ 
  bottomNavigation:{
  screen: createBottomTabNavigator(
  {
      ホーム: {
        screen: Timeline,
        activeTintColor: 'pink',
        navigationOptions: {
          tabBarIcon: ({ tintColor }) =>           
          <Icon
          name='home'
          size={24}
          color={tintColor}/>      
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
          color={tintColor}/>      
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
          color={tintColor}/>      
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
          type='Ionicons'/>      
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
        />      
      }  }
  },
  {
    navigationOptions: {
      header: null,
      // headerMode: 'screen',
    },
    tabBarOptions:{
      showIcon: true,
      showLabel: false,
      activeTintColor: 'white',
      activeBackgroundColor:'pink',
      style: {
        backgroundColor: 'white',
      },
    },
  },
   
  )},
  pageNavigation:{
  screen:createStackNavigator(
  {
      Search: SearchScreen,
      Ranking: RankingScreen, 
      ImageDetail: ImageDetail,
      MyPosts: MyPosts,
      Following: Following,
      Followers: Followers,

  },
  {
    navigationOptions: {
      header: null,
      headerMode: 'screen',

    }
  }
  )
},
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

});


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