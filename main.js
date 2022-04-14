import { StatusBar } from "react-native";
import React, { useState } from "react";
import Tabs from "./src/components/tab";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/user/login";
import { NavigationContainer } from "@react-navigation/native";
import Store from "./src/components/store";
import About from "./src/components/about";

const Stack = createStackNavigator();

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

const Main = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[2]
  );
  return (
    <NavigationContainer independent={true}>
      <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="store"
          component={Store}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
