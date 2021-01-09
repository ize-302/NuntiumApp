import React from "react";
import { Text, SafeAreaView } from "react-native";
import getGlobalStyles from "../../styles/globalStyles";
import getStyles from "./styles";

const Profile = () => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return <SafeAreaView style={globalStyles.safeArea}></SafeAreaView>;
};

export default Profile;
