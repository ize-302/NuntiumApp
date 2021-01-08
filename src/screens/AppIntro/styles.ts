import { StyleSheet, Platform } from "react-native";
import { colors, getHeight, getWidth } from "../../styles";

const styles = () => {
  return StyleSheet.create({
    content: {
      flexDirection: "column",
      justifyContent: "space-between",
      paddingVertical: getHeight(20),
    },
    dotStyle: {
      backgroundColor: "#aaa",
      width: getWidth(20),
      height: getHeight(8),
    },
    activedotStyle: {
      backgroundColor: colors.primary,
      width: getWidth(20),
      height: getHeight(4),
    },
    dots: {
      width: getWidth(100),
    },
    carouselActionButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
};

export default styles;
