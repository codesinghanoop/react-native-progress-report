/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PBC from './pcb';

export default class App extends Component<{}> {
  constructor (props) {
    super (props);
    this.state = {
      percentage: 0,
    };
  }
  render () {
    const {percentage} = this.state;
    return (
      <View style={styles.container}>
        <PBC percentage={percentage} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState ({percentage: percentage + 20})}
        >
          <Text> Press me! </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 40,
    width: 200,
    backgroundColor: '#EA406E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
