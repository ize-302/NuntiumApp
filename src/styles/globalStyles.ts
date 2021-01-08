import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "./index";

const styles = () => {
  return StyleSheet.create({
    safeArea: {
      height: "100%",
      paddingTop: "10%",
      flex: 1,
      backgroundColor: "#fff",
    },
    scrollView: {
      height: "100%",
      backgroundColor: "#fff",
    },
    container: {
      paddingHorizontal: getWidth(20),
    },
    pageTitle: {
      fontFamily: "SF_Bold",
      fontSize: getHeight(24),
      lineHeight: getHeight(32),
      fontWeight: "600",
      color: colors.blackPrimary,
      marginTop: getHeight(50),
    },
    pageSubHeading: {
      marginTop: getHeight(10),
      fontFamily: "SF_Regular",
      fontSize: getHeight(16),
      lineHeight: getHeight(24),
      fontWeight: "400",
      color: colors.grayPrimary,
      marginBottom: getHeight(32),
    },
  });
};

export default styles;
