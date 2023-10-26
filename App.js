import { StyleSheet, View } from "react-native";
import Animal from "./components/Animal/Animal";

export default function App() {
  return (
    <View style={styles.container}>
      <Animal name={"Bobby"} initialAge={4} isDog={true} />
      <Animal name={"Jack"} initialAge={2} isDog={false} />
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
