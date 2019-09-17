import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, Linking, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon, SearchBar,Input,Button } from 'react-native-elements';
import Story from "./Story";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { Asset } from 'expo-asset';
import Carousel, {Pagination} from 'react-native-snap-carousel';

class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigate }) => ({
    header: null
    })
    constructor(props) {
      super(props);
      this.state = {
      
        modalVisible: false,
        currentIndex: 0,
        activeSlide: 0,
        stories: [
          {
            id: "WpIAu9by5iU",
            story: require('./assets/mitsuaminagetemina_TP_V.jpg'),
            title: "はじめての投稿🌟"
          },
          {
            id: "WpIAc9by5iU",
            story: require('./assets/welcome1.jpg'),
            title: "はじめての投稿🌟"
          }, {
            id: "sNPnbI1arSE",
            story: require('./assets/insta-maid1.jpg'),
            title: "つらたん"
          }, {
            id: "VOgFZfRVaww",
            story: require('./assets/insta-loli1.jpg'),
            title: "しぬ"
          }
        ]
      };   
  }

  closeModal = () => {
    this.setState({ modalVisible: false});
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }  

  //material menu 
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };

    //impl pagenation
    get pagination () 
    {
      const { stories, activeSlide } = this.state;
      return (
          <Pagination
            dotsLength={stories.length}
            activeDotIndex={this.state.activeSlide}
            containerStyle={{alignSelf:'center',position: 'absolute', bottom:-20 }}
            dotStyle={
              {
                width: 10,
                height: 10,
                borderRadius: 10,
                // marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.9)'
              }
          }
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.3}
            inactiveDotScale={0.6}
          />
      );
    }


    render() {
      const {navigate} = this.props.navigation;
      return (
        <LinearGradient
          colors={['#ddd6f3', '#faaca8']}
          style={{}}>
          <View style={{height:'100%', width:'100%'}}>
              <View style={{width:'100%', height:'60%', backgroundColor:'blie', flexDirection:'row'  }}>
                <ImageBackground
                  source={require('./assets/mitsuaminagetemina_TP_V.jpg')}
                  style={{width:'100%', height:'100%', alignItems:'flex-start', backgroundColor: 'red' , opacity:0.8}}
                  resizeMode={'cover'}/>

              </View>
              {/* top card  */}
              <View style={{flexDirection: 'row-reverse', top:'5%', borderRadius: 20, alignSelf:'center', width:'86%', height:'8%',  position:'absolute' }}>
                <Icon name='settings' size={36} color={'white'} style={{alignSelf:'right'}}/>
              </View>
              {/* mid card */}
              <View style={{borderRadius: 20, alignSelf:'center', width:'86%', height:'40%', backgroundColor:'white', position:'absolute', top:'45%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                <View style={{backgroundColor:'white', width:'100%', height:'50%', alignContents:'center',}}>
                  <View style={{top:'20%',backgroundColor:'white', height:'50%', alignContent:'center' }}>
                    <Image
                        source={require('./assets/mitsuaminagetemina_TP_V.jpg')}
                        style={{ width:60, height: 60, borderRadius: 60 / 2, alignSelf:'center', marginBottom:'1%'}}
                      />
                      <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:'gray'}}>curling girl</Text>
                      <Text style={{textAlign:'center', fontSize:16, color:'gray'}}>Akihabara, JP</Text>
                  </View>
                </View>
                <View style={{ width:'100%', height:'40%', padding:'5%', backgroundColor:'white'}}>
                  <View style={{height:'50%'}}>
                    <View style={{flexDirection:'row', backgroundColor:'white', width:'100%', height:'100%', padding:1}}>
                      <View style={{backgroundColor:'white', height:'100%', width:'33%', marginRight:5}}>
                        <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:'gray'}}>Posts</Text>
                        <Text style={{textAlign:'center', fontSize:14, fontWeight:'bold', color:'gray'}}>200</Text>
                      </View>
                      <View style={{backgroundColor:'white', height:'100%', width:'33%', marginRight:5}}>
                        <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:'gray'}}>Views</Text>
                        <Text style={{textAlign:'center', fontSize:14, fontWeight:'bold', color:'gray'}}>400</Text>
                      </View>
                      <View style={{backgroundColor:'white', height:'100%', width:'33%', marginRight:5}}>
                        <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:'gray'}}>Likes</Text>
                        <Text style={{textAlign:'center', fontSize:14, fontWeight:'bold', color:'gray'}}>300</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{height:'60%',width:'100%', alignContent:'flex-start', flexWrap:'wrap', backgroundColor:'white', flexDirection:'row'}}>
                    <View style={{padding:2, backgroundColor:'pink', width:'28%', margin:'2%',  height:'40%', borderRadius:20 , shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                      <Text style={{textAlign:'center', fontSize:13, color:'white'}}>●●系</Text>
                    </View>
                    <View style={{padding:2, backgroundColor:'pink', width:'28%', margin:'2%', height:'40%', borderRadius:20 , shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                      <Text style={{textAlign:'center', fontSize:13, color:'white'}}>●●系</Text>
                    </View>
                    <View style={{padding:2, backgroundColor:'pink', width:'28%', margin:'2%', height:'40%', borderRadius:20 , shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                      <Text style={{textAlign:'center', fontSize:13, color:'white'}}>●●系</Text>
                    </View>
                    <View style={{padding:2, backgroundColor:'pink', width:'28%', margin:'2%',  height:'40%', borderRadius:20 , shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                      <Text style={{textAlign:'center', fontSize:13, color:'white'}}>●●系</Text>
                    </View>
                    <View style={{padding:2, backgroundColor:'pink', width:'28%', margin:'2%', height:'40%', borderRadius:20 , shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                      <Text style={{textAlign:'center', fontSize:13, color:'white'}}>●●系</Text>
                    </View>
                    <View style={{padding:2, backgroundColor:'pink', width:'28%', margin:'2%', height:'40%', borderRadius:20 , shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                      <Text style={{textAlign:'center', fontSize:13, color:'white'}}>●●系</Text>
                    </View>
                  </View>
                </View>
                <View>

                </View>
              </View>

              <View style={{borderRadius: 20, alignSelf:'center', width:'35%', height:'4%', backgroundColor:'pink', position:'absolute', top:'43%',padding:'4%'}}>
                <Text style={{color:'white', textAlign:'center', textAlignVertical:'center', fontWeight:'bold'}}>Lv. 120</Text>
              </View>

              {/* bot card */}
              <View style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'center',borderRadius: 30, alignSelf:'center', width:'86%', height:'10%',  position:'absolute' , bottom:'3%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>

                  <TouchableOpacity style={{marginRight:'6%', alignItems: 'center', justifyContent: 'center', backgroundColor:'pink', width:'50%', height:'60%', borderRadius:300 , shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                    <Text style={{textAlign:'center', fontSize:16, color:'white', fontWeight:'bold'}}>メッセージを送る</Text>
                  </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor:'pink', width:'30%', height:'60%', borderRadius:300 , shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
                  <Text style={{textAlign:'center', fontSize:16, color:'white', fontWeight:'bold'}}>友達登録</Text>
                </TouchableOpacity>
              </View>


          </View>
        </LinearGradient>
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

export default ProfileScreen;