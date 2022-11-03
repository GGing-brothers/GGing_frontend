import React, { useState } from "react";
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

const Workout = ({ navigation }) => {
  const [formData, setFormData] = useState({
    count: 0,
    set: 0,
    restTime: 0,
  });
  return (
    <View style={styles.Container}>
      <View>
        <Text>운동 2일차</Text>
        <Image source={require("../assets/pushup.png")} />
        <Text>팔굽혀펴기</Text>
      </View>
      <View>
        <Text style={styles.signup_text}>개수</Text>
        <TextInput style={styles.input_box} onChangeText={(text) => {}} />
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
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default withNavigation(Workout);
