import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";

import { FacebookLogin } from "../components/FacebookLogin";

interface Props { };

interface State {
  clicked: boolean
  createAccount: boolean;
  login: boolean;
};

const image = { uri: "require('./src/assets/background.jpg')" };

export class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      clicked: false,
      createAccount: false,
      login: false,
    }
  }

  createAccount = () => {
    console.log("create account");

    return this.setState({
      clicked: true,
      createAccount: true,
    });
  };

  loginWithFacebook = () => {
    console.log("login with fb");

    return this.setState({
      clicked: true,
      login: true,
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/background.jpg")} style={styles.image}>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>

          {!this.state.clicked ?
            <Button
              title="Crear cuenta"
              onPress={this.createAccount}
            /> : null
          }

          {!this.state.clicked ? 
            <Button
              title="Iniciar sesión con Facecbook"
              onPress={this.loginWithFacebook}
            /> : null
          }
          
          {this.state.login? <FacebookLogin user="dario" enthusiasmLevel={1}/> : null}
          
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}></Text>
        </ImageBackground>
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});
