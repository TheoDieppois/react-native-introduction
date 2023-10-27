import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import ButtonWithIcon from "./components/ButtonWithIcon/ButtonWithIcon";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("./assets/img-placeholder.png")}
        style={styles.imageBg}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
        <Text style={styles.author}>By John Doe</Text>

        <View style={styles.buttonContainer}>
          <ButtonWithIcon iconName="thumbs-up-sharp" text="Like" />
          <ButtonWithIcon iconName="chatbox" text="Comment" />
        </View>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          {"\n\n"}
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
          {"\n\n"}
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },

  imageBg: {
    width: "100%",
    height: 350,
  },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  author: {
    marginTop: 10,
    fontSize: 14,
    color: "#666",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 30,
  },

  description: {
    marginTop: 30,
    fontSize: 14,
  },
});
