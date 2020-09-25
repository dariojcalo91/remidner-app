// components/Hello.tsx
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import firebase from '../config/firebaseConfig';

export interface Props {
  user: string;
  enthusiasmLevel?: number;
}

interface State {
  enthusiasmLevel: number;
  appName: string;
}

export class FacebookLogin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    if ((props.enthusiasmLevel || 0) <= 0) {
      throw new Error(
        'You could be a little more enthusiastic. :D'
      );
    }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1,
      appName: ""
    };
  }

  onIncrement = () => {
    console.log("firebase?", firebase.name);

    return this.setState({
      enthusiasmLevel: this.state.enthusiasmLevel + 1,
      appName: firebase.name? firebase.name : "NO API"
    });
  };
    
  onDecrement = () =>
    this.setState({
      enthusiasmLevel: this.state.enthusiasmLevel - 1
    });
  getExclamationMarks = (numChars: number) =>
    Array(numChars + 1).join('!');

  render() {
    return (
      <View style={styles.root}>
        <Text>
          firebase.name
        </Text>


        <Text style={styles.greeting}>
          Hello{' '}
          {this.props.user +
            this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  }
});
