import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  render() {

      return (
        <View style={styles.buttons}>
          <Text>Olá</Text>
        </View>

      );
  }

}

const styles = StyleSheet.create({

    buttons: {
      fontSize: 10
    }
})