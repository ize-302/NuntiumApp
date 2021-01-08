import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "./index";

const styles = () => {
  return StyleSheet.create({
    safeArea: {
      height: "100%",
      paddingTop: "10%",
      flex: 1,
    },
    scrollView: {
      height: "100%",
    },
    container: {
      paddingHorizontal: getWidth(20),
    },
  });
};

export default styles;
