import React ,{Component} from 'react';
import { StyleSheet, Text, View, Image,Dimensions, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation";

class ImageDetail extends React.Component{
    static navigationOptions = ({ navigate }) => ({
        header: null
        })
    constructor(props){
        super();
      }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Header
                leftComponent={ <TouchableOpacity onPress={() => navigate('Home')}><Image source={require('./assets/left-arrow.png')} style={{ width:20, height: 20, tintColor:'white'}}/></TouchableOpacity> }
                centerComponent={{ text: 'じょそすたぐらむ', style: { color: '#fff', fontSize:17,fontWeight:'bold' } }}
                rightComponent={{ icon: 'send', color: '#fff',  onPress:() => navigate('Message')}}
                containerStyle={{backgroundColor: 'pink',justifyContent: 'space-around'}}/>
                <View style={{ height:600,backgroundColor:'white'}}>
                <View style={{height:50}}>
                    <TouchableOpacity 
                    style={{backgroundColor:'white',marginLeft:10,marginTop:4,marginRight:10,height:'80%',flexDirection: 'row'}}
                    onPress={() => navigate('Profiles')}>
                    <Image
                            source={require('./assets/instagram-clone-sample.png')}
                            //borderRadius style will help us make the Round Shape Image
                            style={{ width: 30, height: 30, borderRadius: 30 / 2, marginLeft:5,marginTop:5}}/>
                        <Text style={{fontSize:14,marginLeft:12,marginTop:12,fontWeight:'bold'}}>みゅう</Text>    
                    </TouchableOpacity>
                </View>
                <Image
                        source={require('./assets/insta-maid1.jpg')}
                        style={{ width: '100%', height: '70%', resizeMode: 'cover',}}/>
                <View style={{ width: '100%', height: '10%', backgroundColor:'white',flexDirection: 'row',padding:10}}>
                <TouchableOpacity>
                <Image
                        source={require('./assets/heart-shape.png')}
                        style={{ width: 30, height: 30,marginRight:16,marginLeft:8}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image
                        source={require('./assets/speech-bubble.png')}
                        style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image
                        source={require('./assets/mail.png')}
                        style={{ width: 30, height: 30,marginRight:16}}/>
                </TouchableOpacity>
                </View>
                <View>
                <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>100 いいね！</Text> 
                <View style={{flexDirection: 'row',marginTop:5}}>         
                    <Text style={{color:'black',marginLeft:16,fontWeight:'bold'}}>完全で瀟洒なメイド</Text> 
                    <Text style={{color:'black',marginLeft:12,fontSize:14}}>今日もお給仕しちゃいますにゃん❤️</Text>
                </View>
                </View>     
                </View>
            </View>
        );
    }
}

export default  ImageDetail;