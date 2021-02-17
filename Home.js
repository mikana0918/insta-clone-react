// log-in screen
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "somethun",
    title: "Josostagram",
    // text: 'Jyosostagram',
    image: require("./assets/welcome1.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "somethun-dos",
    // title: 'Title 2',
    text: "まずは会員登録",
    image: require("./assets/welcome1.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: "somethun1",
    // title: 'Rocket guy',
    text: "写真をシェア",
    image: require("./assets/welcome1.jpg"),
    backgroundColor: "#22bcb5",
  },
];

class Home extends React.Component {
  state = {
    showRealApp: false,
    fontLoaded: false,
  };
  // static navigationOptions = {
  //   header: null
  // }

  render() {
    if (this.state.showRealApp) {
      return <Timeline />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          slides={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  welcomeImages: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    resizeMode: "cover",
    zIndex: 0,
    position: "relative",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    color: "pink",
    zIndex: 2,
    fontSize: 40,
    position: "absolute",
    textAlign: "center",
    textAlignVertical: "center",
    top: "35%",
    left: "30%",
    // fontFamily:'insta-font'
  },
  text: {
    position: "absolute",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  slide: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  image: {
    resizeMode: "contain",
  },
  carousel: {
    // borderRadius:10,
  },
  storyEnd: {
    width: 100,
    height: 100,
    backgroundColor: "gray",
  },
});

export default Home;
