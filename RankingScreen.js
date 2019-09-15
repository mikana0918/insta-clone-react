import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

class RankingScreen extends React.Component {
  // TODO タブメニューの実装
  static navigationOptions = ({ navigate }) => ({
    header: null
    })
  constructor(props){
    super();
    this.state = {
      nav: 'default',   
    };   
  }
  render() {
    this.searchContents = {
      default : <RankingDefault/>,
      daily : <RankingDaily/>,
      weekly : <RankingWeekly/>,
      monthly : <RankingMonthly/>
    };

    this.navDefault = {width:'25%',height:'100%',padding:'3%'};
    this.navSelect = {backgroundColor:'rgba(0,0,0,0.1)',width:'25%',height:'100%',padding:'3%', borderRadius:20};

    this.navDefaultText = {color:'white',fontSize:14,textAlign:'center', fontWeight:'bold'};
    this.navSelectText = {color:'white',fontSize:14,textAlign:'center'};

    return (
      <View> 

          {/* //4Top Nav Tabs */}
          <View style={{width:'100%',height:40,flexDirection:'row', borderRadius:20, paddingLeft:'5%', paddingRight:'5%', backgroundColor:'gray'}}>
            <TouchableOpacity 
              key = {0}
              style={this.state.nav == 'default' ? this.navSelect : this.navDefault} 
              onPress={() =>  {this.setState({nav: 'default'})}}>
              <Text style={this.state.nav == 'default' ? this.navSelectText : this.navDefaultText}>All</Text>  
            </TouchableOpacity>
            <TouchableOpacity 
              key = {1}
              style={this.state.nav == 'daily' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'daily'})}}>
              <Text style={this.state.nav == 'daily' ? this.navSelectText : this.navDefaultText}>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              key = {2}
              style={this.state.nav == 'weekly' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'weekly'})}}>
                <Text style={this.state.nav == 'weekly' ? this.navSelectText : this.navDefaultText}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              key = {3}
              style={this.state.nav == 'monthly' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'monthly'})}}>
                <Text style={this.state.nav == 'monthly' ? this.navSelectText : this.navDefaultText}>Monthly</Text>
            </TouchableOpacity>
          </View>

          {this.searchContents[this.state.nav]}
        
     
      </View>
    );
  }
  }

  class RankingDefault extends React.Component{
    render(){
      return(
        <View style={{ alignItems: 'center',justifyContent: 'center', width:'100%', height:'100%'}}>
   
          <ScrollView style={{width:'100%'}}>
          <TouchableOpacity 
              style={{backgroundColor:'rgba(0,0,0,0.1)', width:'100%', height:80, marginBottom:5, flexDirection: 'row', padding:5, borderRadius:20}}
              //メッセージの繋ぎこみが一方通行
              onPress={() => this.props.navigation.navigate('Send')}>
                <View style={{height:'100%',aspectRatio: 1, padding:2,}}>
                  <Image
                    source={require('./assets/number-sample3.jpg')}
                    style={{ width:65, height: 65, borderRadius: 65 / 2}}/>
                </View>
                <View style={{height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                    <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>厄介オタクさんからメッセージが届いています</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
              style={{backgroundColor:'rgba(0,0,0,0.1)', width:'100%', height:80, marginBottom:5, flexDirection: 'row', padding:5, borderRadius:20}}
              //Todo onPress={() => this.props.navigation.navigate('Myposts')}
>
                <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                <Image source={require('./assets/instagram-clone-sample.png')} style={{ width:65, height: 65, borderRadius: 65 / 2}}/>
                </View>
                <View style={{height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>姫の取り巻き</Text>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>さんがあなたの投稿にいいねしました。</Text>
                </View>
                <View style={{height:'100%',width:'10%',paddingTop:20,paddingBottom:20}}>                         
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
               style={{backgroundColor:'rgba(0,0,0,0.1)', width:'100%', height:80, marginBottom:5, flexDirection: 'row', padding:5, borderRadius:20}}
//Todo              onPress={() => this.props.navigation.navigate('Users')}
              >
                <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                <Image
                  source={require('./assets/insta-maid1.jpg')}
                  style={{ width:65, height: 65, borderRadius: 65 / 2}}
                />
                </View>
                <View style={{height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>チキン南蛮佐藤</Text>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>さんにフォローされました。</Text>
                </View>
                <View style={{height:'100%',width:'10%',paddingTop:20,paddingBottom:20}}>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
               style={{backgroundColor:'rgba(0,0,0,0.1)', width:'100%', height:80, marginBottom:5, flexDirection: 'row', padding:5, borderRadius:20}}
//Todo              onPress={() => this.props.navigation.navigate('Users')}
              >
                <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                <Image
                  source={require('./assets/insta-loli1.jpg')}
                  style={{ width:65, height: 65, borderRadius: 65 / 2}}
                />
                </View>
                <View style={{height:'100%',width:'68%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}></Text>
                  <Text style={{color:'black',fontWeight:'bold',fontSize:14}}>さんにフォローされました。</Text>
                </View>
                <View style={{height:'100%',width:'10%',paddingTop:20,paddingBottom:20}}>
                </View>
              </TouchableOpacity>
          </ScrollView>
        </View>
      );
    }
  }


  class RankingDaily extends React.Component{
    render(){
      return(
        <View style={{ alignItems: 'center',justifyContent: 'center', width:'100%', height:'80%'}}>
          <Text style ={{fontSize: 16, fontWeight:'bold', color:'gray'}}>Daiy</Text>
        </View>
      );
    }
  }

  class RankingWeekly extends React.Component{
    render(){
      return(
        <View style={{ alignItems: 'center',justifyContent: 'center', width:'100%', height:'80%'}}>
          <Text style ={{fontSize: 16, fontWeight:'bold', color:'gray'}}>weekly</Text>
        </View>
      );
    }
  }

  class RankingMonthly extends React.Component{
    render(){
      return(
        <View style={{ alignItems: 'center',justifyContent: 'center', width:'100%', height:'80%'}}>
          <Text style ={{fontSize: 16, fontWeight:'bold', color:'gray'}}>monthly</Text>
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
  
  export default RankingScreen;