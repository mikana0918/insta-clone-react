import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';

class SendScreen extends React.Component {
  static navigationOptions = {
    header:null
}
    constructor(props){
      super(props);
      this.state={ 
          text:'' };
    }
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
          <Header
           leftComponent={<TouchableOpacity onPress={() => navigate('Message')}><Image source={require('./assets/left-arrow.png')} style={{ width:20, height: 20, tintColor:'white'}}/></TouchableOpacity>}
          centerComponent={{ text: '【相手のなまえ】', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
          rightComponent={{ icon: 'add', color: '#fff', }}
          containerStyle={{
            backgroundColor: 'pink',
            justifyContent: 'space-around',
          }}
        />
        <ScrollView style={{width:'100%', height:'80%',backgroundColor:'white'}}>
            {/* 相手 */}
            <TouchableOpacity 
                style={{backgroundColor:'white',height:70,flexDirection: 'row', }}>
                    <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1, padding:10}}>
                        <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width:40, height: 40, borderRadius: 40 / 2}}
                        />
                    </View>        
                    <View 
                        style={{backgroundColor:'white',width:'40%',paddingTop:15,paddingBottom:15,alignSelf:'flex-start',marginRight:'5%'}}>
                        <View style={{borderColor:'gray', borderWidth:2,borderRadius:20, alignSelf:'flex-start'}}>
                            <Text style ={{color:'gray',fontSize:14, margin:10,}}>あうあうああああああああああああああああああああああああああ</Text>
                        </View>
                    </View>
            </TouchableOpacity>

          {/* 自分 */}
            <View 
                style={{backgroundColor:'white',width:'40%',paddingTop:18,paddingBottom:15,alignSelf:'flex-end',marginRight:'5%'}}>
                  <View style={{borderColor:'gray', borderWidth:2,borderRadius:20, alignSelf:'flex-end', backgroundColor:'pink'}}><Text style ={{color:'gray',fontSize:14, margin:10,}}>あうあうああああああああああああああああああああああああああ</Text></View>
            </View>
          {/* 相手 */}
           <TouchableOpacity 
                style={{backgroundColor:'white',height:70,flexDirection: 'row', }}>
                    <View style={{backgroundColor:'white',height:'100%',aspectRatio: 1, padding:10}}>
                        <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width:40, height: 40, borderRadius: 40 / 2}}
                        />
                    </View>        
                    <View 
                        style={{backgroundColor:'white',width:'40%',paddingTop:15,paddingBottom:15,alignSelf:'flex-start',marginRight:'5%'}}>
                        <View style={{borderColor:'gray', borderWidth:2,borderRadius:20, alignSelf:'flex-start'}}>
                            <Text style ={{color:'gray',fontSize:14, margin:10,}}>あうあうああああああああああああああああああああああああああ</Text>
                        </View>
                    </View>
            </TouchableOpacity>


          {/* 自分 */}
          <View 
                style={{backgroundColor:'white',width:'40%%',paddingTop:18,paddingBottom:15,alignSelf:'flex-end',marginRight:'5%'}}>
                  <View style={{borderColor:'gray', borderWidth:2,borderRadius:20, alignSelf:'flex-end', backgroundColor:'pink'}}><Text style ={{color:'gray',fontSize:14, margin:10,}}>あうあうああああああああああああああああああああああああああ</Text></View>
            </View>


        </ScrollView>

        <View style={{width:'100%', height:'10%',backgroundColor:'white', flexDirection:'row',padding:10}}>
            <View style={{backgroundColor:'white', width:'100%',height:'80%', flexDirection:'row'}}>
                <View style={{backgroundColor:'white', width:'20%',height:'100%'}}>
                <Icon
                            name='camera'
                            size={40}
                            color='pink'/>
                </View>
                <View style={{width:'80%',height:'90%', flexDirection:'row',borderRadius:30,borderColor:'gray',borderWidth:2}}>
                    <TouchableOpacity>
                    <Input
                        placeholder='メッセージを入力'
                        rightIcon={
                            <Icon
                            name='send'
                            size={20}
                            color='gray'/>
                            }
                        value={this.state.text}
                        onChangeText={(text) => this.setState({text})}
                    /> 
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
  
export default SendScreen;