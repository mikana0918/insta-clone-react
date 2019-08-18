import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BottomNavigation } from 'react-native-paper';
import * as Font from 'expo-font';
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
  // componentDidMount() {
  //   Font.loadAsync({
  //     'insta-font': require('./assets/fonts/Billabong.ttf'),
  //   });
  //   this.setState({ fontLoaded: true });
  // }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style = {styles.welcomeImages}source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    // this.props.navigation.navigate(Timeline);
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
        {/* Stories wrapper here */}
        <View style={{height:130,backgroundColor:'white' }}>
          <Text style= {{marginLeft:10, marginTop:10,fontSize:12,width:'50%'}}>Stories</Text>  
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
            <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
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
            </View>
            <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
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
            </View>
            <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
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
            </View>
            <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
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
            </View>
            <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
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
            </View>
            <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
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
            </View>
            <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
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
            </View>
            <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
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
            </View>
            <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
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
            </View>
            <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
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
            </View>

            

           
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

          <View style={{backgroundColor:'white',width:'100%',height:300,flexDirection:'row'}}>
            <View style={{backgroundColor:'white',width:'33.3%',height:'100%'}}>
              <ImageBackground
               source={require('./assets/meidodesu_TP_V.jpg')}
               //borderRadius style will help us make the Round Shape Image
               style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',}}
               resizeMode='cover'
               blurRadius={3}>
               <Image
                    source={require('./assets/meidodesu_TP_V.jpg')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:110, height: 110, borderRadius: 110 / 2}}
              />
              <Text style={{fontSize:16,marginTop:5,textAlign:"center",fontWeight:'bold'}}>No.2</Text>
            
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
              <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:110, height: 110, borderRadius: 110 / 2}}
              />
              <View><Text style={{fontSize:16,marginTop:5,textAlign:"center",fontWeight:'bold'}}>No.1</Text></View>
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
            <Image
                    source={require('./assets/number-sample3.jpg')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:110, height: 110, borderRadius: 110 / 2}}
            />
            <View><Text style={{fontSize:16,marginTop:5,textAlign:"center",fontWeight:'bold'}}>No.3</Text></View>
            </ImageBackground>
            </View>
          </View>
          
          <ScrollView style={{backgroundColor:'white',width:'100%',paddingLeft:'3%',paddingRight:'3%',marginTop:5}}>
            <View style={{backgroundColor:'gold',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
              <View style={{backgroundColor:'pink',height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
               <Text style={{fontSize:14,textAlign:'center'}}>1</Text>
              </View>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:65, height: 65, borderRadius: 65 / 2}}
                  />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>

                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='add'
                        size={12}
                        color='gray'/>
                          
                </View>
             </View>

             <View style={{backgroundColor:'silver',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
              <View style={{backgroundColor:'pink',height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
               <Text style={{fontSize:14,textAlign:'center'}}>2</Text>
              </View>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:65, height: 65, borderRadius: 65 / 2}}
                  />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='add'
                        size={12}
                        color='gray'/>
                          
                </View>
             </View>

             <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
              <View style={{backgroundColor:'pink',height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
               <Text style={{fontSize:14,textAlign:'center'}}>3</Text>
              </View>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:65, height: 65, borderRadius: 65 / 2}}
                  />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='add'
                        size={12}
                        color='gray'/>
                          
                </View>
             </View>

             <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
              <View style={{backgroundColor:'pink',height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
               <Text style={{fontSize:14,textAlign:'center'}}>3</Text>
              </View>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:65, height: 65, borderRadius: 65 / 2}}
                  />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='add'
                        size={12}
                        color='gray'/>
                          
                </View>
             </View>

             <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
              <View style={{backgroundColor:'pink',height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
               <Text style={{fontSize:14,textAlign:'center'}}>3</Text>
              </View>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:65, height: 65, borderRadius: 65 / 2}}
                  />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='add'
                        size={12}
                        color='gray'/>
                          
                </View>
             </View>

             <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
              <View style={{backgroundColor:'pink',height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
               <Text style={{fontSize:14,textAlign:'center'}}>3</Text>
              </View>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:65, height: 65, borderRadius: 65 / 2}}
                  />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='add'
                        size={12}
                        color='gray'/>
                          
                </View>
             </View>

             <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
              <View style={{backgroundColor:'pink',height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
               <Text style={{fontSize:14,textAlign:'center'}}>3</Text>
              </View>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:65, height: 65, borderRadius: 65 / 2}}
                  />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='add'
                        size={12}
                        color='gray'/>
                          
                </View>
             </View>

             <View style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}>
              <View style={{backgroundColor:'pink',height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
               <Text style={{fontSize:14,textAlign:'center'}}>3</Text>
              </View>
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                  <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width:65, height: 65, borderRadius: 65 / 2}}
                  />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                  <Text style={{color:'gray',fontSize:14}}>姫</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                  <Icon
                        name='add'
                        size={12}
                        color='gray'/>
                          
                </View>
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
            <View style={{backgroundColor:'white',height:130,padding:10,flexDirection: 'row'}}>
            <Image
                source={require('./assets/instagram-clone-sample.png')}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: 110, height: 110, borderRadius: 110 / 2,marginRight:12 }}
              />
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
            <View style={{backgroundColor:'white',height:150,padding:10}}>
              <View style={{backgroundColor:'white',height:130}}>
                <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
                  <Text style={{fontWeight:'bold',fontSize:16,marginBottom:5}}>ゆうこす</Text>
                  <Text style={{color:'gray',marginBottom:3}}>インフルエンサー</Text>
                  <Text style={{marginBottom:5}}>ユーチューバー、ライバー、インフルエンサーです♪　ググってみてね❤️</Text>
                  <Text style={{marginBottom:5}}>https://google.com</Text>
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

const TabNavigator = createBottomTabNavigator(
  {
  Home: Timeline,
  Search: SearchScreen,
  Ranking: RankingScreen,
  Favorite: FavoriteScreen,
  Profiles: ProfilesScreen,
},);



export default createAppContainer(TabNavigator);

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
  }
  // image:{
  //   height: Dimensions.get('window').width, 
  //   width: Dimensions.get('window').height,
  //   resizeMode: 'stretch',
  // }
});