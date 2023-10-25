import { StyleSheet, View } from "react-native";
import Animal from "./components/Animal";

export default function App() {
  return (
    <View style={styles.container}>
      <Animal />
      <Animal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
