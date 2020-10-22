import React from "react";
import { StyleSheet,Text, View } from "react-native";
import { Login } from "./Login";

interface Props { };

interface State { logged: boolean };

export class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      logged: false
    };
  };

  validateLogged = (userLogged: boolean): void => {
    console.log("asdsdads", userLogged);
    this.setState({logged: userLogged});
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.logged? <Login logged={this.validateLogged}></Login> : null }
        {this.state.logged? <View><Text>Hola</Text></View>: null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});
