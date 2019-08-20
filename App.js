import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import SideSwipe from 'react-native-sideswipe';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BottomNavigation } from 'react-native-paper';
import * as Font from 'expo-font';
import Carousel from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import MyComponent from './bottomNavigation';


const slides = [
  {
    key: 'somethun',
    title: 'Josostagram',
    // text: 'Jyosostagram',
    image: require('./assets/welcome1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    // title: 'Title 2',
    text: 'まずは会員登録',
    image: require('./assets/welcome1.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    // title: 'Rocket guy',
    text: '写真をシェア',
    image: require('./assets/welcome1.jpg'),
    backgroundColor: '#22bcb5',
  }
];


// log-in screen
class Home extends React.Component {
  state = {
    showRealApp: false,
    fontLoaded: false,
  }
  static navigationOptions = {
    header: null
  }

  render() {
    if (this.state.showRealApp) {
      return <Timeline />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
    }
  }
}

//timeline screen
class Timeline extends React.Component {
  state = {
    modalVisible: false,
    currentIndex: 0,

  };

  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }  

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
         <Header
            leftComponent={{ icon: 'camera', color: '#fff',onPress: () => alert('写真を選んでください') }}
            centerComponent={{ text: 'じょそすたぐらむ', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
            rightComponent={{ icon: 'send', color: '#fff', onPress: () => navigate('Message２') }}
            containerStyle={{
              backgroundColor: 'pink',
              justifyContent: 'space-around',
            }}
          />


        {/* modal timeline video */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{alignItems: 'center',justifyContent: 'center',backgroundColor: 'rgba(0,0,0,0.9)'}}>
            <View style={{alignItems: 'center',justifyContent: 'center',height:'10%',width:'100%'}}>
              <View style={{height:'75%',width:'100%',padding:5,flexDirection:'row'}}>
                <View style={{alignItems: 'center',justifyContent: 'center',height:'100%',width:'35%',flexDirection:'row'}}>
                <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 40, height: 40, borderRadius: 40 / 2}}
                  />
                  <Text style={{color:'white',fontSize:12,marginLeft:8,fontWeight:'bold'}}>Ota_Queen</Text>
                </View>
                <View style={{height:'100%',width:'55%'}}>
                <Text style={{color:'white',fontSize:10,marginLeft:5,fontWeight:'bold'}}>664d</Text>
                </View>
                <View style={{height:'100%',width:'10%',alignItems: 'center',justifyContent: 'center'}}>
                <Icon
                      name='more'
                      size={12}
                      color='white'/>
                </View>
              </View>
              <View style={{height:'25%',width:'100%',padding:3,flexDirection:'row',marginLeft:'3%',marginRight:'3%'}}>
                <View style={{backgroundColor:'white',height:'30%',width:'48%',marginLeft:5,borderRadius:20}}></View>
                <View style={{backgroundColor:'gray',height:'30%',width:'48%',marginLeft:5,borderRadius:20}}></View>
              </View>
            </View>

            {/* <TouchableHighlight */}
                {/* // onPress={() => {this.setModalVisible(!this.state.modalVisible);}} */}
                {/* style={{alignItems: 'center',justifyContent: 'center',height:'90%',width:'100%'}}> */}
            <View style={{alignItems: 'center',justifyContent: 'center',height:'90%',width:'100%'}}>
          {/* //slider */}
          <Carousel layout={'tinder'} layoutCardOffset={`9`} />

           {/* <ImageBackground
                         source={require('./assets/test-gif1.gif')}
                         //borderRadius style will help us make the Round Shape Image
                         style={{ width: '100%', height: '100%'}}
                         resizeMode='contain'>
                          </ImageBackground> */}
            {/* <Icon
              name='next'
              size={12}
              color='white'
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}/> */}
           

             
          </View>
          {/* </TouchableHighlight> */}
          </View>
        </Modal>

        {/* Stories wrapper here */}
        <View style={{height:150,backgroundColor:'white' }}>
          <Text style= {{marginLeft:10, marginTop:10,fontSize:12,width:'50%'}}>Stories</Text>  
          <ScrollView horizontal={true} style={{ backgroundColor:'white',margin:5,padding:6}}>

{/* first is mine */}
            <TouchableOpacity 
            style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:7}}
            onPress={() => {this.setModalVisible(true);}}>
              <ImageBackground
                // source={require('./assets/frame-ring1.png')}
                style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 60, height: 60, borderRadius: 60 / 2}}
                  />
              </ImageBackground>
                <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
            </TouchableOpacity>

            <TouchableOpacity style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:7}}>
              <ImageBackground
                // source={require('./assets/frame-ring1.png')}
                style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 60, height: 60, borderRadius: 60 / 2}}
                  />
              </ImageBackground>
                <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
            </TouchableOpacity>

            <TouchableOpacity style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:7}}>
              <ImageBackground
                // source={require('./assets/frame-ring1.png')}
                style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 60, height: 60, borderRadius: 60 / 2}}
                  />
              </ImageBackground>
                <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
            </TouchableOpacity>

            <TouchableOpacity style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:7}}>
              <ImageBackground
                // source={require('./assets/frame-ring1.png')}
                style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 60, height: 60, borderRadius: 60 / 2}}
                  />
              </ImageBackground>
                <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
            </TouchableOpacity>

            <TouchableOpacity style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:7}}>
              <ImageBackground
                // source={require('./assets/frame-ring1.png')}
                style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 60, height: 60, borderRadius: 60 / 2}}
                  />
              </ImageBackground>
                <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
            </TouchableOpacity>

            <TouchableOpacity style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:7}}>
              <ImageBackground
                // source={require('./assets/frame-ring1.png')}
                style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 60, height: 60, borderRadius: 60 / 2}}
                  />
              </ImageBackground>
                <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
            </TouchableOpacity>



           
      
          </ScrollView>
        </View>
        {/* #DEDEDE(87%) #BDBDBD(74%) #A3A3A3(64%) */}
        {/* timeline from here */}
        <ScrollView style={{height:'75%'}}>
        <View style={{ height:600,backgroundColor:'white'}}>
          <View style={{height:50}}>
            <View style={{backgroundColor:'white',marginLeft:10,marginTop:4,marginRight:10,height:'80%',flexDirection: 'row'}}>
              <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 30, height: 30, borderRadius: 30 / 2, marginLeft:5,marginTop:5}}
                  />
                <Text style={{fontSize:14,marginLeft:12,marginTop:12,fontWeight:'bold'}}>ゆうこす</Text>
                
             </View>
          </View>
          <Image
                source={require('./assets/insta-ex1.jpg')}
                style={{ width: '100%', height: '70%', resizeMode: 'cover',}}
          />
          <View style={{ width: '100%', height: '10%', backgroundColor:'white',flexDirection: 'row',padding:10}}>
          <Image
                source={require('./assets/heart-shape.png')}
                style={{ width: 30, height: 30,marginRight:16,marginLeft:8}}/>
          <Image
                source={require('./assets/speech-bubble.png')}
                style={{ width: 30, height: 30,marginRight:16}}/>
          <Image
                source={require('./assets/mail.png')}
                style={{ width: 30, height: 30,marginRight:16}}/>
          </View>
          <View>
          <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>100 いいね！</Text> 
          <View style={{flexDirection: 'row',marginTop:5}}>         
            <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>ゆうこす</Text> 
            <Text style={{color:'black',marginLeft:12,fontSize:14}}>今日はフォロワー少なすぎて泣いた(^◇^;)</Text>
          </View>
          </View>     
        </View>
        <View style={{ height:600,backgroundColor:'white'}}>
          <View style={{height:50}}>
            <View style={{backgroundColor:'white',marginLeft:10,marginTop:4,marginRight:10,height:'80%',flexDirection: 'row'}}>
              <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 30, height: 30, borderRadius: 30 / 2, marginLeft:5,marginTop:5}}
                  />
                <Text style={{fontSize:14,marginLeft:12,marginTop:12,fontWeight:'bold'}}>みゅう</Text>
                
             </View>
          </View>
          <Image
                source={require('./assets/insta-maid1.jpg')}
                style={{ width: '100%', height: '70%', resizeMode: 'cover',}}
          />
          <View style={{ width: '100%', height: '10%', backgroundColor:'white',flexDirection: 'row',padding:10}}>
          <Image
                source={require('./assets/heart-shape.png')}
                style={{ width: 30, height: 30,marginRight:16,marginLeft:8}}/>
          <Image
                source={require('./assets/speech-bubble.png')}
                style={{ width: 30, height: 30,marginRight:16}}/>
          <Image
                source={require('./assets/mail.png')}
                style={{ width: 30, height: 30,marginRight:16}}/>
          </View>
          <View>
          <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>100 いいね！</Text> 
          <View style={{flexDirection: 'row',marginTop:5}}>         
            <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>完全で瀟洒なメイド</Text> 
            <Text style={{color:'black',marginLeft:12,fontSize:14}}>今日もお給仕しちゃいますにゃん❤️</Text>
          </View>
          </View>     
        </View>
        <View style={{ height:600,backgroundColor:'white'}}>
          <View style={{height:50}}>
            <View style={{backgroundColor:'white',marginLeft:10,marginTop:4,marginRight:10,height:'80%',flexDirection: 'row'}}>
              <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 30, height: 30, borderRadius: 30 / 2, marginLeft:5,marginTop:5}}
                  />
                <Text style={{fontSize:14,marginLeft:12,marginTop:12,fontWeight:'bold'}}>みゅう</Text>
                
             </View>
          </View>
          <Image
                source={require('./assets/insta-loli1.jpg')}
                style={{ width: '100%', height: '70%', resizeMode: 'cover',}}
          />
          <View style={{ width: '100%', height: '10%', backgroundColor:'white',flexDirection: 'row',padding:10}}>
          <Image
                source={require('./assets/heart-shape.png')}
                style={{ width: 30, height: 30,marginRight:16,marginLeft:8}}/>
          <Image
                source={require('./assets/speech-bubble.png')}
                style={{ width: 30, height: 30,marginRight:16}}/>
          <Image
                source={require('./assets/mail.png')}
                style={{ width: 30, height: 30,marginRight:16}}/>
          </View>
          <View>
          <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>100 いいね！</Text> 
          <View style={{flexDirection: 'row',marginTop:5}}>         
            <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>みゅう</Text> 
            <Text style={{color:'black',marginLeft:12,fontSize:14}}>今日はちょーいい天気⭐️</Text>
          </View>
          </View>     
        </View>


        </ScrollView>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isBorderBottom:false};   
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
            <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%',borderBottomColor:'pink',borderBottomWidth:3}} >
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

