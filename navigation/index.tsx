import * as React from "react";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { RootStackParamList, ScreenComponent } from "./types";
import BottomTabNavigator from "./components/BottomTabNavigator";
import SelectPlayers from "@screens/SelectPlayers";

export const navigationRef = createNavigationContainerRef();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="#000" barStyle="light-content" animated />
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={"Root"}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator as ScreenComponent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectPlayersScreen"
        component={SelectPlayers as ScreenComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
