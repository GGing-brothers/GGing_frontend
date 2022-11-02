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
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/AntDesign";

const CalendarPage = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Icon
        name="arrowleft"
        onPress={() => {
          navigation.navigate("Main");
        }}
      />
      <View style={styles.Monthly_title}>
        <Text style={styles.title}>이달의 목표</Text>
        <Text style={styles.daily}>매일 운동하기</Text>
      </View>
      <View style={styles.centerBox}>
        <Calendar style={styles.Calendar} />
      </View>
      <View style={styles.Monthly_title}>
        <Text style={styles.title}>오늘</Text>
        <View style={styles.flBox}>
          <Text>팔굽혀펴기</Text>
          <Text>0kg/ 15 X 4</Text>
        </View>
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
  },
  Calendar: {
    width: "100%",
    height: "56%",
    marginTop: 10,
  },
  Monthly_title: {
    width: "80%",
    height: "16%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-evenly",
    borderRadius: "10px",
    paddingLeft: 10,
  },
  centerBox: {
    width: 330,
    height: 330,
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#ABC9FF",
  },
  Daily_title: {
    width: "100%",
    height: "22%",
    backgroundColor: "red",
  },
  flBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default withNavigation(CalendarPage);
