import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Timeline from './Timeline';
import Icon from '@expo/vector-icons/FontAwesome';
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
  screen: createBottomTabNavigator(
  {
      ホーム: Timeline,      
      検索: SearchScreen,
      投稿: Post,
      通知: Notification,
    　プロフィール: ProfilesScreen,  
  },
  {
    navigationOptions: {
      header: null,
      // headerMode: 'screen',
    }
  })},
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
  screen:createStackNavigator(
  {
      Message: MessageScreen,
      Send: SendScreen,
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
// export default createStackNavigator(
//   {
//     bottomTabs: bottomNavStack,
//     stackNav: pageStack
//   }
// );
