import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ButtonWithLabel from "./components/ButtonWithLabel/ButtonWithLabel";
import Coin from "./components/Coin/Coin";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            alert("Menu pressed!");
          }}
        >
          <Ionicons name="menu" size={30} color="#000" />
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.headerGift}
            onPress={() => {
              alert("Gift pressed!");
            }}
          >
            <Ionicons name="gift" size={18} color="#3C5DA9" />
            <Text style={styles.giftTitle}>Get $10</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert("Notifications pressed!");
            }}
          >
            <Ionicons name="notifications-outline" size={25} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/* Balance */}
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.balanceTitle}>Your balance</Text>
            <Text style={styles.balanceValue}>$623.23</Text>
          </View>

          <Image
            source={require("./assets/graphs/Balance-graph.png")}
            style={styles.balanceGraph}
            resizeMode="contain"
          />
        </View>

        {/* Button List */}
        <View style={styles.buttonList}>
          <ButtonWithLabel iconName="add" label="Buy" />
          <ButtonWithLabel iconName="remove-outline" label="Sell" />
          <ButtonWithLabel iconName="arrow-up" label="Send" />
          <ButtonWithLabel iconName="arrow-down" label="Receive" />
          <ButtonWithLabel iconName="ellipsis-horizontal" label="More" />
        </View>

        {/* Watchlist */}
        <View style={styles.watchList}>
          <Text style={styles.watchListTitle}>Watchlist</Text>

          <Coin
            coinName="Bitcoin"
            coinSymbol="BTC"
            coinImage={require("./assets/coins/BTC-icon.png")}
            coinGraph={require("./assets/graphs/BTC-graph.png")}
            coinValue="$31,091.37"
            coinVariation="0.09%"
          />
          <Coin
            coinName="Etherum"
            coinSymbol="ETH"
            coinImage={require("./assets/coins/ETH-icon.png")}
            coinGraph={require("./assets/graphs/ETH-graph.png")}
            coinValue="$1,630.39"
            coinVariation="1.05%"
          />
          <Coin
            coinName="Avalanche"
            coinSymbol="AVAX"
            coinImage={require("./assets/coins/AVALANCHE-icon.png")}
            coinGraph={require("./assets/graphs/AVALANCHE-graph.png")}
            coinValue="$10.35"
            coinVariation="0.97%"
          />
          <Coin
            coinName="Cardano"
            coinSymbol="ADA"
            coinImage={require("./assets/coins/CARDANO-icon.png")}
            coinGraph={require("./assets/graphs/CARDANO-graph.png")}
            coinValue="$0.28"
            coinVariation="3.24%"
          />
          <Coin
            coinName="Polkadot"
            coinSymbol="DOT"
            coinImage={require("./assets/coins/POLKADOT-icon.png")}
            coinGraph={require("./assets/graphs/POLKADOT-graph.png")}
            coinValue="$3.97"
            coinVariation="0.70%"
          />
          <Coin
            coinName="SOLANA"
            coinSymbol="SOL"
            coinImage={require("./assets/coins/SOLANA-icon.png")}
            coinGraph={require("./assets/graphs/SOLANA-graph.png")}
            coinValue="$30.40"
            coinVariation="2.61%"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  headerGift: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#F2F6FD",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  giftTitle: {
    color: "#3C5DA9",
    fontWeight: "bold",
  },

  // Balance
  balanceContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  balanceTitle: {
    fontSize: 14,
    color: "#aaa",
    fontWeight: "bold",
  },
  balanceValue: {
    fontSize: 30,
    fontWeight: "bold",
  },
  balanceGraph: {
    height: 45,
    width: 70,
  },

  // Button List
  buttonList: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  // Watchlist
  watchList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  watchListTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
