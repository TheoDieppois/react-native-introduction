import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Exercice 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
  },

  headerText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Header;
