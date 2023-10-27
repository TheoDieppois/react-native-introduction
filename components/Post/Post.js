import { View, Text, StyleSheet } from "react-native";

const Post = () => {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Text style={styles.postHeaderTitle}>Mon titre</Text>
      </View>
      <Text style={styles.postDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    width: "90%",
  },

  postHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },

  postHeaderTitle: {
    fontSize: 25,
  },

  postDescription: {
    paddingHorizontal: 20,
    fontSize: 18,
  },
});

export default Post;
