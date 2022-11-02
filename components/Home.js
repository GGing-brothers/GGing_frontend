import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackgroundComponent,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

const Main = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.top_box}>
        <Text style={styles.logo_word}>GWH</Text>
        <Text style={styles.text}>GGing Workout Helper</Text>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttons_words}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={styles.buttons_words}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
  },
  top_box: {
    width: "100%",
    height: "55%",
    // backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo_word: {
    fontSize: "40px",
    fontWeight: "600",
  },
  text: {
    fontSize: "20px",
    marginTop: "10%",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    width: "80%",
    height: "20%",
    backgroundColor: "#ABC9FF",
    borderRadius: "1000px",
    textAlign: "center",
    marginTop: "5%",
  },
  buttons_words: {
    textAlign: "center",
    lineHeight: "45%",
    fontSize: "17%",
    fontWeight: "600",
  },
});

export default withNavigation(Main);
