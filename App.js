import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default class App extends Component {
  
  // criando um estado inicial para o componente display
  state = {
    displayValue: '0',
  };

  render() {
    return (
      <View>
        <Text>Olá</Text>
        <Display value={this.state.DisplayValue} />
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory}/>
          <Button label="/" />
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="*" />
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" />
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
          <Button label="0" />
          <Button label="." />
          <Button label="=" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
  },
});
