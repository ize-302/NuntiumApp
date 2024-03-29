import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../styles/index";

const styles = () => {
  return StyleSheet.create({
    primaryTextInputStyle: {
      height: getHeight(56),
      width: "100%",
      borderRadius: 12,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getWidth(16),
      borderWidth: 1,
    },
    primaryTextInputArea: {
      fontSize: getHeight(16),
      color: colors.blackPrimary,
      fontFamily: "SF_Medium",
      width: "80%",
      marginLeft: getWidth(24),
    },
  });
};

export default styles;
