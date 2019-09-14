import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';


class Notification extends React.Component {
  static navigationOptions = {
    header:null
}
    constructor(props){
      super();
      this.state = {
        index: 0,
        nav: 'default',   
      };  
    }
    render() {
      const {navigate} = this.props.navigation;
      this.searchContents = {
        default : <NotificationDefault/>,
        activity : <NotificationActivity/>,
        message  : <NotificationMessage/>,
      };

      this.navDefault = {width:'25%',height:'100%',padding:'3%'};
      this.navSelect = {backgroundColor:'white',width:'25%',height:'100%',padding:'3%',borderTopRightRadius:20, borderTopLeftRadius:20};
  
      this.navDefaultText = {color:'white',fontSize:14,textAlign:'center', fontWeight:'bold'};
      this.navSelectText = {color:'gray',fontSize:14,textAlign:'center'};
 
      return (
        <View>
          <Header
          centerComponent={{ text: 'お知らせ', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
          rightComponent={{ icon: 'settings', color: '#fff', }}
          containerStyle={{
            backgroundColor: 'pink',
            justifyContent: 'space-around',
          }}
        />

         {/* //4Top Nav Tabs */}
          <View style={{backgroundColor:'pink',width:'100%',height:45,flexDirection:'row', borderBottomLeftRadius:20, borderBottomRightRadius:20, alignContent:'center'}}>
          <TouchableOpacity 
              key = {0}
              style={this.state.nav == 'default' ? this.navSelect : this.navDefault} 
              onPress={() =>  {this.setState({nav: 'default'})}}>
              <Text style={this.state.nav == 'default' ? this.navSelectText : this.navDefaultText}>#通知</Text>  
            </TouchableOpacity>
            <TouchableOpacity 
              key = {1}
              style={this.state.nav == 'activity' ? this.navSelect : this.navDefault} 
              onPress={() =>  {this.setState({nav: 'activity'})}}>
              <Text style={this.state.nav == 'activity' ? this.navSelectText : this.navDefaultText}>#アクティビティ</Text>  
            </TouchableOpacity>
            <TouchableOpacity 
              key = {2}
              style={this.state.nav == 'message' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'message'})}}>
              <Text style={this.state.nav == 'message' ? this.navSelectText : this.navDefaultText}>#メッセージ</Text>
            </TouchableOpacity>
          </View>
         
          


          <ScrollView style={{backgroundColor:'white',width:'100%', height:'100%',paddingLeft:'3%',paddingRight:'3%',marginTop:5}}>
          {this.searchContents[this.state.nav]}
          </ScrollView>
        
        </View>
      )
    }
  }


  class NotificationDefault extends React.Component{
    render(){
      return (
        <View>
                     <TouchableOpacity 
              style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}
//メッセージの繋ぎこみが一方通行
              onPress={() => this.props.navigation.navigate('Send')}
              >
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                <Image
                  source={require('./assets/number-sample3.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:65, height: 65, borderRadius: 65 / 2}}
                />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>厄介オタクさんからメッセージが届いています</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:20,paddingBottom:20}}>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}
//Todo         onPress={() => this.props.navigation.navigate('Myposts')}
              >
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                <Image
                  source={require('./assets/instagram-clone-sample.png')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:65, height: 65, borderRadius: 65 / 2}}
                />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>姫の取り巻き</Text>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>さんがあなたの投稿にいいねしました。</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:20,paddingBottom:20}}>                         
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
              style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}
//Todo              onPress={() => this.props.navigation.navigate('Users')}
              >
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                <Image
                  source={require('./assets/insta-maid1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:65, height: 65, borderRadius: 65 / 2}}
                />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>チキン南蛮佐藤</Text>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>さんにフォローされました。</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:20,paddingBottom:20}}>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              style={{backgroundColor:'white',width:'100%',height:80,marginBottom:5,flexDirection: 'row',padding:5}}
//Todo              onPress={() => this.props.navigation.navigate('Users')}
              >
                <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1,padding:2}}>
                <Image
                  source={require('./assets/insta-loli1.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:65, height: 65, borderRadius: 65 / 2}}
                />
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}></Text>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>さんにフォローされました。</Text>
                </View>
                <View style={{backgroundColor:'white',height:'100%',width:'10%',paddingTop:20,paddingBottom:20}}>
                </View>
              </TouchableOpacity>
        </View>
      );
    }
  }

  class NotificationActivity extends React.Component{
    render(){
      return (
        <View>
         <Text>activity</Text>
        </View>
      );
    }
  }

  class NotificationMessage extends React.Component{
    render(){
      return (
        <View>
         <Text>message</Text>
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
   
  }
  );
  
export default Notification;
