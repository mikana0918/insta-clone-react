import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";

class FavoriteScreen extends React.Component {

    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
           <Header
              leftComponent={{ icon: 'camera', color: '#fff' }}
              centerComponent={{ text: 'じょそすたぐらむ', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
              rightComponent={{ icon: 'send', color: '#fff',  onPress:() => navigate('Message')}}
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

export default FavoriteScreen;