import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";

import { FacebookLogin } from "../components/FacebookLogin";

interface Props { logged: (userLogged: boolean) => void};

interface State {
  clicked: boolean
  createAccount: boolean;
  login: boolean;
};

export class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      clicked: false,
      createAccount: false,
      login: false,
    }
  };

  setLogged = () => {
    this.props.logged(true);
    this.loginWithFacebook();
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
          <Text style={styles.tittle}>
            Reminder APP
          </Text>
          <Text style={styles.subTittle}>
            (Never forget the bills!!)
          </Text>

          <View style={{margin:30, marginBottom:0, marginTop:15, flexDirection: "row", justifyContent: "space-around"}}>
            {!this.state.clicked ? 
              <Button
                title="Iniciar sesión"
                onPress={this.loginWithFacebook}
              /> : null
            }
            {!this.state.clicked ? 
              <Button
                title="Iniciar sesión con Facebook"
                onPress={this.setLogged.bind(this)}
              /> : null
            }
          </View>

          <View style={{margin:30, marginTop:15}}>
            {!this.state.clicked ?
              <Button
                title="Crear cuenta"
                onPress={this.createAccount}
              /> : null
            }
          </View>
          
          
          {this.state.login? <FacebookLogin user="dario" enthusiasmLevel={1}/> : null}
        </ImageBackground>
        <Text>asdasd {this.state.clicked}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    height: "100%"
  },
  tittle: {
    color: "grey",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "roboto",
    flexDirection: "row",
    marginLeft: 30,
  },
  subTittle: {
    color: "grey",
    fontSize: 30,
    fontFamily: "roboto",
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 30,
  },
  buttonStyle: {
    margin: 10,
  }
});
