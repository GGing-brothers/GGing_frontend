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
import CountDown from "react-native-countdown-component";
import { withNavigation } from "react-navigation";

const InWorkOut = ({ navigation, route }) => {
  const time = route.params.state.restTime;
  const [show, setShow] = useState(false);
  return (
    <View style={styles.Container}>
      <View style={styles.Monthly_title}>
        <Text style={styles.title}>이달의 목표</Text>
        <Text style={styles.daily}>매일 운동하기</Text>
      </View>
      <View style={{ position: "relative" }}>
        <Image
          style={{ width: 140, height: 100, marginTop: 20 }}
          source={require("../assets/pushup.png")}
        />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          팔굽혀펴기
        </Text>
        {show ? (
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginTop: 5,
              color: "red",
              position: "absolute",
              top: 140,
              left: 15,
            }}
          >
            자세를 고쳐주세요!
          </Text>
        ) : (
          ""
        )}
      </View>
      <View style={styles.Box}>
        {/* <Text style={{ color: "white" }}> */}
        <CountDown
          timeLabels={{ d: "", h: "", m: "", s: "" }}
          size={20}
          until={30}
          digitStyle={{ backgroundColor: "#ABC9FF" }}
          timeToShow={["S"]}
        />
        {/* </Text> */}
      </View>
      <View style={styles.fl_box}>
        <Text style={styles.question}>자세를 모르시나요?</Text>
        <Text style={styles.solution}>자세 보기</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setShow(!show);
        }}
        style={{
          // backgroundColor: "red",
          width: 500,
          height: 100,
        }}
      ></TouchableOpacity>
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
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
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
