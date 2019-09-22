import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
// import { RNCamera, FaceDetector } from 'react-native-camera';
// import {CameraKitCamera} from 'react-native-camera-kit';
import CameraExample from './CameraExample';


class Post extends React.Component {
  static navigationOptions = ({ navigate }) => 
  ({
    header: null
    })

  render() {
    const {navigate} = this.props.navigation;
    const displayHeight = Dimensions.get('window').height;
    const displayWidth = Dimensions.get('window').width;
  
    return (
      <LinearGradient
      colors={['#ddd6f3', '#faaca8']}
      style={{ dalignItems: 'center', borderRadius: 5 }}>
      <View style={{height:'100%', width:'100%'}}>
      {/* scroll wrapper */}
      <View style={{height:'100%' ,}}> 
             <ScrollView   
              horizontal={true} 
              style={{ }}
              showsHorizontalScrollIndicator={false}>
                
              <TouchableOpacity style={{height:'100%', alignItems: 'center', justifyContent: 'center',}}>
                <TouchableOpacity 
                 onPress={() => navigate('Camera')}
                  style = {{ padding: '3%', backgroundColor:'white', opacity:0.9,   borderBottomLeftRadius: 100, height:'50%', width: displayWidth*0.90 , marginRight:displayWidth*0.03}}>    
                  <Image
                            source={require('./assets/selfie.jpg')}
                            style={{width: '100%', height: '90%'}}
                            resizeMode={'contain'}
                            />
                </TouchableOpacity> 
                  <View style={{padding:'8%',height:'50%',  width: displayWidth*0.90}}>
                    <Text style={{color:'white', fontSize:36, margin:10}}>カメラから</Text>
                    <Text style={{color:'white', fontSize:20, margin:10}}>エフェクトカメラで可愛く撮影</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={{height:'100%', alignItems: 'center', justifyContent: 'center',}}>
                <TouchableOpacity 
                  style = {{ backgroundColor:'white', opacity:0.9,  padding: '3%', height:'50%', width: displayWidth*0.90 , marginRight:displayWidth*0.03}}>    
                  <Image
                            source={require('./assets/upload.jpg')}
                            style={{ width: '100%', height: '90%', borderBottomLeftRadius: 100}}
                            resizeMode={'contain'}
                            />
                </TouchableOpacity> 
                  <View style={{padding:'8%',height:'50%',  width: displayWidth*0.90}}>
                    <Text style={{color:'white', fontSize:36, margin:10}}>ライブラリから</Text>
                    <Text style={{color:'white', fontSize:20, margin:10}}>エフェクトカメラで可愛く撮影</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={{height:'100%', alignItems: 'center', justifyContent: 'center',}}>
                <TouchableOpacity 
                  style = {{ backgroundColor:'white', opacity:0.9,  padding: '3%', height:'50%', width: displayWidth*0.90 , marginRight:displayWidth*0.03}}>    
                  <Image
                            source={require('./assets/live.jpg')}
                            style={{ width: '100%', height: '90%', borderBottomLeftRadius: 100}}
                            resizeMode={'contain'}
                            />
                </TouchableOpacity> 
                  <View style={{padding:'8%',height:'50%',  width: displayWidth*0.90}}>
                    <Text style={{color:'white', fontSize:36, margin:10}}>ライブを始める</Text>
                    <Text style={{color:'white', fontSize:20, margin:10}}>エフェクトカメラで可愛く撮影</Text>
                  </View>
              </TouchableOpacity>
              </ScrollView>
          </View>
        </View>
      </LinearGradient>
      
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