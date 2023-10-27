import { StyleSheet, SafeAreaView } from "react-native";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <PostList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
