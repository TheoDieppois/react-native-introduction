import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Post from "./components/Post/Post";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Exercice 1</Text>
      </View>
      <View style={styles.postList}>
        <Post />
        <Post />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },

  header: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
  },

  headerText: {
    fontSize: 20,
    textAlign: "center",
  },

  postList: {
    flex: 1,
    alignItems: "center",
    gap: 40,
    paddingTop: 30,
  },
});
