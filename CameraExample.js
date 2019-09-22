import React from 'react';
import { CameraRoll, StyleSheet, Text, View, Image,Dimensions, Linking, StatusBar, ScrollView,TouchableWithoutFeedback,TouchableOpacity,ImageBackground,Modal,TouchableHighlight } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
// import Permissions from 'react-native-permissions';
import { Header,Icon,SearchBar,Input,Button } from 'react-native-elements';
import * as FaceDetector from 'expo-face-detector';

export default class CameraExample extends React.Component {
    static navigationOptions = ({ navigate }) => 
    ({
      header: null
      })

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

async componentDidMount() {
const { status } = await Permissions.askAsync(Permissions.CAMERA);
this.setState({ hasCameraPermission: status === 'granted' });
}

    
async takePicture() {       
    console.log('Button Pressed');
    if (this.camera) {
        console.log('Taking photo');
        const options = { quality: 1, base64: true, fixOrientation: true, exif: true};
        await this.camera.takePictureAsync(options).then((photo)=>{
            console.log(photo.uri);
            CameraRoll.saveToCameraRoll(photo.uri, 'photo')
            console.log('save to cameraroll?');
        });
        
        }
    }

    handleFacesDetected = ({ faces }) => {

        if(faces.length > 0){
            this.setState({ faces });
        }
        console.log(faces);

    };

    snap = async (recognize) => {
        try {
            if (this.camera) {
                let photo = await this.camera.takePictureAsync({ base64: true });
                if(!faceDetected) {
                    alert('No face detected!');
                    return;
                }
    
                const userId = makeId();
                const { base64 } = photo;
                this[recognize ? 'recognize' : 'enroll']({ userId, base64 });
            }
        } catch (e) {
            console.log('error on snap: ', e)
        }
    };
        

  render() {
    const { hasCameraPermission } = this.state;
    const {navigate} = this.props.navigation;

    // handleFacesDetected = ({ faces }) => {
    //     if(faces.length > 0){
    //         this.setState({ faces });
    //     }
    // };

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
        //   zoom = {1} //最大ズーム
            faceDetectorSettings={{
                mode: FaceDetector.Constants.Mode.fast,
                detectLandmarks: FaceDetector.Constants.Landmarks.none,
                runClassifications: FaceDetector.Constants.Classifications.none,
                minDetectionInterval: 100,
                tracking: true,
            }}
          onFacesDetected={this.handleFacesDetected} //顔認識トリガー
          autoFocus = {'on'}
          style={{ height:'100%',  bottom:0 }} type={this.state.type}
          ref={ref => {
            this.camera = ref;
          }}>
            <View style={{justifyContent: 'space-between', flexDirection:'row', position:'absolute', top:0, height:'10%', width:'100%', padding:20 , opacity:0.8, backgroundColor:'rgba(255, 255, 255, 0.3)', borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
                <TouchableOpacity 
                style={{ alignItems: 'left',  
                justifyContent: 'center', 
                height:'100%', }}
                onPress={() => navigate('投稿')} 
                >
                    <Icon
                        name='ios-arrow-round-back'
                        size={50}
                        color={'white'}
                        type='ionicon'
                    />      
                </TouchableOpacity>

                <TouchableOpacity
                style={{
                  alignSelf: 'right',
                  alignItems: 'right',
                  height:'100%'
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>

                    <Icon
                        name='ios-reverse-camera'
                        size={40}
                        color={'white'}
                        type='ionicon'
                    />      
              </TouchableOpacity>
            </View>

            {/* <View
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
            </View> */}

            <View style={{borderTopLeftRadius: 50, borderTopRightRadius: 50, position:'absolute', bottom:0, height:'10%', width:'100%', padding:10, opacity:0.8, backgroundColor:'rgba(255, 255, 255, 0.3)', flexDirection:'row', justifyContent: 'space-between', padding: '2%', }}>
                <TouchableOpacity 
                style={{ height:'100%'}}
                onPress={() => {
                    this.takePicture();
                  }}>
                    <ImageBackground  style={{alignSelf:'center', width:40, height: 40, borderRadius: 40 / 2, borderColor:'white',borderWidth:3,padding:3, shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2 }}>
                            <Icon
                                name='logo-buffer'
                                size={30}
                                color={'white'}
                                type='ionicon'
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
                    <ImageBackground  style={{alignSelf:'right', width:40, height: 40, borderRadius: 40 / 2, borderColor:'white',borderWidth:3,padding:3, shadowColor: 'gray', shadowOffset: { width: 7, height: 9 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 2 }}>
                            <Icon
                                name='face-recognition'
                                size={30}
                                color={'white'}
                                // color={'#7DA3B3'}
                            />      
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>
          </Camera>
        </View>
      );
    }
  }
}