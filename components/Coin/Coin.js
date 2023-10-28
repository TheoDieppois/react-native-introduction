import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./Coin.styles";

const Coin = ({
  coinName,
  coinSymbol,
  coinImage,
  coinGraph,
  coinValue,
  coinVariation,
}) => {
  return (
    <View style={styles.coin}>
      <View style={styles.coinInfo}>
        <Image source={coinImage} style={styles.coinImage} />

        <View>
          <Text style={styles.coinName}>{coinName}</Text>
          <Text style={styles.coinSymbol}>{coinSymbol}</Text>
        </View>
      </View>

      <Image source={coinGraph} style={styles.coinGraph} resizeMode="contain" />

      <View style={styles.coinPrice}>
        <Text style={styles.coinValue}>{coinValue}</Text>

        <View style={styles.coinVariation}>
          <Ionicons name="arrow-up" size={12} color="green" />
          <Text style={styles.coinVariationValue}>{coinVariation}</Text>
        </View>
      </View>
    </View>
  );
};

export default Coin;
