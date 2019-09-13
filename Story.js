import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar,Modal, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, NavigationEvents } from "react-navigation";



class Story extends React.Component 
{
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
      ]
    };   
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
    
      closeModal = () => {
        this.setState({ modalVisible: false});
      }
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }  

      //impl pagenation
      get pagination () 
      {
        const { stories, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={stories.length}
              activeDotIndex={this.state.activeSlide}
              containerStyle={{alignSelf:'center',backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={
                {
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  // marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }
            }
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
      }


    render(){
      // const {navigate} = this.props.navigation;
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
            </View>     
            <View style={{alignContent:'right', alignItems:'right',height:'90%',width:'100%',borderRadius:10}}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.stories}
                    renderItem={this._renderItem}
                    sliderWidth={400}
                    itemWidth={400}
                    firstItem={0}
                    layout={'stack'}
                    layoutCardOffset={9}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }>     
                </Carousel>
                { this.pagination }
            </View>       
        </View>
        </Modal>

        
        <View style={{height:Dimensions.get('window').width*0.27 ,backgroundColor:'white'}}> 
           {/* <Text style= {{marginLeft:10, marginTop:5,fontSize:12,width:'50%'}}>Stories</Text>   */}
             <ScrollView 
              horizontal={true} 
              style={{ backgroundColor:'white',marginLeft:5, marginRight:4, marginTop: 5}}
              showsHorizontalScrollIndicator={false}>

              <TouchableOpacity 
                style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:4}}
                onPress={() => {this.setModalVisible(true);}}>
                    <ImageBackground  style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                      <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                    </ImageBackground>
                    <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
              </TouchableOpacity>

             

            
              <TouchableOpacity 
                style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:4}}
                onPress={() => {this.setModalVisible(true);}}>
                    <ImageBackground  style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                      <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                    </ImageBackground>
                    <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
              </TouchableOpacity>


              <TouchableOpacity 
                style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:4}}
                onPress={() => {this.setModalVisible(true);}}>
                    <ImageBackground  style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                      <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                    </ImageBackground>
                    <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
              </TouchableOpacity>


              <TouchableOpacity 
                style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:4}}
                onPress={() => {this.setModalVisible(true);}}>
                    <ImageBackground  style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                      <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                    </ImageBackground>
                    <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
              </TouchableOpacity>



              <TouchableOpacity 
                style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:4}}
                onPress={() => {this.setModalVisible(true);}}>
                    <ImageBackground  style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                      <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                    </ImageBackground>
                    <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
              </TouchableOpacity>



              <TouchableOpacity 
                style = {{height:'100%',backgroundColor:'white',padding:5,marginRight:4}}
                onPress={() => {this.setModalVisible(true);}}>
                    <ImageBackground  style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                      <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                    </ImageBackground>
                    <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
              </TouchableOpacity>


          </ScrollView>
          </View>
        </View>
       );}
}

const styles = StyleSheet.create({
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
  storyEnd:{
    width:100,
    height:100,
    backgroundColor:"gray"
  }
});

export default Story;