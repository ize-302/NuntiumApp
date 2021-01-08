import React, { useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import getStyles from "./styles";
import getGlobalStyles from "../../../styles/globalStyles";
import {
  PrimaryCustomTextInput,
  PasswordCustomTextInput,
} from "../../../components/Inputs";
import { PrimaryButton } from "../../../components/Buttons";
import { colors, getHeight } from "../../../styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AltAuth from "../../../components/AltAuth";
import Navigation from "../../..";

const SetFavouriteTopics = ({ navigation }: ScreenProp) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [topics, settopics] = useState([
    {
      name: "🏈   Sports",
      checked: false,
    },
    {
      name: "⚖️   Politics",
      checked: false,
    },
    {
      name: "🌞   Life",
      checked: false,
    },
    {
      name: "🎮   Gaming",
      checked: false,
    },
    {
      name: "🐻   Animals",
      checked: false,
    },
    {
      name: "🌴   Nature",
      checked: false,
    },
    {
      name: "🍔   Food",
      checked: false,
    },
    {
      name: "🎨   Art",
      checked: false,
    },
    {
      name: "📜   History",
      checked: false,
    },
    {
      name: "👗   Fashion",
      checked: false,
    },
  ]);

  const handleToggleCheck = (topicSelected: any) => {
    //  find index
    const artistIndex = topics.findIndex(
      (topic) => topic.name === topicSelected.name
    );
    let topicsCopy = [...topics];
    topicsCopy[artistIndex] = {
      ...topicsCopy[artistIndex],
      checked: !topicsCopy[artistIndex].checked,
    };
    settopics(topicsCopy);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={[globalStyles.container, styles.wrapper]}>
        <View>
          <Text style={globalStyles.pageTitle}>
            Select your favorite topics
          </Text>
          <Text style={globalStyles.pageSubHeading}>
            Select some of your favorite topics to let us suggest better news
            for you.
          </Text>

          <View>
            <View style={styles.grid}>
              {topics.map((topic, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleToggleCheck(topic)}
                    key={index}
                    style={[
                      styles.gridItem,
                      {
                        backgroundColor: topic.checked
                          ? colors.primary
                          : colors.grayLighter,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.gridItemText,
                        { color: topic.checked ? "white" : colors.grayDarker },
                      ]}
                    >
                      {topic.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <PrimaryButton
              text="Next"
              onPress={() => navigation.navigate("")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetFavouriteTopics;
