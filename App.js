import { StyleSheet, View } from "react-native";
import Animal from "./components/Animal";

export default function App() {
  return (
    <View style={styles.container}>
      <Animal name={"Bobby"} age={4} isDog={true} />
      <Animal name={"Jack"} age={2} isDog={false} />
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
