import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';

export default class Register extends React.Component {
    constructor(props){
      super();
    }
    render() {
     
    //   console.warn(this.constructor.name);  
      return (
        <View>
             <ImageBackground source = {require('./assets/register.png')} style = {{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}>
            <Text>新規会員登録/ ログイン/サインアップ</Text>
            </ImageBackground>
           
        </View>
      )
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
   
  }
  );
  
