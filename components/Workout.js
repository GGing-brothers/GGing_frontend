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

const Workout = ({ navigation }) => {
  const [formData, setFormData] = useState({
    count: 0,
    set: 0,
    restTime: 0,
  });
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.dayCount}>운동 2일차</Text>
        <Image
          style={{ width: 140, height: 100 }}
          source={require("../assets/pushup.png")}
        />
        <Text style={{ textAlign: "center", fontWeight: "600", marginTop: 10 }}>
          팔굽혀펴기
        </Text>
      </View>
      <View style={styles.Box}>
        <TextInput
          placeholder="개수 입력..."
          style={styles.input_box}
          onChangeText={(text) => {
            setFormData({ ...formData, count: text });
            console.log(formData);
          }}
        />
      </View>
      <View style={styles.Box}>
        <TextInput
          placeholder="세트수 입력..."
          style={styles.input_box}
          onChangeText={(text) => {
            setFormData({ ...formData, set: text });
            console.log(formData);
          }}
        />
      </View>
      <View style={styles.Box}>
        <TextInput
          placeholder="쉬는 시간 입력..."
          style={styles.input_box}
          onChangeText={(text) => {
            setFormData({ ...formData, restTime: text });
            console.log(formData);
          }}
        />
      </View>
      <View style={styles.fl_box}>
        <Text style={styles.question}>자세를 모르시나요?</Text>
        <Text style={styles.solution}>자세 보기</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("InWorkOut", {
            state: {
              count: formData.count,
              set: formData.set,
              restTime: formData.restTime,
            },
          });
        }}
      >
        <Text style={styles.button_text}>운동 시작</Text>
      </TouchableOpacity>
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
  dayCount: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    fontWeight: "700",
  },
  Box: {
    width: "80%",
    marginTop: 20,
  },
  input_box: {
    paddingLeft: 10,
    height: 40,
    width: "100%",
    borderBottomWidth: "2",
    borderBottomColor: "#ABC9FF",
    borderRadius: 50,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fl_box: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  question: {
    color: "#333",
  },
  solution: {
    color: "#00ABFF",
  },
  button: {
    backgroundColor: "#ABC9FF",
    width: "80%",
    height: "10%",
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button_text: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    lineHeight: "45%",
  },
});

export default withNavigation(Workout);
