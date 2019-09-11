import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';


class SearchScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isBorderBottom:false,
      };   
  }

    state = {
      search: '',
    };
    render() {
      const { search } = this.state;
      return (
        <View>
           <Header
              leftComponent={{ icon: 'camera', color: '#fff' }}
              centerComponent={{ text: 'じょそすたぐらむ', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
              rightComponent={{ icon: 'send', color: '#fff' }}
              containerStyle={{
                backgroundColor: 'pink',
                justifyContent: 'space-around',
              }}
            />
            <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'white',width:'10%',height:'100%',padding:14}}>
                <Image
                source={require('./assets/left-arrow.png')}
                style={{ width: 20, height: 20,resizeMode:"contain",alignItems: 'center',justifyContent: 'center',}}/>
              </View>
              <View style={{width:'90%',height:'100%'}}>
                <Input
                placeholder='検索'
                leftIcon={
                  <Icon
                    name='search'
                    size={18}
                    color='gray'/>
                    }
                  rightIcon={
                    <Icon
                      name='cancel'
                      size={18}
                      color='gray'/>
                      }
                  />  
              </View>
            </View>
            {/* //4Top Nav Tabs */}
            <View style={{backgroundColor:'white',width:'100%',height:45,flexDirection:'row'}}>
              <TouchableOpacity 
              style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%',borderBottomWidth:3, borderBottomColor:'pink'}}>
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>TOP</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>PEOPLE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
                 <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>TAGS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
                 <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>PLACES</Text>
              </TouchableOpacity>
            </View>
            {/* //show users */}
            <View style={{backgroundColor:'white',width:'100%',height:20,marginLeft:'3%',marginTop:10}}>
              <Text style={{color:'gray',fontSize:12,textAlign:'left'}}>Suggested</Text>
            </View>
            
            <ScrollView 
            style={{backgroundColor:'white',width:'100%',paddingLeft:'3%',paddingRight:'3%',marginTop:5}}
            >
              <TouchableOpacity style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                <Image
                  source={require('./assets/instagram-clone-sample.png')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:65, height: 65, borderRadius: 65 / 2}}
                />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='cancel'
                        size={12}
                        color='gray'/>
                          
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                <Image
                  source={require('./assets/instagram-clone-sample.png')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:65, height: 65, borderRadius: 65 / 2}}
                />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='cancel'
                        size={12}
                        color='gray'/>
                          
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                <Image
                  source={require('./assets/instagram-clone-sample.png')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:65, height: 65, borderRadius: 65 / 2}}
                />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='cancel'
                        size={12}
                        color='gray'/>
                          
                </View>
              </TouchableOpacity>           
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
  
  export default SearchScreen;