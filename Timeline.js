import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight, Animated } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Story from './Story';
import { LinearGradient } from 'expo-linear-gradient';





// import App from './App';


class Timeline extends React.Component {
  static navigationOptions = ({ navigate }) => 
  ({
    header: null
    })

  constructor(props) 
  {
    super(props);
    this.state = {    
        modalVisible: false,
        currentIndex: 0,
        activeSlide: 0,
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
        ],
      }
  }

  _renderItem ({item, index}) 
  {
    return (
      <View style={styles.slide}>  
        <Image
        source={ item.story}
        style={{ width: '100%', height: '100%'}}/>
          <Text style={styles.title}>{ item.title }</Text>
      </View>
    );
  }

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

      //TODO 背景をキラキラさせたい。
      <LinearGradient
      colors={['#ddd6f3', '#faaca8']}
      style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>

        <View>
    
      <View style ={{marginTop:20,}}>

        <View style={{height:Dimensions.get('window').width*0.27, borderRadius:20, }}> 
             <ScrollView 
              horizontal={true} 
              style={{marginTop: 5}}
              showsVerticalScrollIndicator={false}>
                {/* <ImageBackground source={require('./assets/giphy.gif')}>                </ImageBackground> */}

                <TouchableOpacity 
                  style = {{height:'100%',padding:5,marginRight:4, shadowColor: 'pink', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}
                  onPress={() => {this.setModalVisible(true);}}>            
                      <ImageBackground  style={{ width:72, height: 72, borderRadius: 72 / 2, borderColor:'white',borderWidth:3,padding:3, shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2 }}>
                        <Image
                          source={require('./assets/instagram-clone-sample.png')}
                          style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                      </ImageBackground>
                      <Text style={{color:'white',fontSize:10,textAlign:'center', fontWeight:'bold'}}>Face Here</Text> 
                </TouchableOpacity>

                <TouchableOpacity 
                  style = {{height:'100%',padding:5,marginRight:4, shadowColor: 'pink', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}
                  onPress={() => {this.setModalVisible(true);}}>            
                      <ImageBackground  style={{ width:72, height: 72, borderRadius: 72 / 2, borderColor:'white',borderWidth:3,padding:3, shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2 }}>
                        <Image
                          source={require('./assets/instagram-clone-sample.png')}
                          style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                      </ImageBackground>
                      <Text style={{color:'white',fontSize:10,textAlign:'center', fontWeight:'bold'}}>Face Here</Text> 
                </TouchableOpacity>
                <TouchableOpacity 
                  style = {{height:'100%',padding:5,marginRight:4, shadowColor: 'pink', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}
                  onPress={() => {this.setModalVisible(true);}}>            
                      <ImageBackground  style={{ width:72, height: 72, borderRadius: 72 / 2, borderColor:'white',borderWidth:3,padding:3, shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2 }}>
                        <Image
                          source={require('./assets/instagram-clone-sample.png')}
                          style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                      </ImageBackground>
                      <Text style={{color:'white',fontSize:10,textAlign:'center', fontWeight:'bold'}}>Face Here</Text> 
                </TouchableOpacity>
                <TouchableOpacity 
                  style = {{height:'100%',padding:5,marginRight:4, shadowColor: 'pink', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}
                  onPress={() => {this.setModalVisible(true);}}>            
                      <ImageBackground  style={{ width:72, height: 72, borderRadius: 72 / 2, borderColor:'white',borderWidth:3,padding:3, shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2 }}>
                        <Image
                          source={require('./assets/instagram-clone-sample.png')}
                          style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                      </ImageBackground>
                      <Text style={{color:'white',fontSize:10,textAlign:'center', fontWeight:'bold'}}>Face Here</Text> 
                </TouchableOpacity>
                <TouchableOpacity 
                  style = {{height:'100%',padding:5,marginRight:4, shadowColor: 'pink', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}
                  onPress={() => {this.setModalVisible(true);}}>            
                      <ImageBackground  style={{ width:72, height: 72, borderRadius: 72 / 2, borderColor:'white',borderWidth:3,padding:3, shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2 }}>
                        <Image
                          source={require('./assets/instagram-clone-sample.png')}
                          style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                      </ImageBackground>
                      <Text style={{color:'white',fontSize:10,textAlign:'center', fontWeight:'bold'}}>Face Here</Text> 
                </TouchableOpacity>
              </ScrollView>
          </View>
        
        {/* //headerのしたのぶらさがりが下レイヤーになって重なりあったら楽しい */}
       <View style={{backgroundColor:'transparent'}}>
    
         <ScrollView>
           {/* PARENT? */}
        
          <View style={{backgroundColor:'white', width:'90%',height:460,borderRadius:20, margin:'5%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
              <View style={{height:50, justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigate('Profiles')}
                  style={{backgroundColor:'white',marginLeft:10,marginTop:4,marginRight:10,height:'80%',flexDirection: 'row'}}>
                    {/* TODO　顔写真と名前を中央寄せにしたい */}
                    <Image source={require('./assets/instagram-clone-sample.png')} style={{ width: 30, height: 30, borderRadius: 30 / 2, marginLeft:5,marginTop:5}}/>
                    <Text style={{fontSize:14,marginLeft:12,marginTop:12,fontWeight:'bold', color:'gray'}}>ゆうこす</Text>               
                </TouchableOpacity>
              </View>    
              <View style={{width:'100%',height:300, paddingLeft:'3%', paddingRight:'3%'}}>
                <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.stories}
                        renderItem={this._renderItem}
                        sliderWidth={'100%'}
                        itemWidth={400}
                        firstItem={0}
                        layout={'stack'}
                        layoutCardOffset={9}
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }>          
                </Carousel>
                { this.pagination }
              </View>
              <View style={{marginTop:10,  width: '100%', height: '10%', backgroundColor:'white',flexDirection: 'row',padding:10,  justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity>
                  <Image source={require('./assets/heart-shape.png')} style={{ width: 30, height: 30,marginRight:16,marginLeft:8}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/speech-bubble.png')} style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/mail.png')} style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/share1.png')} style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{marginTop:10, backgroundColor:'white',   justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>100 いいね！ 1200 kawaii</Text> 
              </TouchableOpacity>     
          </View>

          

          
          <View style={{backgroundColor:'white', width:'90%',height:460,borderRadius:20, margin:'5%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
              <View style={{height:50, justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigate('Profiles')}
                  style={{backgroundColor:'white',marginLeft:10,marginTop:4,marginRight:10,height:'80%',flexDirection: 'row'}}>
                    {/* TODO　顔写真と名前を中央寄せにしたい */}
                    <Image source={require('./assets/instagram-clone-sample.png')} style={{ width: 30, height: 30, borderRadius: 30 / 2, marginLeft:5,marginTop:5}}/>
                    <Text style={{fontSize:14,marginLeft:12,marginTop:12,fontWeight:'bold', color:'gray'}}>ゆうこす</Text>               
                </TouchableOpacity>
              </View>    
              <View style={{width:'100%',height:300, paddingLeft:'3%', paddingRight:'3%'}}>
                <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.stories}
                        renderItem={this._renderItem}
                        sliderWidth={'100%'}
                        itemWidth={400}
                        firstItem={0}
                        layout={'stack'}
                        layoutCardOffset={9}
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }>          
                </Carousel>
                { this.pagination }
              </View>
              <View style={{marginTop:10,  width: '100%', height: '10%', backgroundColor:'white',flexDirection: 'row',padding:10,  justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity>
                  <Image source={require('./assets/heart-shape.png')} style={{ width: 30, height: 30,marginRight:16,marginLeft:8}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/speech-bubble.png')} style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/mail.png')} style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/share1.png')} style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{marginTop:10, backgroundColor:'white',   justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>100 いいね！ 1200 kawaii</Text> 
              </TouchableOpacity>

          </View>

          <View style={{backgroundColor:'white', width:'90%',height:460,borderRadius:20, margin:'5%', shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2}}>
              <View style={{height:50, justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigate('Profiles')}
                  style={{backgroundColor:'white',marginLeft:10,marginTop:4,marginRight:10,height:'80%',flexDirection: 'row'}}>
                    {/* TODO　顔写真と名前を中央寄せにしたい */}
                    <Image source={require('./assets/instagram-clone-sample.png')} style={{ width: 30, height: 30, borderRadius: 30 / 2, marginLeft:5,marginTop:5}}/>
                    <Text style={{fontSize:14,marginLeft:12,marginTop:12,fontWeight:'bold', color:'gray'}}>ゆうこす</Text>               
                </TouchableOpacity>
              </View>    
              <View style={{width:'100%',height:300, paddingLeft:'3%', paddingRight:'3%'}}>
                <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.stories}
                        renderItem={this._renderItem}
                        sliderWidth={'100%'}
                        itemWidth={400}
                        firstItem={0}
                        layout={'stack'}
                        layoutCardOffset={9}
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }>          
                </Carousel>
                { this.pagination }
              </View>
              <View style={{marginTop:10,  width: '100%', height: '10%', backgroundColor:'white',flexDirection: 'row',padding:10,  justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity>
                  <Image source={require('./assets/heart-shape.png')} style={{ width: 30, height: 30,marginRight:16,marginLeft:8}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/speech-bubble.png')} style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/mail.png')} style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('./assets/share1.png')} style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{marginTop:10, backgroundColor:'white',   justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>100 いいね！ 1200 kawaii</Text> 
              </TouchableOpacity>

          </View>




        </ScrollView>
        
      </View>

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
    // shadowColor: '#000',
    shadowColor: 'pink',
    shadowOffset: { width: 4, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
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