//add screen
class RankingScreen extends React.Component {
  render() {
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
              <Text style={{color:'gray',fontSize:14,textAlign:'center',textAlignVertical:'bottom'}}>ALL</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
              <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>Dailly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
               <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
               <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>Monthly</Text>
            </TouchableOpacity>
          </View>
           {/* //show users */}
           <View style={{backgroundColor:'white',width:'100%',height:20,marginLeft:'3%',marginTop:10}}>
            <Text style={{color:'gray',fontSize:12,textAlign:'center'}}>全期間</Text>
          </View>

          <View style={{width:'100%',height:300,flexDirection:'row'}}>
            <View style={{width:'33.3%',height:'100%'}}>
              <ImageBackground
               source={require('./assets/meidodesu_TP_V.jpg')}
               style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(0,0,0,0.4)'}}
               resizeMode='cover'
               blurRadius={3}>
               {/* リングを重ねてみる */}
              <ImageBackground
              source={require('./assets/frame-ring1.png')}
              style={{ width:160, height: 160, borderRadius: 160 / 2, justifyContent: 'center',alignItems: 'center'}}>
               <Image
                    source={require('./assets/meidodesu_TP_V.jpg')}
                    style={{ width:110, height: 110, borderRadius: 110 / 2}}
              />
             </ImageBackground>
              <Text style={{fontSize:16,marginTop:5,textAlign:"center",fontWeight:'bold',color:'pink'}}>No.2</Text>
            
              </ImageBackground>
            </View>
            <View style={{backgroundColor:'white',width:'33.3%',height:'100%'}}>
            <ImageBackground
               source={require('./assets/instagram-clone-sample.png')}
               //borderRadius style will help us make the Round Shape Image
               style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center'}}
               resizeMode='cover'
               blurRadius={3}
               >
                 {/* リングを重ねてみる */}
              <ImageBackground
              source={require('./assets/frame-ring1.png')}
              style={{ width:160, height: 160, borderRadius: 160 / 2, justifyContent: 'center',alignItems: 'center'}}>
                  <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width:110, height: 110, borderRadius: 110 / 2}}
                  />
              </ImageBackground>
              <View><Text style={{fontSize:16,marginTop:5,textAlign:"center",fontWeight:'bold',color:'pink'}}>No.1</Text></View>
              </ImageBackground>
            </View>
            <View style={{backgroundColor:'white',width:'33.3%',height:'100%'}}>
            <ImageBackground
               source={require('./assets/number-sample3.jpg')}
               //borderRadius style will help us make the Round Shape Image
               style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center'}}
               resizeMode='cover'
               blurRadius={3}
               >
                   {/* リングを重ねてみる */}
              <ImageBackground
              source={require('./assets/frame-ring1.png')}
              style={{ width:160, height: 160, borderRadius: 160 / 2, justifyContent: 'center',alignItems: 'center'}}>
            <Image
                    source={require('./assets/number-sample3.jpg')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:110, height: 110, borderRadius: 110 / 2}}
            />
            </ImageBackground>
            <View><Text style={{fontSize:16,marginTop:5,textAlign:"center",fontWeight:'bold',color:'pink'}}>No.3</Text></View>
            </ImageBackground>
            </View>
          </View>


      {/* ここからリスト表示 */}        
          <ScrollView style={{backgroundColor:'white',width:'100%'}}>
          {/* 横幅いっぱいで、画像を後ろにいれて統一感だす */}
             <View style={{width:'100%',height:80,flexDirection: 'row'}}>
              <ImageBackground
                source={require('./assets/instagram-clone-sample.png')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                resizeMode='cover'
                blurRadius={3}>
                    <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
                      <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold'}}>1</Text>
                    </View>
                    <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                    <Image
                      source={require('./assets/instagram-clone-sample.png')}
                      //borderRadius style will help us make the Round Shape Image
                      style={{ width:65, height: 65, borderRadius: 65 / 2}}
                    />
                  </View>
                  <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                    <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                    <Text style={{color:'white',fontSize:14}}>姫</Text>
                  </View>
                  <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                    <Icon
                          name='add'
                          size={12}
                          color='gray'/>
                            
                  </View>
                </ImageBackground>
             </View>
             {/* 横幅いっぱいで、画像を後ろにいれて統一感だす */}
             <View style={{width:'100%',height:80,flexDirection: 'row',backgroundColor:'gray'}}>
              <ImageBackground
                source={require('./assets/meidodesu_TP_V.jpg')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                resizeMode='cover'
                blurRadius={3}>
                    <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
                      <Text style={{fontSize:14,textAlign:'center'}}>1</Text>
                    </View>
                    <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                    <Image
                      source={require('./assets/meidodesu_TP_V.jpg')}
                      //borderRadius style will help us make the Round Shape Image
                      style={{ width:65, height: 65, borderRadius: 65 / 2}}
                    />
                  </View>
                  <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                    <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                    <Text style={{color:'white',fontSize:14}}>姫</Text>
                  </View>
                  <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                    <Icon
                          name='add'
                          size={12}
                          color='gray'/>
                            
                  </View>
                </ImageBackground>
             </View>
              {/* 横幅いっぱいで、画像を後ろにいれて統一感だす */}
              <View style={{width:'100%',height:80,flexDirection: 'row',backgroundColor:'gray'}}>
              <ImageBackground
                source={require('./assets/number-sample3.jpg')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                resizeMode='cover'
                blurRadius={3}>
                    <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
                      <Text style={{fontSize:14,textAlign:'center'}}>1</Text>
                    </View>
                    <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                    <Image
                      source={require('./assets/number-sample3.jpg')}
                      //borderRadius style will help us make the Round Shape Image
                      style={{ width:65, height: 65, borderRadius: 65 / 2}}
                    />
                  </View>
                  <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                    <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                    <Text style={{color:'white',fontSize:14}}>姫</Text>
                  </View>
                  <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                    <Icon
                          name='add'
                          size={12}
                          color='gray'/>
                            
                  </View>
                </ImageBackground>
             </View>
             {/* 横幅いっぱいで、画像を後ろにいれて統一感だす */}
             <View style={{width:'100%',height:80,flexDirection: 'row',backgroundColor:'gray'}}>
              <ImageBackground
                source={require('./assets/meidodesu_TP_V.jpg')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                resizeMode='cover'
                blurRadius={3}>
                    <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
                      <Text style={{fontSize:14,textAlign:'center'}}>1</Text>
                    </View>
                    <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                    <Image
                      source={require('./assets/meidodesu_TP_V.jpg')}
                      //borderRadius style will help us make the Round Shape Image
                      style={{ width:65, height: 65, borderRadius: 65 / 2}}
                    />
                  </View>
                  <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                    <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                    <Text style={{color:'white',fontSize:14}}>姫</Text>
                  </View>
                  <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                    <Icon
                          name='add'
                          size={12}
                          color='gray'/>
                            
                  </View>
                </ImageBackground>
             </View>
              {/* 横幅いっぱいで、画像を後ろにいれて統一感だす */}
              <View style={{width:'100%',height:80,flexDirection: 'row',backgroundColor:'gray'}}>
              <ImageBackground
                source={require('./assets/number-sample3.jpg')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                resizeMode='cover'
                blurRadius={3}>
                    <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
                      <Text style={{fontSize:14,textAlign:'center'}}>1</Text>
                    </View>
                    <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                    <Image
                      source={require('./assets/number-sample3.jpg')}
                      //borderRadius style will help us make the Round Shape Image
                      style={{ width:65, height: 65, borderRadius: 65 / 2}}
                    />
                  </View>
                  <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                    <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                    <Text style={{color:'white',fontSize:14}}>姫</Text>
                  </View>
                  <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                    <Icon
                          name='add'
                          size={12}
                          color='gray'/>
                            
                  </View>
                </ImageBackground>
             </View>


            
          

          

            

          </ScrollView>
     
      </View>
    );
  }
}

class FavoriteScreen extends React.Component {
  render() {
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

          {/* <ScrollView horizontal={true} style={{ width:'100%',height:150,padding:10,flexDirection:'row'}}>
          <View style={{backgroundColor:'gray'}}>
            <View style={{width:'20%',height:100,backgroundColor:'gray',marginRight:'10%',borderRadius:10}}></View>

          </View>
          </ScrollView> */}

        <ScrollView>
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
                             <Image
               source={require('./assets/welcome1.jpg')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: '33%',aspectRatio: 1,marginTop:1 }}/>
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

//setteings screen
class ProfilesScreen extends React.Component {
  render() {
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
          <ScrollView style={{ }}>
            <View style={{backgroundColor:'white',height:140,padding:10,flexDirection: 'row'}}>
            <ImageBackground
                // source={require('./assets/frame-ring1.png')}
                // ring
                style={{ width:120, height: 120, borderRadius: 120 / 2, borderColor:'pink',borderWidth:3,padding:2 }}>
                <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
                  />
            </ImageBackground>
            <View style={{backgroundColor:'white',height:'100%',width:'65%',padding:5}}>
              <View style={{backgroundColor:'white',height:'49%',width:'100%',marginBottom:5,flexDirection:'row',padding:5}}>
                <View style={{height:'100%',width:'32%',backgroundColor:'white',marginRight:5}}>
                  <View style={{height:'70%',width:'100%',backgroundColor:'white',paddingLeft:'10%',paddingRifht:'12%',paddingTop:'16%'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>100</Text>
                  </View>
                  <View style={{height:'30%',width:'100%',backgroundColor:'white'}}>
                  <Text style={{fontSize:10,textAlign:'center',color:'gray'}}>posts</Text>
                  </View>
                </View>
                <View style={{height:'100%',width:'32%',backgroundColor:'white',marginRight:5}}>
                <View style={{height:'70%',width:'100%',backgroundColor:'white',paddingLeft:'10%',paddingRifht:'12%',paddingTop:'16%'}}>
                <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>1.5M</Text>
                </View>
                  <View style={{height:'30%',width:'100%',backgroundColor:'white'}}>
                  <Text style={{fontSize:10,textAlign:'center',color:'gray'}}>posts</Text>
                  </View>
                </View>
                <View style={{height:'100%',width:'32%',backgroundColor:'white',marginRight:5}}>
                <View style={{height:'70%',width:'100%',backgroundColor:'white',paddingLeft:'10%',paddingRifht:'12%',paddingTop:'16%'}}>
                <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>347</Text>
                </View>
                  <View style={{height:'30%',width:'100%',backgroundColor:'white'}}>
                  <Text style={{fontSize:10,textAlign:'center',color:'gray'}}>following</Text>
                  </View>
                </View>
              </View>
              {/* //ここからメッセージボタン */}
              <View style={{backgroundColor:'white',height:'45%',width:'100%',padding:10,flexDirection:'row'}}>
                <View style={{backgroundColor:'white',height:24, width:'67%',borderRadius:4, borderWidth: 0.5,borderColor:'black',marginRight:5,padding:3}}>
                  <Text style={{textAlign:'center'}}>Message</Text>
                </View>
                <View style={{backgroundColor:'white',height:24, width:'15%',borderRadius:4, borderWidth: 0.5,borderColor:'black',marginRight:5}}></View>
                <View style={{backgroundColor:'white',height:24, width:'15%',borderRadius:4, borderWidth: 0.5,borderColor:'black',marginRight:5}}></View>
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
                  <Text style={{marginBottom:5,color:'blue'}}>https://google.com</Text>
                  <Text style={{marginBottom:8}}>東京都港区在住</Text>
                  <Text style={{fontSize:10}}>Followed by HIKAKIN, Fukase, SEIKIN</Text>
                </View>
              </View>
            </View>
            <View style={{backgroundColor:'pink',height:100}}>
            <View style={{height:130,backgroundColor:'white' }}>
          <ScrollView horizontal={true} style={{ backgroundColor:'white',margin:5,padding:8}}>
            <View style = {{height:'100%'}}>
              <Image
                source={require('./assets/instagram-clone-sample.png')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: 70, height: 70, borderRadius: 70 / 2,marginRight:12 }}
              />
                <Text style={{color:'black',fontSize:10,textAlign:'center',width:'100%',marginRight:10,marginTop:2}}>Face Here</Text> 
            </View>
            <View style = {{height:'100%'}}>
              <Image
                source={require('./assets/instagram-clone-sample.png')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: 70, height: 70, borderRadius: 70 / 2,marginRight:12 }}
              />
                <Text style={{color:'black',fontSize:10,textAlign:'center',width:'100%',marginRight:10,marginTop:2}}>Face Here</Text> 
            </View>
            <View style = {{height:'100%'}}>
              <Image
                source={require('./assets/instagram-clone-sample.png')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: 70, height: 70, borderRadius: 70 / 2,marginRight:12 }}
              />
                  <Text style={{color:'black',fontSize:10,textAlign:'center',width:'100%',marginRight:10,marginTop:2}}>Face Here</Text> 
            </View>
            <View style = {{height:'100%'}}>
              <Image
                source={require('./assets/instagram-clone-sample.png')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: 70, height: 70, borderRadius: 70 / 2,marginRight:12 }}
              />
                <Text style={{color:'black',fontSize:10,textAlign:'center',width:'100%',marginRight:10,marginTop:2}}>Face Here</Text> 
            </View>
            <View style = {{height:'100%'}}>
              <Image
                source={require('./assets/instagram-clone-sample.png')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: 70, height: 70, borderRadius: 70 / 2,marginRight:12 }}
              />
                <Text style={{color:'black',fontSize:10,textAlign:'center',width:'100%',marginRight:10,marginTop:2}}>Face Here</Text> 
            </View>
            <View style = {{height:'100%'}}>
              <Image
                source={require('./assets/instagram-clone-sample.png')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: 70, height: 70, borderRadius: 70 / 2,marginRight:12 }}
              />
                <Text style={{color:'black',fontSize:10,textAlign:'center',width:'100%',marginRight:10,marginTop:2}}>Face Here</Text> 
            </View>
            <View style = {{height:'100%'}}>
              <Image
                source={require('./assets/instagram-clone-sample.png')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: 70, height: 70, borderRadius: 70 / 2,marginRight:12 }}
              />
                <Text style={{color:'black',fontSize:10,textAlign:'center',width:'100%',marginRight:10,marginTop:2}}>Face Here</Text> 
            </View>
            <View style = {{height:'100%'}}>
              <Image
                source={require('./assets/instagram-clone-sample.png')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: 70, height: 70, borderRadius: 70 / 2,marginRight:12 }}
              />
                <Text style={{color:'black',fontSize:10,textAlign:'center',width:'100%',marginRight:10,marginTop:2}}>Face Here</Text> 
            </View>
          </ScrollView>
        </View>
            </View>
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

