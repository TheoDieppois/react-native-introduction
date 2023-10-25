import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Animal = () => {
  const name = "Bobby";
  const age = 4;
  const isDog = true;

  return (
    <View style={styles.animal}>
      <Image
        source={require(isDog ? "../assets/dog.jpg" : "../assets/cat.jpg")}
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
};

const styles = StyleSheet.create({
  animal: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Animal;
