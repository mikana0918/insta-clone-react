import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup, Badge} from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import Story from './Story';

export default class NavTag extends React.Component{
    render(){
          const tag =   <TouchableOpacity style={{zIndex:0, width:'28%',aspectRatio:2.6, borderRadius:18, marginRight:'2%',marginLeft:'2%',marginTop:'4%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                              <ImageBackground 
                                    source={require('./assets/insta-loli1.jpg')} style={{zIndex:1, width:'100%',aspectRatio:2.6, borderRadius:18,}} 
                                    imageStyle={{ borderRadius: 30 }}>
                                    <View style={{ zIndex: 2, backgroundColor:'rgba(0, 0, 0, 0.25)', width:'100%', height:'100%' ,borderRadius:30,aspectRatio:2.6, alignItems: 'center', justifyContent: 'center',}}>
                                          <Text style={{zIndex:3, fontSize:14, fontWeight:'bold', color:'white'}}>#自撮り</Text>
                                    </View>
                              </ImageBackground>
                        </TouchableOpacity>

            const card = <View style={{backgroundColor:'white', width:'40%',aspectRatio:1.0 ,borderRadius:20, margin:'4%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
           
                        </View>

        return (
            <ScrollView style={{height:'100%'}}>

                        <View style={{flexDirection:'row', alignItems: 'flex-start',flexWrap: 'wrap', width:'100%', height:'100%'}}>
                  
                        <TouchableOpacity style={{backgroundColor:'white',width:'42%', aspectRatio:1.0, borderRadius:18, margin:'4%', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>  
                        <View style={{height:'70%' ,padding:'4%', marginTop:'6%'}}>
                        <View style={{alignSelf:'center', height:'100%',aspectRatio:1.0, padding:'1%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                              <Image
                                    source={require('./assets/meidodesu_TP_V.jpg')}
                                    style={{ width:60, height: 60, borderRadius: 60 / 2, alignSelf:'center'}}
                              />
                        </View>
                        </View>
                        <Text style={{textAlign:'center', alignSelf:'center', color:'pink', fontSize:16, fontWeight:'bold'}}>meido</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{backgroundColor:'pink',width:'42%', aspectRatio:1.0, borderRadius:18, margin:'4%', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <View style={{height:'70%' ,padding:'4%', marginTop:'6%'}}>
                        <View style={{alignSelf:'center', height:'100%',aspectRatio:1.0, padding:'1%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                              <Image
                                    source={require('./assets/meidodesu_TP_V.jpg')}
                                    style={{ width:60, height: 60, borderRadius: 60 / 2, alignSelf:'center'}}
                              />
                        </View>
                        </View>
                        <Text style={{textAlign:'center', alignSelf:'center', color:'white', fontSize:16, fontWeight:'bold'}}>meido</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:'pink',width:'42%', aspectRatio:1.0, borderRadius:18, margin:'4%', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <View style={{height:'70%' ,padding:'4%', marginTop:'6%'}}>
                        <View style={{alignSelf:'center', height:'100%',aspectRatio:1.0, padding:'1%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                              <Image
                                    source={require('./assets/meidodesu_TP_V.jpg')}
                                    style={{ width:60, height: 60, borderRadius: 60 / 2, alignSelf:'center'}}
                              />
                        </View>
                        </View>
                        <Text style={{textAlign:'center', alignSelf:'center', color:'white', fontSize:16, fontWeight:'bold'}}>meido</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:'pink',width:'42%', aspectRatio:1.0, borderRadius:18, margin:'4%', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <View style={{height:'70%' ,padding:'4%', marginTop:'6%'}}>
                        <View style={{alignSelf:'center', height:'100%',aspectRatio:1.0, padding:'1%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                              <Image
                                    source={require('./assets/meidodesu_TP_V.jpg')}
                                    style={{ width:60, height: 60, borderRadius: 60 / 2, alignSelf:'center'}}
                              />
                        </View>
                        </View>
                        <Text style={{textAlign:'center', alignSelf:'center', color:'white', fontSize:16, fontWeight:'bold'}}>meido</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:'pink',width:'42%', aspectRatio:1.0, borderRadius:18, margin:'4%', padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>   
                        <View style={{height:'70%' ,padding:'4%', marginTop:'6%'}}>
                        <View style={{alignSelf:'center', height:'100%',aspectRatio:1.0, padding:'1%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                              <Image
                                    source={require('./assets/meidodesu_TP_V.jpg')}
                                    style={{ width:60, height: 60, borderRadius: 60 / 2, alignSelf:'center'}}
                              />
                        </View>
                        </View>
                        <Text style={{textAlign:'center', alignSelf:'center', color:'white', fontSize:16, fontWeight:'bold'}}>meido</Text>
                        </TouchableOpacity>
            
                  </View>
           </ScrollView>
        );
      }
    }
