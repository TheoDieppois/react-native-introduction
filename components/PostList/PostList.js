import { View, StyleSheet } from "react-native";
import Post from "../Post/Post";

const PostList = () => {
  return (
    <View style={styles.postList}>
      <Post />
      <Post />
    </View>
  );
};

const styles = StyleSheet.create({
  postList: {
    flex: 1,
    alignItems: "center",
    gap: 40,
    paddingTop: 30,
  },
});

export default PostList;
