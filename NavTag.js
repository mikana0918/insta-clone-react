import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup, Badge} from 'react-native-elements';

export default class NavTag extends React.Component{
    render(){
        return (
            <ScrollView 
            style={{height:'100%'}} >
            <View 
            style={{flexDirection:'row', alignItems: 'flex-start',flexWrap: 'wrap', width:'100%', height:'100%',paddingLeft:'4%', paddingRight:'4%'}}>

                  <TouchableOpacity style={{zIndex:0, width:'42%',aspectRatio:2.6, borderRadius:18, margin:'1%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <ImageBackground 
                              source={require('./assets/insta-loli1.jpg')} style={{zIndex:1, width:'100%',aspectRatio:2.6, borderRadius:18,}} 
                              imageStyle={{ borderRadius: 30 }}>
                              <View style={{ zIndex: 2, backgroundColor:'rgba(0, 0, 0, 0.25)', width:'100%', height:'100%' ,borderRadius:30,aspectRatio:2.6, alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{zIndex:3, fontSize:16, fontWeight:'bold', color:'white'}}>#自撮り</Text>
                              </View>
                        </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity style={{zIndex:0, width:'42%',aspectRatio:2.6, borderRadius:18, margin:'1%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <ImageBackground 
                              source={require('./assets/insta-loli1.jpg')} style={{zIndex:1, width:'100%',aspectRatio:2.6, borderRadius:18,}} 
                              imageStyle={{ borderRadius: 30 }}>
                              <View style={{ zIndex: 2, backgroundColor:'rgba(0, 0, 0, 0.25)', width:'100%', height:'100%' ,borderRadius:30,aspectRatio:2.6, alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{zIndex:3, fontSize:16, fontWeight:'bold', color:'white'}}>#コス</Text>
                              </View>
                        </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity style={{zIndex:0, width:'42%',aspectRatio:2.6, borderRadius:18, margin:'4%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <ImageBackground 
                              source={require('./assets/insta-loli1.jpg')} style={{zIndex:1, width:'100%',aspectRatio:2.6, borderRadius:18,}} 
                              imageStyle={{ borderRadius: 30 }}>
                              <View style={{ zIndex: 2, backgroundColor:'rgba(0, 0, 0, 0.25)', width:'100%', height:'100%' ,borderRadius:30,aspectRatio:2.6, alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{zIndex:3, fontSize:16, fontWeight:'bold', color:'white'}}>#自撮り</Text>
                              </View>
                        </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity style={{zIndex:0, width:'42%',aspectRatio:2.6, borderRadius:18, margin:'4%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <ImageBackground 
                              source={require('./assets/insta-loli1.jpg')} style={{zIndex:1, width:'100%',aspectRatio:2.6, borderRadius:18,}} 
                              imageStyle={{ borderRadius: 30 }}>
                              <View style={{ zIndex: 2, backgroundColor:'rgba(0, 0, 0, 0.25)', width:'100%', height:'100%' ,borderRadius:30,aspectRatio:2.6, alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{zIndex:3, fontSize:16, fontWeight:'bold', color:'white'}}>#コス</Text>
                              </View>
                        </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity style={{zIndex:0, width:'42%',aspectRatio:2.6, borderRadius:18, margin:'4%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <ImageBackground 
                              source={require('./assets/insta-loli1.jpg')} style={{zIndex:1, width:'100%',aspectRatio:2.6, borderRadius:18,}} 
                              imageStyle={{ borderRadius: 30 }}>
                              <View style={{ zIndex: 2, backgroundColor:'rgba(0, 0, 0, 0.25)', width:'100%', height:'100%' ,borderRadius:30,aspectRatio:2.6, alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{zIndex:3, fontSize:16, fontWeight:'bold', color:'white'}}>#自撮り</Text>
                              </View>
                        </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity style={{zIndex:0, width:'42%',aspectRatio:2.6, borderRadius:18, margin:'4%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <ImageBackground 
                              source={require('./assets/insta-loli1.jpg')} style={{zIndex:1, width:'100%',aspectRatio:2.6, borderRadius:18,}} 
                              imageStyle={{ borderRadius: 30 }}>
                              <View style={{ zIndex: 2, backgroundColor:'rgba(0, 0, 0, 0.25)', width:'100%', height:'100%' ,borderRadius:30,aspectRatio:2.6, alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{zIndex:3, fontSize:16, fontWeight:'bold', color:'white'}}>#コス</Text>
                              </View>
                        </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity style={{zIndex:0, width:'42%',aspectRatio:2.6, borderRadius:18, margin:'4%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <ImageBackground 
                              source={require('./assets/insta-loli1.jpg')} style={{zIndex:1, width:'100%',aspectRatio:2.6, borderRadius:18,}} 
                              imageStyle={{ borderRadius: 30 }}>
                              <View style={{ zIndex: 2, backgroundColor:'rgba(0, 0, 0, 0.25)', width:'100%', height:'100%' ,borderRadius:30,aspectRatio:2.6, alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{zIndex:3, fontSize:16, fontWeight:'bold', color:'white'}}>#自撮り</Text>
                              </View>
                        </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity style={{zIndex:0, width:'42%',aspectRatio:2.6, borderRadius:18, margin:'4%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <ImageBackground 
                              source={require('./assets/insta-loli1.jpg')} style={{zIndex:1, width:'100%',aspectRatio:2.6, borderRadius:18,}} 
                              imageStyle={{ borderRadius: 30 }}>
                              <View style={{ zIndex: 2, backgroundColor:'rgba(0, 0, 0, 0.25)', width:'100%', height:'100%' ,borderRadius:30,aspectRatio:2.6, alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{zIndex:3, fontSize:16, fontWeight:'bold', color:'white'}}>#コス</Text>
                              </View>
                        </ImageBackground>
                  </TouchableOpacity>

                  


              
            </View>
           </ScrollView>
        );
      }
    }
