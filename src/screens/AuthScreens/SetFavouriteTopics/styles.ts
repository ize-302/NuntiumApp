import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../../styles/index";

const styles = () => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    },

    grid: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    gridItem: {
      height: getHeight(72),
      borderRadius: 12,
      width: "48%",
      marginBottom: getHeight(16),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    gridItemText: {
      fontFamily: "SF_Medium",
      fontSize: getHeight(16),
    },
  });
};

export default styles;
