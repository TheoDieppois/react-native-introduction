import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import TweetContent from "../components/TweetContent";

const TweetDetailScreen = () => {
  const route = useRoute();
  const { tweet } = route.params;

  return (
    <View style={styles.container}>
      <TweetContent tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TweetDetailScreen;
