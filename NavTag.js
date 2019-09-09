import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup, Badge} from 'react-native-elements';

export default class NavTag extends React.Component{
    render(){
        return (
            <ScrollView style={{height:'100%'}}>
            <View style={{flexDirection:'row', alignItems: 'flex-start',flexWrap: 'wrap', width:'100%', height:'100%'}}>
            <TouchableOpacity style={{aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:'5%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,alignItems: 'center', justifyContent: 'center'}}>   
                  <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>ロリータ</Text>       
            </TouchableOpacity>

            <TouchableOpacity style={{aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:'5%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,alignItems: 'center', justifyContent: 'center'}}>   
                  <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>メイド</Text>       
            </TouchableOpacity>

            <TouchableOpacity style={{aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:'5%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,alignItems: 'center', justifyContent: 'center'}}>   
                  <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>自撮り</Text>       
            </TouchableOpacity>

            <TouchableOpacity style={{aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:'5%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,alignItems: 'center', justifyContent: 'center'}}>   
                  <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>加工なし</Text>       
            </TouchableOpacity>

            <TouchableOpacity style={{aspectRatio:1.0, borderRadius:18, margin:'4%', backgroundColor:'pink', padding:'5%',  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,alignItems: 'center', justifyContent: 'center'}}>   
                  <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>やってみた</Text>       
            </TouchableOpacity>
            
              
            </View>
           </ScrollView>
        );
      }
    }
