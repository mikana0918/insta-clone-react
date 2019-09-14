import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button,ButtonGroup, Badge} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
// import PeopleScreen from './PeopleScreen';
// import TagsScreen from './TagsScreen';
// import PlacesScreen from './PlacesScreen';
import { TabView, SceneMap } from 'react-native-tab-view';
import RankingScreen from './RankingScreen';
import NavUser from './NavUser';
import NavNearBy from './NavNearBy';
import NavTag from './NavTag';

class SearchScreen extends React.Component {

    constructor(props) 
    {
      super(props);
      this.state = {
        index: 0,
        nav: 'user',   
        pressStatus: false,
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

  _onHideUnderlay=()=> {
    this.setState({ pressStatus: false });
    }

  _onShowUnderlay=()=> {
  this.setState({ pressStatus: true });
  }

  render(){
    // const { search } = this.state
    const {navigate} = this.props.navigation;
    // const { nav } = this.state.nav;
    this.searchContents = {
      default : <SearchDefault/>,
      user : <SearchUser/>,
      nearby : <SearchNearBy/>,
      tags : <SearchTags/>,
      ranking : <SearchRanking/>
    };

    this.navDefault = {width:'25%',height:'100%',padding:'3%'};
    this.navSelect = {backgroundColor:'white',width:'25%',height:'100%',padding:'3%',borderTopRightRadius:20, borderTopLeftRadius:20};

    this.navDefaultText = {color:'white',fontSize:14,textAlign:'center', fontWeight:'bold'};
    this.navSelectText = {color:'gray',fontSize:14,textAlign:'center'};

    return (
        <View>
          <Header
            leftComponent={{ color: '#fff' }}
            centerComponent={{ text: 'じょそすたぐらむ', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
            rightComponent={{ icon: 'send', color: '#fff' }}
            containerStyle={{
              backgroundColor: 'pink',
              justifyContent: 'space-around',
            }}
          />
    
          {/* //4Top Nav Tabs */}
          <View style={{backgroundColor:'pink',width:'100%',height:45,flexDirection:'row', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
            <TouchableOpacity 
              key = {0}
              style={this.state.nav == 'user' ? this.navSelect : this.navDefault} 
              onPress={() =>  {this.setState({nav: 'user'})}}>
              <Text style={this.state.nav == 'user' ? this.navSelectText : this.navDefaultText}>#ユーザー</Text>  
            </TouchableOpacity>
            <TouchableOpacity 
              key = {1}
              style={this.state.nav == 'nearby' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'nearby'})}}>
              <Text style={this.state.nav == 'nearby' ? this.navSelectText : this.navDefaultText}>#近くの人</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              key = {2}
              style={this.state.nav == 'tags' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'tags'})}}>
                <Text style={this.state.nav == 'tags' ? this.navSelectText : this.navDefaultText}>＃タグ</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              key = {3}
              style={this.state.nav == 'ranking' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'ranking'})}}>
                <Text style={this.state.nav == 'ranking' ? this.navSelectText : this.navDefaultText}>#注目順</Text>
            </TouchableOpacity>
          </View>
         
            {this.searchContents[this.state.nav]}
          
        </View>
    );
  }
}

  class SearchDefault extends React.Component{
    render(){
      return(
        <View style={{ alignItems: 'center',justifyContent: 'center', width:'100%', height:'80%'}}>
          <Text style ={{fontSize: 16, fontWeight:'bold', color:'gray'}}>メニューから選択</Text>
        </View>
      );
    }
  }

  
  class SearchUser extends React.Component{
    render(){
      return (
        <View>
          <NavUser/>
        </View> 
      );
    }
  }

  class SearchNearBy extends React.Component{
    render(){
      // const { search } = this.state
      // const { selectedIndex } = this.state
      return (
        <View>
          <NavNearBy/>
        </View>
      );
    }
  }

  class SearchTags extends React.Component{
    render(){
      // const {navigate} = this.props.navigation;
      // const { search } = this.state
      return (
      <View style={{height:'100%'}}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:'100%',height:'100%'}}>
            <Input placeholder='検索'　leftIcon={<Icon name='search' size={18} color='gray'/>}/>
          </View>
        </View>
        <ScrollView >  
          <View style={{}}>
            <NavTag/>
          </View>
        </ScrollView>
      </View>
      );
    }
  }

  class SearchRanking extends React.Component{
    render(){
      return (
        <View>
          <RankingScreen/>     
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
      // position: 'absolute',
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
      width:'40%',
      aspectRatio:0.9, 
      backgroundColor:'pink', 
      margin:'4%', 
      borderRadius:18, 
      position:'relative', 
      shadowColor: 'gray', 
      shadowOffset: { width: 12, height: 12 }, 
      shadowOpacity: 0.4, 
      shadowRadius: 5, 
      elevation: 2,

    },
  }
  );
  
  export default SearchScreen;