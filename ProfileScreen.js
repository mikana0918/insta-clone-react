import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, Linking, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Story from "./Story";
import Carousel from 'react-native-snap-carousel';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";

class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigate }) => ({
    header: null
    })
    constructor(props) {
      super(props);
      this.state = {
      
        modalVisible: false,
        currentIndex: 0,
        stories: [
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

  _renderItem ({item, index}) {
    return (
      <View style={styles.slide}>  
      <Image
      source={ item.story}
      style={{ width: '100%', height: '100%'}}/>
         <Text style={styles.title}>{ item.title }</Text>

  </View>
    );
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


    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
  <Modal animationType="fade" transparent={true} visible={this.state.modalVisible}>
          <View style={{alignItems: 'center',justifyContent: 'center',backgroundColor: 'rgba(0,0,0,0.9)'}}>
          <View style={{alignItems: 'center',justifyContent: 'center',height:'10%',width:'100%'}}>
           <View style={{height:'75%',width:'100%',padding:5,flexDirection:'row'}}>
              <View style={{alignItems: 'center',justifyContent: 'center',height:'100%',width:'35%',flexDirection:'row'}}>
                  <Image
                      source={require('./assets/instagram-clone-sample.png')}
                      style={{ width: 40, height: 40, borderRadius: 40 / 2}}/>
                   <Text style={{color:'white',fontSize:12,marginLeft:8,fontWeight:'bold'}}>Ota_Queen</Text>
              </View>
            <View style={{height:'100%',width:'55%'}}>
                <Text style={{color:'white',fontSize:10,marginLeft:5,fontWeight:'bold'}}>664d</Text>
            </View>
            <View style={{height:'100%',width:'10%',alignItems: 'center',justifyContent: 'center'}}>
                <Icon name='more' size={12} color='white'/>
                  <TouchableOpacity 
                  onPress={() => {this.setModalVisible(false);}}
                    style = {{width:'100%', alignContent:'right', alignItems:'right' ,flexDirection:'row'}}>
                        <Icon name='close' size={30} color='white'/>
                  </TouchableOpacity> 
            </View>
          </View> 
              <View style={{height:'25%',width:'100%',padding:3,flexDirection:'row',marginLeft:'3%',marginRight:'3%'}}>
                  <View style={{backgroundColor:'white',height:'30%',width:'48%',marginLeft:5,borderRadius:20}}></View>
                  <View style={{backgroundColor:'gray',height:'30%',width:'48%',marginLeft:5,borderRadius:20}}></View>
                  <View style={{backgroundColor:'gray',height:'30%',width:'48%',marginLeft:5,borderRadius:20}}></View>
              </View>
          </View>     
          <View style={{alignContent:'right', alignItems:'right',height:'90%',width:'100%',borderRadius:10}}>
              <Carousel
                  ref={(c) => { this._carousel = c; }}
                  data={this.state.stories}
                  renderItem={this._renderItem}
                  sliderWidth={400}
                  itemWidth={400}
                  firstItem={0}
                  layout={'tinder'} 
                  layoutCardOffset={9}>     
              </Carousel>
          </View>       
      </View>
      </Modal>
           <Header
              leftComponent={{ icon: 'camera', color: '#fff' }}
              centerComponent={{ text: 'プロフィール', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
              rightComponent={{ icon: 'edit', color: '#fff',  onPress:() => navigate('Message')}}
              containerStyle={{
                backgroundColor: 'pink',
                justifyContent: 'space-around',}}/>


            <ScrollView style={{ }}>
              <View style={{backgroundColor:'white',height:140,padding:10,flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => {this.setModalVisible(true);}}>
                  <ImageBackground
                      style={{ width:120, height: 120, borderRadius: 120 / 2, borderColor:'pink',borderWidth:3,padding:2 }}>
                      <Image
                          source={require('./assets/instagram-clone-sample.png')}
                          style={{ width: 110, height: 110, borderRadius: 110 / 2 }}/>
                  </ImageBackground>
                </TouchableOpacity>

              <View style={{backgroundColor:'white',height:'100%',width:'65%',padding:5}}>
                <View style={{backgroundColor:'white',height:'49%',width:'100%',marginBottom:5,flexDirection:'row',padding:5}}>

                  <TouchableOpacity style={{height:'100%',width:'32%',backgroundColor:'white',marginRight:5}}
                    onPress={() => navigate('MyPosts')}>
                      <View style={{height:'70%',width:'100%',backgroundColor:'white',paddingLeft:'10%',paddingRifht:'12%',paddingTop:'16%',alignContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>100</Text>
                      </View>
                      <View style={{height:'30%',width:'100%',backgroundColor:'white'}}>
                        <Text style={{fontSize:10,textAlign:'center',color:'gray'}}>posts</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{height:'100%',width:'32%',backgroundColor:'white',marginRight:5}}
                     onPress={() => navigate('Following')}>
                      <View style={{height:'70%',width:'100%',backgroundColor:'white',paddingLeft:'10%',paddingRifht:'12%',paddingTop:'16%'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>347</Text>
                      </View>
                      <View style={{height:'30%',width:'100%',backgroundColor:'white'}}>
                        <Text style={{fontSize:10,textAlign:'center',color:'gray'}}>Following</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{height:'100%',width:'32%',backgroundColor:'white',marginRight:5}}
                    onPress={() => navigate('Followers')}>
                      <View style={{height:'70%',width:'100%',backgroundColor:'white',paddingLeft:'10%',paddingRifht:'12%',paddingTop:'16%'}}>
                        <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>1.5M</Text>
                      </View>
                      <View style={{height:'30%',width:'100%',backgroundColor:'white'}}>
                        <Text style={{fontSize:10,textAlign:'center',color:'gray'}}>Followers</Text>
                      </View>
                  </TouchableOpacity>

                 

                </View>
                  {/* //ここからメッセージボタン */}
                  <View style={{backgroundColor:'white',height:'45%',width:'100%',padding:10,flexDirection:'row'}}>
                      <TouchableOpacity style={{backgroundColor:'white',height:24, width:'67%',borderRadius:4, borderWidth: 0.5,borderColor:'black',marginRight:5,padding:3}} onPress={() => navigate('Message')}>
                          <Text style={{textAlign:'center'}}>Message</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{backgroundColor:'white',height:24, width:'15%',borderRadius:4, borderWidth: 0.5,borderColor:'black',marginRight:5, padding:5}}>
                        <Image source={require('./assets/user-shape.png')} style={{height:12, width: 12, alignSelf: 'center' }}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={{backgroundColor:'white',height:24, width:'15%',borderRadius:4, borderWidth: 0.5,borderColor:'black',marginRight:5, padding:7}}>
                        <Menu
                          ref={this.setMenuRef}
                          button={<Image source={require('./assets/sort-down.png')} style={{height:10, width: 10, alignSelf: 'center' }}/>}>
                              <MenuItem onPress={this.hideMenu}>MenuItem 1</MenuItem>
                              <MenuItem onPress={this.hideMenu}>MenuItem 2</MenuItem>
                              <MenuItem onPress={this.hideMenu} disabled>MenuItem 3</MenuItem>
                        </Menu>
                      </TouchableOpacity>
                  </View>

                 </View>
              </View>
              {/* //ここからプロフィール */}
              <View style={{backgroundColor:'white',height:150,padding:10,marginLeft:'2%',marginRight:'3%'}}>
                <View style={{backgroundColor:'white',height:130}}>
                  <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginBottom:5}}>ゆうこす</Text>
                    <Text style={{color:'gray',marginBottom:3}}>インフルエンサー</Text>
                    <Text style={{marginBottom:5}}>ユーチューバー、ライバー、インフルエンサーです♪　ググってみてね❤️</Text>
                    <Text style={{marginBottom:5,color:'blue'}} onPress={() => Linking.openURL('http://google.com')}>https://google.com</Text>
                    <Text style={{marginBottom:8}}>東京都港区在住</Text>
                    <Text style={{fontSize:10}}>Followed by HIKAKIN, Fukase, SEIKIN</Text>
                  </View>
                </View>
              </View>
  
        <Story/>
         {/* ここから画像タイル */}
              <View style={{backgroundColor:'white',flexDirection:'row',alignItems: 'flex-start',flexWrap: 'wrap',}}>
                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                              <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                               <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                                <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
                   <Image
                 source={require('./assets/welcome1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width: '33%',aspectRatio: 1,marginRight:1,marginTop:1 }}/>
  
                
              </View>
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

export default ProfileScreen;