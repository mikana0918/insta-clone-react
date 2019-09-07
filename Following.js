import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';

class MessageScreen extends React.Component {
  static navigationOptions = {
    header:null
}
    constructor(props){
      super();
    }
    render() {
      const {navigate} = this.props.navigation;
    //   console.warn(this.constructor.name);  
      return (
        <View>
          <Header
          leftComponent={<TouchableOpacity onPress={() => navigate('Profile')}><Image source={require('./assets/left-arrow.png')} style={{ width:20, height: 20, tintColor:'white'}}/></TouchableOpacity>}
          centerComponent={{ text: 'フォロー', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
          rightComponent={{ icon: 'add', color: '#fff', }}
          containerStyle={{
            backgroundColor: 'pink',
            justifyContent: 'space-around',
          }}
        />
         <ScrollView style={{backgroundColor:'white',width:'100%',paddingLeft:'3%',paddingRight:'3%',marginTop:5}}>
              <TouchableOpacity 
              style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}
              onPress={() => this.props.navigation.navigate('Send')} >
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
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:20,paddingBottom:20}}>
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
              style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}
              onPress={() => this.props.navigation.navigate('Send')} >
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
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:20,paddingBottom:20}}>                         
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
              style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}
              onPress={() => this.props.navigation.navigate('Send')} >
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
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:20,paddingBottom:20}}>
                </View>
              </TouchableOpacity>           
            </ScrollView>
        
        </View>
      )
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
   
  }
  );
  
export default MessageScreen;