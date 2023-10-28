import { StyleSheet } from "react-native";

export default StyleSheet.create({
  coin: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },

  coinInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  coinName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  coinSymbol: {
    color: "#aaa",
  },

  coinImage: {
    height: 40,
    width: 40,
  },

  coinGraph: {
    height: 40,
    width: 50,
  },

  coinPrice: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 3,
  },

  coinValue: {
    fontSize: 14,
    fontWeight: "bold",
  },

  coinVariation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#E1F2E1",
    padding: 2,
    borderRadius: 3,
  },

  coinVariationValue: {
    fontWeight: "bold",
    fontSize: 12,
    color: "green",
  },
});
