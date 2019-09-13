import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup, Badge} from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

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

        return (
            <ScrollView style={{ }} >
                  <View  style={{flexDirection:'row-reverse', alignItems: 'flex-start',flexWrap: 'wrap', width:'100%', height:'100%',paddingLeft:'2%', paddingRight:'2%', paddingBottom:'5%'}}> 
                        {tag}
                        {tag}
                        {tag}

                  
                  </View>
            </ScrollView>
        );
      }
    }
