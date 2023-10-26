import {
  StyleSheet,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Animal from "./components/Animal";

export default function App() {
  //const width = Dimensions.get("window").width;
  //const height = Dimensions.get("window").height;
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Animal name={"Bobby"} initialAge={4} isDog={true} />

      {height > 700 ? (
        <Animal name={"Jack"} initialAge={2} isDog={false} />
      ) : null}
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
