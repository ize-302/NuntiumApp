import React, { useState } from "react";
import getGlobalStyles from "../../styles/globalStyles";
import getStyles from "./styles";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { colors, getWidth } from "../../styles";
import Icon from "../Icon";

export const PrimaryCustomTextInput = ({ placeholder, icon }) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [isFocused, setisFocused] = useState(false);

  const handleFocus = () => setisFocused(true);
  const handleBlur = () => setisFocused(false);

  return (
    <View
      style={[
        styles.primaryTextInputStyle,
        {
          borderColor: isFocused ? colors.primary : "transparent",
          backgroundColor: isFocused ? "transparent" : colors.grayLighter,
        },
      ]}
    >
      <Icon
        name={icon}
        color={isFocused ? colors.primary : colors.grayPrimary}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.primaryTextInputArea}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </View>
  );
};

export const PasswordCustomTextInput = () => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();
  const [isFocused, setisFocused] = useState(false);
  const [isVisible, setisVisible] = useState(false);

  const handleFocus = () => setisFocused(true);
  const handleBlur = () => setisFocused(false);

  const toggleVisibility = () => setisVisible(!isVisible);

  return (
    <View
      style={[
        styles.primaryTextInputStyle,
        {
          borderColor: isFocused ? colors.primary : "transparent",
          backgroundColor: isFocused ? "transparent" : colors.grayLighter,
        },
      ]}
    >
      <Icon
        name="lock"
        color={isFocused ? colors.primary : colors.grayPrimary}
      />
      <TextInput
        secureTextEntry={isVisible}
        placeholder="Password"
        style={styles.primaryTextInputArea}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <TouchableOpacity onPress={() => toggleVisibility()}>
        <Icon name="eye" />
      </TouchableOpacity>
    </View>
  );
};
