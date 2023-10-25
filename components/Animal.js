import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useState } from "react";

const Animal = ({ name, initialAge, isDog }) => {
  const [age, setAge] = useState(initialAge);

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

      <Button
        title={`Augmenter l'âge de ${name}`}
        onPress={() => setAge(age + 1)}
      />
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