class MessageScreen extends React.Component {
  render() {
    return (
      <Text>awawawaw</Text>
    )
  }
}

class MyCarousel extends Component {

  // constructor(props){
  //   super();
  //   this.state = {
  //     errors: []
  //   }
  //   this.props = props;
  //   this._carousel = {};
  //   this.init();
  // }

  // init(){
    this.state = {
      videos: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
          title: "Led Zeppelin - Stairway To Heaven"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
          title: "Eminem - My Name Is"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
          title: ""
        }
      ]
    }

  _renderItem ({item, index}) {
      return (
          <View style={styles.slide}>
              <Text style={styles.title}>{ item.title }</Text>
          </View>
      );
  }

  render () {
      return (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.stories}
            renderItem={this._renderItem}
            sliderWidth={'100%'}
            itemWidth={'90%'}
            firstItem={0}
          />
      );
  }
}

// bottom tab
const TabNavigator = createBottomTabNavigator(
  {
  Home: Timeline,
  Search: SearchScreen,
  Ranking: RankingScreen,
  Favorite: FavoriteScreen,
  Profiles: ProfilesScreen,
},);

//move pages
const AppNavigator = createStackNavigator({
  Message: {
    screen: MessageScreen
  }
});

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
    color: 'white',
    zIndex: 2,
    fontSize:30,
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
  }
  // image:{
  //   height: Dimensions.get('window').width, 
  //   width: Dimensions.get('window').height,
  //   resizeMode: 'stretch',
  // }
}
);

export default createAppContainer(TabNavigator,AppNavigator);