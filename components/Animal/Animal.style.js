import { StyleSheet } from "react-native";

export default StyleSheet.create({
  animal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 30,
  },

  animalImage: {
    width: "100%",
    height: 200,
    marginBottom: 5,
  },

  animalName: {
    fontSize: 25,
    fontWeight: "bold",
  },

  animalAge: {
    fontSize: 20,
  },

  btn: {
    backgroundColor: "#191830",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },

  btnLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
