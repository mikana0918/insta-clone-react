import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";


class Story extends React.Component 
{
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

    render(){
        return (
        <View>
        <Modal animationType="fade" transparent={true} visible={this.state.modalVisible} RequestClose={() => {Alert.alert('Modal has been closed.');}}>
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
              <Icon name='more' size={12} color='white'/>
                <TouchableOpacity onPress ={() => this.setState({modalVisible:false})} style = {{width:'100%', alignContent:'right', alignItems:'right' ,flexDirection:'row'}}>
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

        <View style={{height:120,backgroundColor:'white'}}>
           <Text style= {{marginLeft:10, marginTop:10,fontSize:12,width:'50%'}}>Stories</Text>  
             <ScrollView horizontal={true} style={{ backgroundColor:'white',margin:5}}>
              <TouchableOpacity 
              style = {{height:'90%',backgroundColor:'white',padding:5,marginRight:7}}
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

              <TouchableOpacity 
              style = {{height:'90%',backgroundColor:'white',padding:5,marginRight:7}}
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

              <TouchableOpacity 
              style = {{height:'90%',backgroundColor:'white',padding:5,marginRight:7}}
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