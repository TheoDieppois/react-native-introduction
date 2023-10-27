import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonWithIcon = ({ iconName, text }) => {
  return (
    <TouchableOpacity style={styles.buttonWithIcon}>
      <Ionicons name={iconName} size={20} color="black" />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 3,
    paddingHorizontal: 5,
    gap: 5,
  },
});

export default ButtonWithIcon;
