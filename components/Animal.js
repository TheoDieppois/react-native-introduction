import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useState } from "react";

const Animal = ({ name, initialAge, isDog }) => {
  const [age, setAge] = useState(initialAge);

  return (
    <View
      style={[
        styles.animal,
        {
          borderWidth: !isDog ? 1 : 0,
        },
      ]}
    >
      {isDog ? (
        <Image
          source={require("../assets/dog.jpg")}
          style={styles.animalImage}
        />
      ) : (
        <Image
          source={require("../assets/cat.jpg")}
          style={styles.animalImage}
        />
      )}
      <Text style={styles.animalName}>{name}</Text>
      <Text style={styles.animalAge}>Age : {age}</Text>

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
    backgroundColor: "#eee",
    width: 280,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 30,
  },

  animalImage: {
    width: "100%",
    height: 200,
    marginBottom: 5,
  },

  animalName: {
    fontSize: 25,
    fontWeight: "bold",
  },

  animalAge: {
    fontSize: 20,
  },
});

export default Animal;
