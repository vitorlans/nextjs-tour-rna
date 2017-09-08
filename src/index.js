import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('tour', () => App);