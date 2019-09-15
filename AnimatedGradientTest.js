import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'

export default class HelloWorldApp extends Component {
  render() {
    return (
      <AnimatedLinearGradient customColors={  'rgb(106, 57, 171)',
      'rgb(151, 52, 160)',
      'rgb(197, 57, 92)',
      'rgb(231, 166, 73)',
      'rgb(181, 70, 92)'} speed={4000}/>
    );
  }
}

// presetColors = {
//     instagram: [
//       'rgb(106, 57, 171)',
//       'rgb(151, 52, 160)',
//       'rgb(197, 57, 92)',
//       'rgb(231, 166, 73)',
//       'rgb(181, 70, 92)'
//     ],
//     firefox: [
//       'rgb(236, 190, 55)',
//       'rgb(215, 110, 51)',
//       'rgb(181, 63, 49)',
//       'rgb(192, 71, 45)',
//     ],
//     sunrise: [
//       'rgb(92, 160, 186)',
//       'rgb(106, 166, 186)',
//       'rgb(142, 191, 186)',
//       'rgb(172, 211, 186)',
//       'rgb(239, 235, 186)',
//       'rgb(212, 222, 206)',
//       'rgb(187, 216, 200)',
//       'rgb(152, 197, 190)',
//       'rgb(100, 173, 186)',
//     ]
//   };

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);