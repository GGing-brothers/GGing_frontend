import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationActions, withNavigation } from "react-navigation";
import { users } from "../assets/export";

const Signup = ({ navigation }) => {
  const [signupData, setSignupData] = useState({
    id: "",
    password: "",
    passwordCheck: "",
  });
  const [userList, setUserList] = useState(users);
  const [checkId, setCheckId] = useState(false);
  const [checkPW, setCheckPW] = useState(false);
  const [complete, setComplete] = useState(false);

  const check = () => {
    if (signupData.id === "minse") {
      setCheckId(true);
    } else {
      setCheckId(false);
    }
    if (signupData.password !== signupData.passwordCheck) {
      setCheckPW(true);
    } else {
      setCheckPW(false);
    }
    if (!checkId && !checkPW) {
      setComplete(true);
    }
  };

  return (
    <View style={styles.main_box}>
      {complete ? (
        <>
          <Text style={{ fontSize: 30 }}>회원가입 완료!</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#ABC9FF",
              borderRadius: 300,
              width: 140,
              alignSelf: "center",
              marginTop: 10,
            }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#065FD4",
                alignSelf: "center",
              }}
            >
              로그인하기
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.main_login_box}>
          <Text style={styles.main_logo}>GWH</Text>
          <Text style={styles.login_text}>아이디</Text>
          <TextInput
            onChangeText={(e) => {
              setSignupData({ ...signupData, id: e });
            }}
            style={styles.input_box}
          />
          {checkId ? (
            <Text style={{ fontSize: 10, color: "red" }}>
              동일한 아이디가 존재합니다.
            </Text>
          ) : (
            ""
          )}
          <Text style={styles.signup_text}>비밀번호</Text>
          <TextInput
            onChangeText={(e) => {
              setSignupData({ ...signupData, password: e });
            }}
            style={styles.input_box}
          />
          <Text style={styles.signup_text}>비밀번호 확인</Text>
          <TextInput
            onChangeText={(e) => {
              setSignupData({ ...signupData, passwordCheck: e });
            }}
            style={styles.input_box}
          />
          {checkPW ? (
            <Text style={{ fontSize: 10, color: "red" }}>
              비밀번호를 다시 확인해주세요.
            </Text>
          ) : (
            ""
          )}
          <Text style={styles.login_button} onPress={check}>
            회원가입하기
          </Text>
          <View style={styles.isMember}>
            <Text style={styles.isMember_text}>이미 계정이 있으신가요?</Text>
            <Text
              onPress={() => {
                // this.props.navigation.navigate('Login')
                navigation.navigate("Login");
              }}
              style={styles.isMember_button}
            >
              로그인하기
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main_box: {
    width: "80%",
    height: "60%",
    marginLeft: "8%",
    //   backgroundColor: 'lightblue',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

export default withNavigation(Signup);
