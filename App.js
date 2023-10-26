import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <Text
          style={[
            styles.item,
            {
              backgroundColor: "red",
              flex: 4,
            },
          ]}
        >
          1
        </Text>
        <Text
          style={[
            styles.item,
            {
              backgroundColor: "blue",
            },
          ]}
        >
          2
        </Text>
        <Text
          style={[
            styles.item,
            {
              backgroundColor: "green",
            },
          ]}
        >
          3
        </Text>
        <Text
          style={[
            styles.item,
            {
              backgroundColor: "yellow",
            },
          ]}
        >
          4
        </Text>
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

  parent: {
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    height: 300,

    // Flexbox
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    width: 100,
    height: 100,
  },
});
