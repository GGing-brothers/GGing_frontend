import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "navigator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "./components/Signup";
import LoginScreen from "./components/Login";
import HomeScreen from "./components/Home";
import CalScreen from "./components/Calendar";
import MainScreen from "./components/Main";
import WorkoutScreen from "./components/Workout";
import InWorkOutScreen from "./components/InWorkOut";
import axios from "axios";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerBackVisible: false, headerBackTitleVisible: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerBackVisible: false, headerBackTitleVisible: false }}
          name="Signup"
          component={SignupScreen}
        />
        <Stack.Screen
          // options={{ headerBackVisible: false, headerBackTitleVisible: false }}
          name="Workout"
          component={WorkoutScreen}
        />
        <Stack.Screen name="Calendar" component={CalScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainScreen}
        />
        <Stack.Screen name="InWorkOut" component={InWorkOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
