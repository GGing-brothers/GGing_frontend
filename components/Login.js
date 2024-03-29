import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { withNavigation } from "react-navigation";

const Login = ({ navigation }) => {
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });
  return (
    <View style={styles.main_box}>
      <View style={styles.main_login_box}>
        <Text style={styles.main_logo}>GWH</Text>
        <Text style={styles.login_text}>아이디</Text>
        <TextInput
          style={styles.input_box}
          onChangeText={(text) => {
            setLoginData({ ...loginData, id: text });
          }}
        />
        <Text style={styles.signup_text}>비밀번호</Text>
        <TextInput
          style={styles.input_box}
          onChangeText={(text) => {
            setLoginData({ ...loginData, password: text });
            console.log(loginData);
          }}
        />
        <Text
          style={styles.login_button}
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          로그인하기
        </Text>
        <View style={styles.isMember}>
          <Text style={styles.isMember_text}>회원이 아니신가요? </Text>
          <Text
            onPress={() => {
              navigation.navigate("Signup");
            }}
            style={styles.isMember_button}
          >
            회원가입하기
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_box: {
    width: "80%",
    height: "60%",
    //   backgroundColor: 'lightblue',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "8%",
  },
  main_login_box: {
    width: "100%",
    // height: '60%',
    flex: 1,
    alignItems: "start",
    justifyContent: "center",
    // backgroundColor: 'red',
  },
  main_logo: {
    position: "absolute",
    left: "35%",
    top: "15%",
    fontSize: "30px",
    fontWeight: "bold",
  },
  signup_text: {
    marginLeft: "3%",
  },
  login_text: {
    marginLeft: "3%",
    marginTop: "30%",
  },
  input_box: {
    width: "100%",
    height: "7%",
    // backgroundColor: 'blue',
    marginTop: "1%",
    marginBottom: "5%",
    borderBottomWidth: "2",
    borderBottomColor: "#ABC9FF",
  },
  login_button: {
    color: "white",
    width: "100%",
    backgroundColor: "#ABC9FF",
    height: "8%",
    textAlign: "center",
    lineHeight: "45%",
    overflow: "hidden",
    borderRadius: "10",
    marginTop: "10%",
  },
  isMember: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "center",
  },
  isMember_text: {
    marginLeft: "13%",
  },
  isMember_button: {
    color: "#ABC9FF",
  },
});

export default withNavigation(Login);
