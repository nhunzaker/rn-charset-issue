/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Button, View } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  sendJson() {
    let body = JSON.stringify({ key: "value" });

    let headers = {
      "Content-Type": "application/json"
    };

    fetch("http://10.0.2.2:3000", { method: "POST", body, headers });
  }

  sendForm() {
    let body = new FormData();
    body.append("key", "value");

    fetch("http://10.0.2.2:3000", { method: "POST", body });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Button onPress={this.sendJson} title="Send JSON" />
        </View>
        <View style={styles.row}>
          <Button onPress={this.sendForm} title="Send Form" />
        </View>
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
  row: {
    padding: 4
  }
});
