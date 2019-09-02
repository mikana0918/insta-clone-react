import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Story from './Story';


class Timeline extends React.Component {

  state = {
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

  closehModal = () => {
    this.setState({ modalVisible: false});
  }

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
            rightComponent={{ icon: 'send', color: '#fff',  onPress:() => navigate('Message')}}
            containerStyle={{
              backgroundColor: 'pink',
              justifyContent: 'space-around',
            }}
          />
        <Story/>
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
                  <TouchableOpacity
                    onPress={() => navigate('Profile')}
                    style = {{width:'100%', alignContent:'right', alignItems:'right' ,flexDirection:'row'}}>
                        <Icon
                        name='close'
                        size={30}
                        color='white'
                        />
                  </TouchableOpacity> 
                </View>

              </View>
              <View style={{height:'25%',width:'100%',padding:3,flexDirection:'row',marginLeft:'3%',marginRight:'3%'}}>
                <View style={{backgroundColor:'white',height:'30%',width:'48%',marginLeft:5,borderRadius:20}}></View>
                <View style={{backgroundColor:'gray',height:'30%',width:'48%',marginLeft:5,borderRadius:20}}></View>
                <View style={{backgroundColor:'gray',height:'30%',width:'48%',marginLeft:5,borderRadius:20}}></View>
              </View>
            </View>
          
            <View style={{
              alignContent:'right', alignItems:'right',
              height:'90%',width:'100%',borderRadius:10}}>

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

        <ScrollView style={{height:'75%'}}>
        <View style={{ height:600,backgroundColor:'white'}}>
          <View style={{height:50}}>
            <TouchableOpacity
            onPress={() => navigate('Profiles')}
            style={{backgroundColor:'white',marginLeft:10,marginTop:4,marginRight:10,height:'80%',flexDirection: 'row'}}>
              <Image
                    source={require('./assets/instagram-clone-sample.png')}
                    //borderRadius style will help us make the Round Shape Image
                    style={{ width: 30, height: 30, borderRadius: 30 / 2, marginLeft:5,marginTop:5}}
                  />
                <Text style={{fontSize:14,marginLeft:12,marginTop:12,fontWeight:'bold'}}>ゆうこす</Text>               
             </TouchableOpacity>
          </View>
          <Image
                source={require('./assets/insta-ex1.jpg')}
                style={{ width: '100%', height: '70%', resizeMode: 'cover',}}
          />
          <View style={{ width: '100%', height: '10%', backgroundColor:'white',flexDirection: 'row',padding:10}}>
          <TouchableOpacity>
          <Image
                source={require('./assets/heart-shape.png')}
                style={{ width: 30, height: 30,marginRight:16,marginLeft:8}}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
                source={require('./assets/speech-bubble.png')}
                style={{ width: 30, height: 30,marginRight:16}}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
                source={require('./assets/mail.png')}
                style={{ width: 30, height: 30,marginRight:16}}/>
          </TouchableOpacity>
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

export default Timeline;