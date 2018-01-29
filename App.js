/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Button,
  TouchableHighlight
} from "react-native";

const imageDK = require("./src/img/dk.jpg");

export default class App extends Component<{}> {

  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bordões da Galera</Text>
        <TouchableHighlight onPress={this.openModal.bind(this)}>
          <Image source={imageDK} />
        </TouchableHighlight>
        {/* <Modal
          visible={this.state.modalVisible}
          animationType={"slide"}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text>This is content inside of modal component</Text>
              <Button onPress={() => this.closeModal()} title="Close modal" />
            </View>
          </View>
        </Modal> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
