import React from "react";
import { TouchableOpacity } from "react-native";
import TweetContent from "./TweetContent";
import { useNavigation } from "@react-navigation/native";

const Tweet = ({ tweet }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigate("TweetDetailScreen", { tweet });
      }}
    >
      <TweetContent tweet={tweet} />
    </TouchableOpacity>
  );
};

export default Tweet;
