import { StyleSheet } from "react-native";

export default StyleSheet.create({
  alertBox: {
    position: "absolute",
    top: 100,
    left: 20,
    right: 20,
    padding: 20,
    backgroundColor: "lightgreen",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "green",
    borderWidth: 2,
  },

  alertBoxContent: {
    alignItems: "center",
  },

  alertBoxTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "green",
  },

  alertBoxDescription: {
    fontSize: 14,
    textAlign: "center",
    color: "green",
  },
});
