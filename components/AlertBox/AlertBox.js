import { View, Text } from "react-native";
import styles from "./AlertBox.styles";
import { useAlertStore } from "../../store/AlertStore";

const AlertBox = () => {
  const { isOpen } = useAlertStore();

  if (!isOpen) return null;

  return (
    <View style={styles.alertBox}>
      <View style={styles.alertBoxContent}>
        <Text style={styles.alertBoxTitle}>This is an alert box!</Text>
        <Text style={styles.alertBoxDescription}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    </View>
  );
};

export default AlertBox;
