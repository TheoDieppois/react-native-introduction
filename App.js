import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>Hello world !</Text>
        <Button title="Click me" onPress={() => alert("Hello world !")} />
        <TextInput
          placeholder="Enter your name"
          style={{
            backgroundColor: "#ccc",
            width: 200,
            height: 30,
          }}
        />

        <ScrollView>
          <Image
            source={require("./assets/dog.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Image
            source={require("./assets/dog.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Image
            source={require("./assets/dog.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Image
            source={require("./assets/dog.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Image
            source={{
              uri: "https://picsum.photos/id/1084/536/354?grayscale",
            }}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
});
