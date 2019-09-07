import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';


class RankingScreen extends React.Component {

  // TODO 検索ページへ移動
  static navigationOptions = ({ navigate }) => ({
    header: null
    })
  constructor(props){
    super();
  }
    render() {
      return (
        <View>
           <Header
              leftComponent={{ icon: 'camera', color: '#fff' }}
              centerComponent={{ text: 'じょそすたぐらむ', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
              rightComponent={{ icon: 'send', color: '#fff' }}
              containerStyle={{
                backgroundColor: 'pink',
                justifyContent: 'space-around',
              }}
            />
            {/* //4Top Nav Tabs */}
            <View style={{backgroundColor:'white',width:'100%',height:45,flexDirection:'row'}}>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%',borderBottomColor:'pink',borderBottomWidth:3}} >
                <Text style={{color:'gray',fontSize:14,textAlign:'center',textAlignVertical:'bottom'}}>ALL</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
                <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>Dailly</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
                 <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>Weekly</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'white',width:'25%',height:'100%',padding:'3%'}}>
                 <Text style={{color:'gray',fontSize:14,textAlign:'center'}}>Monthly</Text>
              </TouchableOpacity>
            </View>
             {/* //show users */}
             <View style={{backgroundColor:'white',width:'100%',height:20,marginLeft:'3%',marginTop:10}}>
              <Text style={{color:'gray',fontSize:12,textAlign:'center'}}>全期間</Text>
            </View>
  
            <View style={{width:'100%',height:300,flexDirection:'row'}}>
              <View style={{width:'33.3%',height:'100%'}}>
                <ImageBackground
                 source={require('./assets/meidodesu_TP_V.jpg')}
                 style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(0,0,0,0.4)'}}
                 resizeMode='cover'
                 blurRadius={3}>
                 {/* リングを重ねてみる */}
                <ImageBackground
                source={require('./assets/frame-ring1.png')}
                style={{ width:160, height: 160, borderRadius: 160 / 2, justifyContent: 'center',alignItems: 'center'}}>
                 <Image
                      source={require('./assets/meidodesu_TP_V.jpg')}
                      style={{ width:110, height: 110, borderRadius: 110 / 2}}
                />
               </ImageBackground>
                <Text style={{fontSize:16,marginTop:5,textAlign:"center",fontWeight:'bold',color:'pink'}}>No.2</Text>
              
                </ImageBackground>
              </View>
              <View style={{backgroundColor:'white',width:'33.3%',height:'100%'}}>
              <ImageBackground
                 source={require('./assets/instagram-clone-sample.png')}
                 //borderRadius style will help us make the Round Shape Image
                 style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center'}}
                 resizeMode='cover'
                 blurRadius={3}
                 >
                   {/* リングを重ねてみる */}
                <ImageBackground
                source={require('./assets/frame-ring1.png')}
                style={{ width:160, height: 160, borderRadius: 160 / 2, justifyContent: 'center',alignItems: 'center'}}>
                    <Image
                          source={require('./assets/instagram-clone-sample.png')}
                          
                          //borderRadius style will help us make the Round Shape Image
                          style={{ width:110, height: 110, borderRadius: 110 / 2}}
                    />
                </ImageBackground>
                <View><Text style={{fontSize:16,marginTop:5,textAlign:"center",fontWeight:'bold',color:'pink'}}>No.1</Text></View>
                </ImageBackground>
              </View>
              <View style={{backgroundColor:'white',width:'33.3%',height:'100%'}}>
              <ImageBackground
                 source={require('./assets/number-sample3.jpg')}
                 //borderRadius style will help us make the Round Shape Image
                 style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center'}}
                 resizeMode='cover'
                 blurRadius={3}
                 >
                     {/* リングを重ねてみる */}
                <ImageBackground
                source={require('./assets/frame-ring1.png')}
                style={{ width:160, height: 160, borderRadius: 160 / 2, justifyContent: 'center',alignItems: 'center'}}>
              <Image
                      source={require('./assets/number-sample3.jpg')}
                      //borderRadius style will help us make the Round Shape Image
                      style={{ width:110, height: 110, borderRadius: 110 / 2}}
              />
              </ImageBackground>
              <View><Text style={{fontSize:16,marginTop:5,textAlign:"center",fontWeight:'bold',color:'pink'}}>No.3</Text></View>
              </ImageBackground>
              </View>
            </View>
        {/* ここからリスト表示 */}        
            <ScrollView style={{backgroundColor:'white',width:'100%'}}>
            {/* 横幅いっぱいで、画像を後ろにいれて統一感だす */}
               <View style={{width:'100%',height:80,flexDirection: 'row'}}>
                <ImageBackground
                  source={require('./assets/instagram-clone-sample.png')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={3}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
                        <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                      <Image
                        source={require('./assets/instagram-clone-sample.png')}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width:65, height: 65, borderRadius: 65 / 2}}
                      />
                    </View>
                    <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                      <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                      <Text style={{color:'white',fontSize:14}}>姫</Text>
                    </View>
                    <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                      <Icon
                            name='add'
                            size={12}
                            color='gray'/>
                              
                    </View>
                  </ImageBackground>
               </View>
               {/* 横幅いっぱいで、画像を後ろにいれて統一感だす */}
               <View style={{width:'100%',height:80,flexDirection: 'row',backgroundColor:'gray'}}>
                <ImageBackground
                  source={require('./assets/meidodesu_TP_V.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={3}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
                        <Text style={{fontSize:14,textAlign:'center'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                      <Image
                        source={require('./assets/meidodesu_TP_V.jpg')}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width:65, height: 65, borderRadius: 65 / 2}}
                      />
                    </View>
                    <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                      <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                      <Text style={{color:'white',fontSize:14}}>姫</Text>
                    </View>
                    <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                      <Icon
                            name='add'
                            size={12}
                            color='gray'/>
                              
                    </View>
                  </ImageBackground>
               </View>
                {/* 横幅いっぱいで、画像を後ろにいれて統一感だす */}
                <View style={{width:'100%',height:80,flexDirection: 'row',backgroundColor:'gray'}}>
                <ImageBackground
                  source={require('./assets/number-sample3.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={3}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
                        <Text style={{fontSize:14,textAlign:'center'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                      <Image
                        source={require('./assets/number-sample3.jpg')}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width:65, height: 65, borderRadius: 65 / 2}}
                      />
                    </View>
                    <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                      <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                      <Text style={{color:'white',fontSize:14}}>姫</Text>
                    </View>
                    <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                      <Icon
                            name='add'
                            size={12}
                            color='gray'/>
                              
                    </View>
                  </ImageBackground>
               </View>
               {/* 横幅いっぱいで、画像を後ろにいれて統一感だす */}
               <View style={{width:'100%',height:80,flexDirection: 'row',backgroundColor:'gray'}}>
                <ImageBackground
                  source={require('./assets/meidodesu_TP_V.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={3}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
                        <Text style={{fontSize:14,textAlign:'center'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                      <Image
                        source={require('./assets/meidodesu_TP_V.jpg')}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width:65, height: 65, borderRadius: 65 / 2}}
                      />
                    </View>
                    <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                      <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                      <Text style={{color:'white',fontSize:14}}>姫</Text>
                    </View>
                    <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                      <Icon
                            name='add'
                            size={12}
                            color='gray'/>
                              
                    </View>
                  </ImageBackground>
               </View>
                {/* 横幅いっぱいで、画像を後ろにいれて統一感だす */}
                <View style={{width:'100%',height:80,flexDirection: 'row',backgroundColor:'gray'}}>
                <ImageBackground
                  source={require('./assets/number-sample3.jpg')}
                  //borderRadius style will help us make the Round Shape Image
                  style={{ width:'100%', height: '100%', justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}
                  resizeMode='cover'
                  blurRadius={3}>
                      <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:25}}>
                        <Text style={{fontSize:14,textAlign:'center'}}>1</Text>
                      </View>
                      <View style={{height:'100%',aspectRatio: 1,padding:2}}>
                      <Image
                        source={require('./assets/number-sample3.jpg')}
                        //borderRadius style will help us make the Round Shape Image
                        style={{ width:65, height: 65, borderRadius: 65 / 2}}
                      />
                    </View>
                    <View style={{height:'100%',width:'58%',paddingTop:20,paddingBottom:20,paddingLeft:10}}>
                      <Text style={{color:'pink',fontWeight:'bold',fontSize:14}}>Otaku_Queen</Text>
                      <Text style={{color:'white',fontSize:14}}>姫</Text>
                    </View>
                    <View style={{height:'100%',width:'10%',paddingTop:30,paddingBottom:30}}>
                      <Icon
                            name='add'
                            size={12}
                            color='gray'/>
                              
                    </View>
                  </ImageBackground>
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
  
  export default RankingScreen;