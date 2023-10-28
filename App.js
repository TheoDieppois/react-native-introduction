import React from "react";
import { View, StyleSheet } from "react-native";
import AlertBox from "./components/AlertBox/AlertBox";
import TriggerButton from "./components/TriggerButton/TriggerButton";

export default function App() {
  return (
    <View style={styles.container}>
      <AlertBox />
      <TriggerButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
