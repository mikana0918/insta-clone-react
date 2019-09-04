import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Story from "./Story";
import Carousel from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";

class ProfileScreen extends React.Component {
  constructor(props){
    super();
  }
  static navigationOptions = ({ navigate }) => ({
    header: null
    })
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
                justifyContent: 'space-around',}}/>
            <ScrollView style={{ }}>
              <View style={{backgroundColor:'white',height:140,padding:10,flexDirection: 'row'}}>
                <TouchableOpacity>
                  <ImageBackground
                      style={{ width:120, height: 120, borderRadius: 120 / 2, borderColor:'pink',borderWidth:3,padding:2 }}>
                      <Image
                          source={require('./assets/instagram-clone-sample.png')}
                          style={{ width: 110, height: 110, borderRadius: 110 / 2 }}/>
                  </ImageBackground>
                </TouchableOpacity>

              <View style={{backgroundColor:'white',height:'100%',width:'65%',padding:5}}>
                <View style={{backgroundColor:'white',height:'49%',width:'100%',marginBottom:5,flexDirection:'row',padding:5}}>
                  <View style={{height:'100%',width:'32%',backgroundColor:'white',marginRight:5}}>
                    <TouchableOpacity style={{height:'70%',width:'100%',backgroundColor:'white',paddingLeft:'10%',paddingRifht:'12%',paddingTop:'16%'}}>
                      <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:'30%',width:'100%',backgroundColor:'white'}}>
                       <Text style={{fontSize:10,textAlign:'center',color:'gray'}}>posts</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{height:'100%',width:'32%',backgroundColor:'white',marginRight:5}}>
                  <View style={{height:'70%',width:'100%',backgroundColor:'white',paddingLeft:'10%',paddingRifht:'12%',paddingTop:'16%'}}>
                  <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>1.5M</Text>
                  </View>
                    <View style={{height:'30%',width:'100%',backgroundColor:'white'}}>
                    <Text style={{fontSize:10,textAlign:'center',color:'gray'}}>Followers</Text>
                    </View>
                  </View>
                  <View style={{height:'100%',width:'32%',backgroundColor:'white',marginRight:5}}>
                  <View style={{height:'70%',width:'100%',backgroundColor:'white',paddingLeft:'10%',paddingRifht:'12%',paddingTop:'16%'}}>
                  <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>347</Text>
                  </View>
                    <View style={{height:'30%',width:'100%',backgroundColor:'white'}}>
                    <Text style={{fontSize:10,textAlign:'center',color:'gray'}}>following</Text>
                    </View>
                  </View>
                </View>
                {/* //ここからメッセージボタン */}
                <View style={{backgroundColor:'white',height:'45%',width:'100%',padding:10,flexDirection:'row'}}>
                  <View style={{backgroundColor:'white',height:24, width:'67%',borderRadius:4, borderWidth: 0.5,borderColor:'black',marginRight:5,padding:3}} onPress= {navigate('Message')}>
                    <Text style={{textAlign:'center'}}>Message</Text>
                  </View>
                  <View style={{backgroundColor:'white',height:24, width:'15%',borderRadius:4, borderWidth: 0.5,borderColor:'black',marginRight:5}}></View>
                  <View style={{backgroundColor:'white',height:24, width:'15%',borderRadius:4, borderWidth: 0.5,borderColor:'black',marginRight:5}}></View>
                </View>
              </View>
              </View>
              {/* //ここからプロフィール */}
              <View style={{backgroundColor:'white',height:150,padding:10,marginLeft:'2%',marginRight:'3%'}}>
                <View style={{backgroundColor:'white',height:130}}>
                  <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginBottom:5}}>ゆうこす</Text>
                    <Text style={{color:'gray',marginBottom:3}}>インフルエンサー</Text>
                    <Text style={{marginBottom:5}}>ユーチューバー、ライバー、インフルエンサーです♪　ググってみてね❤️</Text>
                    <Text style={{marginBottom:5,color:'blue'}}>https://google.com</Text>
                    <Text style={{marginBottom:8}}>東京都港区在住</Text>
                    <Text style={{fontSize:10}}>Followed by HIKAKIN, Fukase, SEIKIN</Text>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor:'pink',height:100}}>
              <View style={{height:130,backgroundColor:'white' }}>
            <Story/>
          </View>
              </View>
         {/* ここから画像タイル */}
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

export default ProfileScreen;