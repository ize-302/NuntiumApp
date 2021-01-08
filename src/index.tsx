import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, SafeAreaView, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import AppIntroScreen from "./screens/AppIntro";
import IntroScreen from "./screens/AppIntro/intro";
import SigninScreen from "./screens/AuthScreens/Signin";
import SignupScreen from "./screens/AuthScreens/Signup";
import SetFavouriteTopicsScreen from "./screens/AuthScreens/SetFavouriteTopics";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer fallback={<View />}>
      <Stack.Navigator initialRouteName="AppIntro" headerMode="none">
        <Stack.Screen name="AppIntro" component={AppIntroScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen
          name="SetFavouriteTopics"
          component={SetFavouriteTopicsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
