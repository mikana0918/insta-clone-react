import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";

class Post extends React.Component {


  // TODO プロフィールからのみの遷移へ変更

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
         <Header
            leftComponent={{ icon: 'camera', color: '#fff' }}
            centerComponent={{ text: '投稿', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
            rightComponent={{ icon: 'send', color: '#fff',  onPress:() => navigate('Message')}}
            containerStyle={{
              backgroundColor: 'pink',
              justifyContent: 'space-around',
            }}
          />  
      </View>
    
    //TODO モーダルか固定か
    //   <Modal>
    //       <View></View>
    //   </Modal>
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

export default Post;