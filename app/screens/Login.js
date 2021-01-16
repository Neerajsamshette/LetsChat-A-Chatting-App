import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableNativeFeedback,
} from "react-native";

const Login = () => {
  const [Username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode={"contain"}
          source={require("../assets/logo.png")}
        />
        <Text style={{ fontSize: 22, fontWeight: "600", color: "black" }}>
          Let's Chat
        </Text>
      </View>
      <View style={styles.title}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
          }}
        >
          Welcome back!
        </Text>

        <Text style={{ fontSize: 20 }}>
          Login to your existant account of Lets Chat
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.Textinput}
          onChangeText={(text) => setUsername(text)}
          value={Username}
          placeholder={"Enter your Username or Email"}
        />
        <TextInput
          style={styles.Textinput}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder={"Enter your Password"}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableNativeFeedback>
          <View style={styles.loginBtn}>
            <Text style={{ color: "white", fontSize: 20, borderRadius: 10 }}>
              Login
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    marginBottom: StatusBar.currentHeight,
    // justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 150,
  },

  logoContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    // width: "100%",
    // backgroundColor: "red",
  },
  form: {
    flex: 2,
    // backgroundColor: "blue",
    width: 500,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttons: {
    flex: 0.2,
  },
  title: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    overflow: "hidden",
  },
  Textinput: {
    height: 60,
    borderColor: "#00A2FF",
    borderWidth: 2,
    borderRadius: 6,
    margin: 15,
    padding: 20,
    fontSize: 16,
    color: "blue",
  },
  loginBtn: {
    height: 50,
    backgroundColor: "#00A2FF",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});

export default Login;
