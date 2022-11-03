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

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
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
        <Stack.Screen name="Calendar" component={CalScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainScreen}
        />
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
