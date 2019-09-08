import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import PeopleScreen from './PeopleScreen';
import TagsScreen from './TagsScreen';
import PlacesScreen from './PlacesScreen';
import { TabView, SceneMap } from 'react-native-tab-view';
import RankingScreen from './RankingScreen';

//TODO navバーにスタイルのピンクがついていくようにする
class SearchScreen extends React.Component {

    constructor(props) 
    {
      super(props);
      this.state = {
        index: 0,
        nav: 0,   
        navDefault: {backgroundColor:'white',width:'25%',height:'100%',padding:'3%'},
        navSelect: {backgroundColor:'white',width:'25%',height:'100%',padding:'3%',borderBottomColor:'pink',borderBottomWidth:3},
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
    // this.searchContents = [<User/>, <NearBy/>, <Tags/>, <Ranking/>];

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
              key = {0}
              style={this.state.navDefault} 
              onPress={() =>  {this.setState({nav: 0})}}
            >
              <Text style={{color:'gray',fontSize:14,textAlign:'center',textAlignVertical:'bottom'}}>#ユーザー</Text>  
            </TouchableOpacity>
            <TouchableOpacity 
              key = {1}
              style={this.state.navSelect}
              onPress={() =>  {this.setState({nav: 1})}}
            >
              <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>#近くの人</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              key = {2}
              style={this.state.navDefault}
              onPress={() =>  {this.setState({nav: 2})}}
            >
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>＃タグ</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              key = {3}
              style={this.state.navSelect}
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
{/* 
          <ScrollView style={{backgroundColor:'white',paddingLeft:'3%',paddingRight:'3%',paddingTop:'3%', marginTop:5,flexDirection:'row'}}>
            <TouchableOpacity style={styles.card}>
              <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{position:'absolute', height:'80%',width:'100%'}}/>
              <View style={{top:'80%', height:'20%',width:'100%', position:'absolute'}}><Text style={{alignSelf: 'center', color:'white', fontWeight:'bold'}}>ONLINE</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{position:'absolute', height:'80%',width:'100%'}}/>
              <View style={{top:'80%', height:'20%',width:'100%', position:'absolute'}}><Text style={{alignSelf: 'center', color:'white', fontWeight:'bold'}}>ONLINE</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{position:'absolute', height:'80%',width:'100%'}}/>
              <View style={{top:'80%', height:'20%',width:'100%', position:'absolute'}}><Text style={{alignSelf: 'center', color:'white', fontWeight:'bold'}}>ONLINE</Text></View>
            </TouchableOpacity>
        </ScrollView> */}
        
          
        </View>
    );
  }
}

  
  class User extends React.Component{
    render(){

      return (
        //card 
        <View><Text>aaaa</Text></View>
       
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

      return (
        <View>
          {/* <RankingScreen/> */}
          <View><Text>Ranking</Text></View>
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
    card: {
      width:'42%', 
      aspectRatio:0.9, 
      backgroundColor:'pink', 
      margin:'4%', 
      borderRadius:18, 
      position:'relative', 
      shadowColor: 'gray', 
      shadowOffset: { width: 12, height: 12 }, 
      shadowOpacity: 0.4, 
      shadowRadius: 3, 
      elevation: 2,
    },
  }
  );
  
  export default SearchScreen;