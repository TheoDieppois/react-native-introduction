import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { useState } from "react";
import styles from "./Animal.style";

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
          source={require("../../assets/dog.jpg")}
          style={styles.animalImage}
        />
      ) : (
        <Image
          source={require("../../assets/cat.jpg")}
          style={styles.animalImage}
        />
      )}
      <Text style={styles.animalName}>{name}</Text>
      <Text style={styles.animalAge}>Age : {age}</Text>

      <Text>{isDog ? "🐶" : "🐱"}</Text>

      <TouchableOpacity
        onPress={() => setAge(age + 1)}
        style={styles.btn}
        activeOpacity={0.7}
      >
        <Text style={styles.btnLabel}>Augmenter l'âge de {name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animal;
