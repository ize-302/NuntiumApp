import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";
import Navigation from "./src";

const customFonts = {
  SF_Regular: require("./src/assets/SanFranciscoPro/SF-Pro-Display-Regular.otf"),
  SF_RegularItalic: require("./src/assets/SanFranciscoPro/SF-Pro-Display-RegularItalic.otf"),
  SF_Medium: require("./src/assets/SanFranciscoPro/SF-Pro-Display-Medium.otf"),
  SF_Bold: require("./src/assets/SanFranciscoPro/SF-Pro-Display-Bold.otf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <React.Fragment>
      <Navigation />
    </React.Fragment>
  );
}
