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
        selectedIndex: 0,
        search: '',

      };   
      this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  _openTab1(){
    return(   
      <View><Text>111</Text></View>);
  }

  _openTab2(){
    return(   
      <View><Text>222</Text></View>);
  }

  _openTab3(){
    return(   
      <View><Text>333</Text></View>);
  }

  _openTab4(){
    return(   
      <View><Text>444</Text></View>);
  }


    render() {
      const { search } = this.state;
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
      
            {/* //4Top Nav Tabs */}
            <View style={{backgroundColor:'white',width:'100%',height:45,flexDirection:'row'}}>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%',borderBottomColor:'pink',borderBottomWidth:3}} >
                <Text style={{color:'gray',fontSize:14,textAlign:'center',textAlignVertical:'bottom'}}>#ユーザー</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>#近くの人</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
                 <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>＃タグ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
                 <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>#注目順</Text>
              </TouchableOpacity>
            </View>

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
                  />
              </View>
            </View>
                        
            
            <ScrollView style={{backgroundColor:'white',width:'100%',paddingLeft:'3%',paddingRight:'3%',marginTop:5}}>
                    <View style ={{ alignItems: 'center',justifyContent: 'center',}}><Text style ={{alignSelf:'center', textAlignVertical:'center', fontSize:20, color:'gray'}}>何も表示するものがありません</Text></View>
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