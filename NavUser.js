import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup, Badge} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import CardFlip from 'react-native-card-flip';

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
          {/* flip */}
          <CardFlip style={{margin:'4%', width:'42%', aspectRatio:1.0, borderRadius:18}}  ref={(card1) => this.card1 = card1} >
            <TouchableOpacity onPress={() => this.card1.flip()} style={{backgroundColor:'white',width:'100%', aspectRatio:1.0, borderRadius:18, padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>  
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
            <TouchableOpacity onPress={() => this.card1.flip()} style={{backgroundColor:'pink',width:'100%', aspectRatio:1.0, borderRadius:18, padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>  
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
          </CardFlip>

          <CardFlip style={{margin:'4%', width:'42%', aspectRatio:1.0, borderRadius:18}}  ref={(card2) => this.card2 = card2} >
            <TouchableOpacity onPress={() => this.card2.flip()} style={{backgroundColor:'white',width:'100%', aspectRatio:1.0, borderRadius:18, padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>  
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
            <TouchableOpacity onPress={() => this.card2.flip()} style={{backgroundColor:'pink',width:'100%', aspectRatio:1.0, borderRadius:18, padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>  
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
          </CardFlip>

          <CardFlip style={{margin:'4%', width:'42%', aspectRatio:1.0, borderRadius:18}}  ref={(card3) => this.card3 = card3} >
            <TouchableOpacity onPress={() => this.card3.flip()} style={{backgroundColor:'white',width:'100%', aspectRatio:1.0, borderRadius:18, padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>  
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
            <TouchableOpacity onPress={() => this.card3.flip()} style={{backgroundColor:'pink',width:'100%', aspectRatio:1.0, borderRadius:18, padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>  
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
          </CardFlip>

          <CardFlip style={{margin:'4%', width:'42%', aspectRatio:1.0, borderRadius:18}}  ref={(card4) => this.card4 = card4} >
            <TouchableOpacity onPress={() => this.card4.flip()} style={{backgroundColor:'white',width:'100%', aspectRatio:1.0, borderRadius:18, padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>  
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
            <TouchableOpacity onPress={() => this.card4.flip()} style={{backgroundColor:'pink',width:'100%', aspectRatio:1.0, borderRadius:18, padding:10,  shadowColor: 'gray', shadowOffset: { width: 12, height: 12 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2,}}>  
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
          </CardFlip>

  
          </View>
          </ScrollView>        
        );
      }
    }
