import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const name = "Bobby";
  const age = 4;
  const isDog = true;

  return (
    <View style={styles.container}>
      <Image
        source={require(isDog ? "./assets/dog.jpg" : "./assets/cat.jpg")}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 20,
        }}
      >
        Age : {age}
      </Text>

      <Text>{isDog ? "🐶" : "🐱"}</Text>
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
