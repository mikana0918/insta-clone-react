import React from 'react';
import { CameraRoll, StyleSheet, Text, View, Image,Dimensions, Linking, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
// import Permissions from 'react-native-permissions';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';

export default class CameraExample extends React.Component {
    static navigationOptions = ({ navigate }) => 
    ({
      header: null
      })

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

//   async componentDidMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//   }

    
    async takePicture() {       
        console.log('Button Pressed');
        if (this.camera) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            this.setState({ hasCameraPermission: status === 'granted' });

            console.log('Taking photo');
            const options = { quality: 1, base64: true, fixOrientation: true, exif: true};
            await this.camera.takePictureAsync(options).then((photo)=>{
                console.log(photo.uri);
                CameraRoll.saveToCameraRoll(photo.uri, 'photo')
                console.log('save to cameraroll?');
            });
           
            }
        }
        

  render() {
    const { hasCameraPermission } = this.state;
    const {navigate} = this.props.navigation;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
            <View style={{height:'10%',backgroundColor:'pink', padding:10 }}>
                <TouchableOpacity 
                style={{ alignItems: 'center',  justifyContent: 'center',backgroundColor:'gray', height:'100%'}}
                onPress={() => navigate('Post')} 
                >
                                <Icon
                                    name='camera'
                                    size={32}
                                    color={'white'}
                                    // color={'#7DA3B3'}
                                />      
                </TouchableOpacity>
            </View>

          <Camera 
          style={{ height:'80%',  bottom:0 }} type={this.state.type}
          ref={ref => {
            this.camera = ref;
          }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>

  
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>

          <View style={{height:'18%', padding:10, backgroundColor:'pink', flexDirection:'row', justifyContent: 'space-between', padding: '2%', }}>
                <TouchableOpacity 
                style={{backgroundColor:'gray', height:'100%'}}
                onPress={() => {
                    this.takePicture();
                  }}>
                    <ImageBackground  style={{alignSelf:'center', width:32, height: 32, borderRadius: 32 / 2, borderColor:'white',borderWidth:3,padding:3, shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2 }}>
                            <Icon
                                name='camera'
                                size={32}
                                color={'white'}
                                // color={'#7DA3B3'}
                            />      
                    </ImageBackground>
                </TouchableOpacity>

              <TouchableOpacity
               onPress={() => {
                this.takePicture();
              }}>
                    <ImageBackground  style={{alignSelf:'center', width:50, height: 50, borderRadius: 50 / 2, borderColor:'white',borderWidth:3,padding:3, shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2 }}>
                            <Icon
                                name='camera'
                                size={40}
                                color={'white'}
                                // color={'#7DA3B3'}
                            />      
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => {
                    this.takePicture();
                  }}>
                    <ImageBackground  style={{alignSelf:'right', width:32, height: 32, borderRadius: 32 / 2, borderColor:'white',borderWidth:3,padding:3, shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2 }}>
                            <Icon
                                name='camera'
                                size={32}
                                color={'white'}
                                // color={'#7DA3B3'}
                            />      
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>
        </View>
      );
    }
  }
}