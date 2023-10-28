import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ImageBox from "./components/ImageBox/ImageBox";
import KeywordInput from "./components/KeywordInput/KeywordInput";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeywordInput />

      <ImageBox />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
