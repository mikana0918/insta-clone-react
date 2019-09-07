import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import PeopleScreen from './PeopleScreen';
import TagsScreen from './TagsScreen';
import PlacesScreen from './PlacesScreen';
import { TabView, SceneMap } from 'react-native-tab-view';



class SearchScreen extends React.Component {

    constructor(props) 
    {
      super(props);
      this.state = {
        index: 0,
        nav: 0,
        isBorderBottom:false,
        selectedIndex: 0,
        search: '',


      };   
      this.updateIndex = this.updateIndex.bind(this);
      // this.searchContents = this.searchContents.bind(this);
    }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render(){
    // const { search } = this.state
    // const { selectedIndex } = this.state
    const {navigate} = this.props.navigation;
    // const { nav } = this.state.nav;
    this.searchContents = [
      <User/>, <NearBy/>, <Tags/>, <Ranking/>
    ]


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
            <TouchableOpacity 
              style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%',borderBottomColor:'pink',borderBottomWidth:3}} 
              onPress={() =>  {this.setState({nav: 0})}}
            >
              <Text style={{color:'gray',fontSize:14,textAlign:'center',textAlignVertical:'bottom'}}>#ユーザー</Text>  
            </TouchableOpacity>
            <TouchableOpacity 
              style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}
              // onPress={() => navigate('NearBy')}
              onPress={() =>  {this.setState({nav: 1})}}
            >
              <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>#近くの人</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}
              // onPress={() => navigate('Tags')}
              onPress={() =>  {this.setState({nav: 2})}}
            >
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>＃タグ</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}
              // onPress={() => navigate('Ranking')}
              onPress={() =>  {this.setState({nav: 3})}}
            >
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>#注目順</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row'}}>
            <View style={{width:'100%',height:'100%'}}>
              <Input placeholder='検索'　leftIcon={<Icon name='search' size={18} color='gray'/>}/>
            </View>
          </View>

          <ScrollView style={{backgroundColor:'white',width:'100%',height:'100%',paddingLeft:'3%',paddingRight:'3%',marginTop:5}}>
          
              {this.searchContents[this.state.nav]}
            
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
    },
    scene: {
      flex: 1,
    },
  }
  );
  class User extends React.Component{
    render(){
      // const { search } = this.state
      // const { selectedIndex } = this.state
  
      return (
        <View><Text>User</Text></View>
      );
    }
  }

  class NearBy extends React.Component{
    render(){
      // const { search } = this.state
      // const { selectedIndex } = this.state
  
      return (
        <View><Text>NearBy</Text></View>
      );
    }
  }

  class Tags extends React.Component{
    render(){
      // const { search } = this.state
      // const { selectedIndex } = this.state
  
      return (
        <View><Text>Tags</Text></View>
      );
    }
  }

  class Ranking extends React.Component{
    render(){
      // const { search } = this.state
      // const { selectedIndex } = this.state
  
      return (
        <View><Text>Ranking</Text></View>
      );
    }
  }



  
  export default SearchScreen;