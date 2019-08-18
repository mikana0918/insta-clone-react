import React,{Component}  from 'react';
import { StyleSheet, Text, View, Image,Dimensions,Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";


class Timeline extends React.Component {

  render() {
    return (
      <View style={styles.container}>      
      <Text>welcome to summoners lift</Text>
      </View>
    );
  }
}

// class Home extends React.Component{
//   render() {
//     return (
//       <View style={styles.container}>
//       <Text>welcome to summoners lift</Text>
//       </View>  
//     );
//   }
// }

// class Search extends React.Component{
//   render() {
//     return (
//       <View style={styles.container}>
//       <Text>welcome to summoners lift</Text>
//       </View>
      
//     );
//   }
// }

// class Add extends React.Component{
//   render() {
//     return (
//       <View style={styles.container}>
//       <Text>welcome to summoners lift</Text>
//       </View>
      
//     );
//   }
// }

// class Favorite extends React.Component{
//   render() {
//     return (
//       <View style={styles.container}>
//       <Text>welcome to summoners lift</Text>
//       </View>
//     );
//   }
// }

// class Profile extends React.Component{
//   render() {
//     return (
//       <View style={styles.container}>
//       <Text>welcome to summoners lift</Text>
//       </View>
//     );
//   }
// }
// createMaterialBottomTabNavigator({
//   Home: { screen: Home },
//   Search: { screen: Search },
//   Add: { screen: Add },
//   Favorite: { screen: Favorite },
//   Profile: { screen: Profile },
// }, {
//   initialRouteName: 'Home',
//   activeColor: '#F44336',
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Timeline;