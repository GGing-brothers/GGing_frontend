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
        <Image
          // style={{ width: "40%", height: "10%" }}
          source={require("../assets/logo.png")}
        />
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          style={{
            width: "80%",
            height: "14%",
            backgroundColor: "#ABC9FF",
            borderRadius: "20px",
            marginTop: "5%",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View
            style={{
              height: "100%",
              width: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                margin: "5%",
                color: "white",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              이달의 목표
            </Text>
            <View
              style={{
                margin: "5%",
                width: "90%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>매일 운동하기</Text>
              <Text>운동 : 3일차</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttons_words}>운동하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttons_words}>운동일지</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttons_words}>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttons_words}>하드웨어 설명</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    // backgroundColor: "white",
  },
  top_box: {
    width: "100%",
    height: "10%",
    // backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    width: "80%",
    height: "14%",
    backgroundColor: "white",
    borderRadius: "20px",
    textAlign: "center",
    marginTop: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttons_words: {
    textAlign: "center",
    lineHeight: "45%",
    fontSize: "17%",
    fontWeight: "600",
  },
});

export default withNavigation(Main);
