import { Text, TouchableOpacity } from "react-native";
import styles from "./TriggerButton.styles";
import { useAlertStore } from "../../store/AlertStore";

const TriggerButton = () => {
  const { toggle } = useAlertStore();

  return (
    <TouchableOpacity style={styles.triggerButton} onPress={toggle}>
      <Text style={styles.triggerButtonText}>Toggle Alert</Text>
    </TouchableOpacity>
  );
};

export default TriggerButton;
