import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, SafeAreaView, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import AppIntroScreen from "./screens/AppIntro";
import GetStartedScreen from "./screens/AppIntro/getStarted";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer fallback={<View />}>
      <Stack.Navigator initialRouteName="AppIntro" headerMode="none">
        <Stack.Screen name="AppIntro" component={AppIntroScreen} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
