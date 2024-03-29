import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const fetchData = async () => {
    try {
      // GET 요청을 보냄
      const response = await axios.get("http://localhost:3000/api/data/12");
      // 결과 출력
      console.log(response.data);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };
  // API 요청 함수 호출
  fetchData();
  const [data, setData] = useState("");
  console.log("hello");
  return (
    <View style={styles.Container}>
      <View style={styles.top_box}>
        <Image
          style={{ marginTop: 50 }}
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
            marginTop: "10%",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={() => {
            axios
              .get("127.0.0.1:3000/api/data/12")
              .then((res) => {
                console.log(res);
                setData(res.data);
              })
              .catch((err) => console.log(err));
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
              {data}
            </Text>
            <View
              style={{
                margin: "5%",
                width: "100%",
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
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Workout")}
        >
          <Image
            style={styles.icons}
            source={require("../assets/workout.png")}
          />
          <Text style={styles.buttons_words}>운동하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Calendar")}
        >
          <Image style={styles.icons} source={require("../assets/plan.png")} />
          <Text style={styles.buttons_words}>운동일지</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Image
            style={styles.icons}
            source={require("../assets/community.png")}
          />
          <Text style={styles.buttons_words}>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Image
            style={styles.icons}
            source={require("../assets/hardware.png")}
          />
          <Text style={styles.buttons_words}>하드웨어 설명</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
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
    position: "relative",
    width: "80%",
    height: "14%",
    backgroundColor: "white",
    borderRadius: 20,
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
  icons: {
    width: 30,
    height: 30,
    position: "absolute",
    top: "30%",
    left: "11%",
    zIndex: 10,
  },
  buttons_words: {
    textAlign: "center",
    lineHeight: "65%",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default withNavigation(Main);
