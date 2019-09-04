import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, NavigationEvents } from "react-navigation";
import Modal from './StoryModal';


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
      // const {navigate} = this.props.navigation;
        return (
        <View>
        <Modal></Modal>
        <View style={{height:120,backgroundColor:'white'}}>
           <Text style= {{marginLeft:10, marginTop:10,fontSize:12,width:'50%'}}>Stories</Text>  
             <ScrollView horizontal={true} style={{ backgroundColor:'white',margin:5}}>
              <TouchableOpacity 
                style = {{height:'90%',backgroundColor:'white',padding:5,marginRight:7}}
                onPress={() => {this.setModalVisible(true);}}>
                      <ImageBackground
                         style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                      <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                  </ImageBackground>
                  <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
              </TouchableOpacity>

              <TouchableOpacity 
                style = {{height:'90%',backgroundColor:'white',padding:5,marginRight:7}}
                onPress={() => {this.setModalVisible(true);}}>
                    <ImageBackground style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                      <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width: 60, height: 60, borderRadius: 60 / 2}}/>
                  </ImageBackground>
                  <Text style={{color:'black',fontSize:10,textAlign:'center'}}>Face Here</Text> 
              </TouchableOpacity>

              <TouchableOpacity 
                style = {{height:'90%',backgroundColor:'white',padding:5,marginRight:7}}
                onPress={() => {this.setModalVisible(true);}}>
                    <ImageBackground  style={{ width:70, height: 70, borderRadius: 70 / 2, borderColor:'pink',borderWidth:3,padding:3 }}>
                      <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        //borderRadius style will help us make the Round Shape Image
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