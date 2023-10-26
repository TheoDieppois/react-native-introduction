import { StyleSheet, View, Text } from "react-native";
import { filters } from "./data";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtres Armada :</Text>

      <View style={styles.filterContainer}>
        {filters.map((filter) => (
          <Text key={filter.id} style={styles.filter}>
            {filter.name}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "95%",
    gap: 7,
  },

  filter: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
