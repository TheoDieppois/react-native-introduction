import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ButtonWithLabel.styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const Button = ({ iconName, label }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        alert(`${label} pressed!`);
      }}
    >
      <View style={styles.buttonCircle}>
        <Ionicons name={iconName} size={25} color="#fff" />
      </View>

      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
