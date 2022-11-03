import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackgroundComponent,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { withNavigation } from "react-navigation";

const InWorkOut = ({ navigation, route }) => {
  console.log(route.params.state.restTime);
  return (
    <View style={styles.Container}>
      <View style={styles.Monthly_title}>
        <Text style={styles.title}>이달의 목표</Text>
        <Text style={styles.daily}>매일 운동하기</Text>
      </View>
      <View>
        <Image
          style={{ width: 140, height: 100, marginTop: 20 }}
          source={require("../assets/pushup.png")}
        />
        <Text style={{ textAlign: "center", fontWeight: "600", marginTop: 10 }}>
          팔굽혀펴기
        </Text>
      </View>
      <View style={styles.Box}>
        <Text style={{ color: "white" }}>{route.params.state.restTime}</Text>
      </View>
      <View style={styles.fl_box}>
        <Text style={styles.question}>자세를 모르시나요?</Text>
        <Text style={styles.solution}>자세 보기</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    color: "#ABC9FF",
  },
  dayCount: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    fontWeight: "700",
  },
  Box: {
    width: 120,
    height: 120,
    borderRadius: "100%",
    marginTop: 50,
    backgroundColor: "#ABC9FF",
  },
  fl_box: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  question: {
    color: "#333",
  },
  solution: {
    color: "#00ABFF",
  },
  Monthly_title: {
    marginTop: 20,
    width: "80%",
    height: "16%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-evenly",
    borderRadius: "10px",
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default withNavigation(InWorkOut);
