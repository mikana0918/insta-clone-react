import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup, Badge} from 'react-native-elements';

export default class NavUser extends React.Component{
    render(){
        return (
          <ScrollView style={{}}>
            <View style={{flexDirection:'row'}}>
              <View style={{width:'100%',height:'100%'}}>
                <Input placeholder='検索'　leftIcon={<Icon name='search' size={18} color='gray'/>}/>
              </View>
            </View>
  
            <View style={{flexDirection:'row', alignItems: 'flex-start',flexWrap: 'wrap', width:'100%', height:'100%'}}>
  
              <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
                  <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                  <Text><Text style={{color:'red'}}>●</Text>名前</Text>   
                  </View>
                </ImageBackground>
              </TouchableOpacity>
  
              <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
                  <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                    <Text><Text style={{color:'green'}}>●</Text>名前</Text>     
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              
              <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
                  <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                  <Text><Text style={{color:'red'}}>●</Text>名前</Text>   
                  </View>
                </ImageBackground>
              </TouchableOpacity>
  
              <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
                  <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                    <Text><Text style={{color:'green'}}>●</Text>名前</Text>     
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              
              <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
                  <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                  <Text><Text style={{color:'red'}}>●</Text>名前</Text>   
                  </View>
                </ImageBackground>
              </TouchableOpacity>
  
              <TouchableOpacity style={{width:'42%',aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                <ImageBackground source={require('./assets/insta-loli1.jpg')} style={{width:'100%',aspectRatio:1.0, borderRadius:18,}} >
                  <View style={{backgroundColor:'white', width:'100%', height:'30%',top:'70%',opacity:0.5, alignItems: 'center', justifyContent: 'center',}}>
                    <Text><Text style={{color:'green'}}>●</Text>名前</Text>     
                  </View>
                </ImageBackground>
              </TouchableOpacity>        
  
          </View>
          </ScrollView>        
        );
      }
    }
