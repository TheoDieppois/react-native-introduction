import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Animal = ({ name, age, isDog }) => {
  return (
    <View style={styles.animal}>
      {isDog ? (
        <Image
          source={require("../assets/dog.jpg")}
          style={{
            width: 200,
            height: 200,
          }}
        />
      ) : (
        <Image
          source={require("../assets/cat.jpg")}
          style={{
            width: 200,
            height: 200,
          }}
        />
      )}
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
