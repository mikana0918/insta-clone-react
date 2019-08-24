import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";

class FavoriteScreen extends React.Component {
    render() {
      return (
        <View>
           <Header
              leftComponent={{ icon: 'camera', color: '#fff' }}
              centerComponent={{ text: 'じょそすたぐらむ', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
              rightComponent={{ icon: 'send', color: '#fff' }}
              containerStyle={{
                backgroundColor: 'pink',
                justifyContent: 'space-around',
              }}
            />  
  
          <ScrollView>
           <View style={{backgroundColor:'white',flexDirection:'row',alignItems: 'flex-start',flexWrap: 'wrap',}}>
            
                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                              <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                               <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                   <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                   <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                              <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                               <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                   <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                              <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                               <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                   <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                              <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                               <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                   <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                              <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                               <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                  </View>
                </ScrollView>
              
        </View>
      );
    }
  }
  

export default FavoriteScreen;