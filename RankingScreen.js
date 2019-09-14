import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';


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

    this.navDefault = {backgroundColor:'white',width:'25%',height:'100%',padding:'3%'};
    this.navSelect = {backgroundColor:'white',width:'25%',height:'100%',padding:'3%',borderBottomColor:'pink',borderBottomWidth:3};

    return (

      <View>

          {/* //4Top Nav Tabs */}
          <View style={{backgroundColor:'white',width:'100%',height:45,flexDirection:'row'}}>
            <TouchableOpacity 
              key = {0}
              style={this.state.nav == 'default' ? this.navSelect : this.navDefault} 
              onPress={() =>  {this.setState({nav: 'default'})}}>
              <Text style={{color:'gray',fontSize:14,textAlign:'center',textAlignVertical:'bottom'}}>All</Text>  
            </TouchableOpacity>
            <TouchableOpacity 
              key = {1}
              style={this.state.nav == 'daily' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'daily'})}}>
              <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              key = {2}
              style={this.state.nav == 'weekly' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'weekly'})}}>
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              key = {3}
              style={this.state.nav == 'monthly' ? this.navSelect : this.navDefault}
              onPress={() =>  {this.setState({nav: 'monthly'})}}>
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>Monthly</Text>
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
   
           <ScrollView style={{backgroundColor:'white',width:'100%', borderRadius:20}}>

              <TouchableOpacity style={{width:'100%',height:80,flexDirection: 'row', marginBottom:5, marginTop:1}}>
                <ImageBackground
                  source={require('./assets/instagram-clone-sample.png')}
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row', }}
                  resizeMode='cover'
                  blurRadius={4}>
                      <TouchableOpacity style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25, backgroundColor:'pink', opacity:1.0}}>
                        <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold', color:'gray'}}>1</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{height:'100%',aspectRatio: 1,padding:8 }}>
                        <Image source={require('./assets/instagram-clone-sample.png')} style={{ width:65, height: 65, borderRadius: 65 / 2,alignSelf:'center'}} />
                      </TouchableOpacity>
                      <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                        <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:14}}>姫</Text>
                      </View>
                      <TouchableOpacity style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30, backgroundColor:'white'}}>
                        <Icon name='add' size={12} color='gray'/>                          
                      </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={{width:'100%',height:80,flexDirection: 'row', marginBottom:5, marginTop:1}}>
                <ImageBackground
                  source={require('./assets/instagram-clone-sample.png')}
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={4}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25, backgroundColor:'pink', opacity:1.0}}>
                        <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold', color:'gray'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:8 }}>
                        <Image source={require('./assets/instagram-clone-sample.png')} style={{ width:65, height: 65, borderRadius: 65 / 2,alignSelf:'center'}} />
                      </View>
                      <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                        <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                        <Text style={{color:'white',fontSize:14}}>姫</Text>
                      </View>
                      <TouchableOpacity style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30, backgroundColor:'white'}}>
                        <Icon name='add' size={12} color='gray'/>                          
                      </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={{width:'100%',height:80,flexDirection: 'row', marginBottom:5, marginTop:1}}>
                <ImageBackground
                  source={require('./assets/instagram-clone-sample.png')}
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={4}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25, backgroundColor:'pink', opacity:1.0}}>
                        <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold', color:'gray'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:8 }}>
                        <Image source={require('./assets/instagram-clone-sample.png')} style={{ width:65, height: 65, borderRadius: 65 / 2,alignSelf:'center'}} />
                      </View>
                      <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                        <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                        <Text style={{color:'white',fontSize:14}}>姫</Text>
                      </View>
                      <TouchableOpacity style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30, backgroundColor:'white'}}>
                        <Icon name='add' size={12} color='gray'/>                          
                      </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={{width:'100%',height:80,flexDirection: 'row', marginBottom:5, marginTop:1}}>
                <ImageBackground
                  source={require('./assets/meidodesu_TP_V.jpg')}
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={4}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25, backgroundColor:'pink', opacity:1.0}}>
                        <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold', color:'gray'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:8 }}>
                        <Image source={require('./assets/meidodesu_TP_V.jpg')} style={{ width:65, height: 65, borderRadius: 65 / 2,alignSelf:'center'}} />
                      </View>
                      <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                        <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                        <Text style={{color:'white',fontSize:14}}>姫</Text>
                      </View>
                      <TouchableOpacity style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30, backgroundColor:'white'}}>
                        <Icon name='add' size={12} color='gray'/>                          
                      </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={{width:'100%',height:80,flexDirection: 'row', marginBottom:5, marginTop:1}}>
                <ImageBackground
                  source={require('./assets/insta-loli1.jpg')}
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={4}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25, backgroundColor:'pink', opacity:1.0}}>
                        <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold', color:'gray'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:8 }}>
                        <Image source={require('./assets/insta-loli1.jpg')} style={{ width:65, height: 65, borderRadius: 65 / 2,alignSelf:'center'}} />
                      </View>
                      <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                        <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                        <Text style={{color:'white',fontSize:14}}>姫</Text>
                      </View>
                      <TouchableOpacity style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30, backgroundColor:'white'}}>
                        <Icon name='add' size={12} color='gray'/>                          
                      </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={{width:'100%',height:80,flexDirection: 'row', marginBottom:5, marginTop:1}}>
                <ImageBackground
                  source={require('./assets/insta-ex1.jpg')}
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={4}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25, backgroundColor:'pink', opacity:1.0}}>
                        <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold', color:'gray'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:8 }}>
                        <Image source={require('./assets/insta-ex1.jpg')} style={{ width:65, height: 65, borderRadius: 65 / 2,alignSelf:'center'}} />
                      </View>
                      <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                        <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                        <Text style={{color:'white',fontSize:14}}>姫</Text>
                      </View>
                      <TouchableOpacity style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30, backgroundColor:'white'}}>
                        <Icon name='add' size={12} color='gray'/>                          
                      </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={{width:'100%',height:80,flexDirection: 'row', marginBottom:5, marginTop:1}}>
                <ImageBackground
                  source={require('./assets/splash.png')}
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={4}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25, backgroundColor:'pink', opacity:1.0}}>
                        <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold', color:'gray'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:8 }}>
                        <Image source={require('./assets/splash.png')} style={{ width:65, height: 65, borderRadius: 65 / 2,alignSelf:'center'}} />
                      </View>
                      <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                        <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                        <Text style={{color:'white',fontSize:14}}>姫</Text>
                      </View>
                      <TouchableOpacity style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30, backgroundColor:'white'}}>
                        <Icon name='add' size={12} color='gray'/>                          
                      </TouchableOpacity>
                </ImageBackground>
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