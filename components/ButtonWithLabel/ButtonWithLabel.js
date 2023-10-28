import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./ButtonWithLabel.styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const Button = ({ iconName, label }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        Alert.alert(`${label} pressed!`, `This is a "${label}" button!`);
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
