import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import PeopleScreen from './PeopleScreen';
import TagsScreen from './TagsScreen';
import PlacesScreen from './PlacesScreen';


class SearchScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isBorderBottom:false,
        selectedIndex: 0
      };   
      this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
    state = {
      search: '',
    };
    render() {
      const { search } = this.state;
      const buttons = ['TOP', 'PEOPLE', 'TAGS', 'PLACES']
      const { selectedIndex } = this.state
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
              <View style={{width:'100%',height:'100%'}}>
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

            {/* <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{height: 30}}
              Style={{color:'pink'}}
              underlayColor={"pink"}
            /> */}
            
            {/* //show users */}
            <View style={{backgroundColor:'white',width:'100%',height:20,marginLeft:'3%',marginTop:10}}>
              <Text style={{color:'gray',fontSize:12,textAlign:'left'}}>Suggested</Text>
            </View>
            
            <ScrollView style={{backgroundColor:'white',width:'100%',paddingLeft:'3%',paddingRight:'3%',marginTop:5}}>
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
                  <Icon name='cancel' size={12} color='gray'/>                
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                <Image source={require('./assets/instagram-clone-sample.png')} style={{ width:65, height: 65, borderRadius: 65 / 2}}/>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon　name='cancel'　size={12}color='gray'/>                    
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

  const HomeTab = createMaterialTopTabNavigator(
    {
      //ここに検索タブの画面
      People: PeopleScreen,
      Tags: TagsScreen,
      Places: PlacesScreen
  },{
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'red',
      },
      indicatorStyle: {
        backgroundColor: '#fff'
      },
      defaultNavigationOptions:{
        header:null
      }
    },
  });

  createAppContainer(HomeTab);
  
  export default SearchScreen;