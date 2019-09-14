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
