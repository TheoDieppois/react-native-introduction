import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scan, setScan] = useState(false);
  const [scanData, setScanData] = useState("");

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = (result) => {
    const data = result.data;
    setScanData(data);
  };

  const toggleScan = () => {
    if (scan) {
      setScanData("");
    }

    setScan(!scan);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.permissionScreen}>
        <Text>En attente de la permission d'utiliser la caméra</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.permissionScreen}>
        <Text>La permission pour utiliser la caméra a été refusée</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {scan ? (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.scanner}
        />
      ) : (
        <View style={styles.scannerPlaceholder}>
          <Image
            source={require("./assets/qrcode.png")}
            style={styles.scannerPlaceholderImage}
            resizeMode="contain"
          />
        </View>
      )}

      <View style={styles.scanResult}>
        <Text style={styles.scanResultTitle}>
          {scan ? "Résultat du scan :" : "En attente de scan ..."}
        </Text>
        <Text>{scanData}</Text>
      </View>

      <TouchableOpacity style={styles.scanButton} onPress={toggleScan}>
        <Text title={"Scanner un Qrcode"} style={styles.scanButtonText}>
          {scan ? "Fermer le scanner" : "Scanner un Qrcode"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  scanner: {
    width: "100%",
    height: 500,
    backgroundColor: "#191830",
  },

  scannerPlaceholder: {
    width: "100%",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#191830",
  },

  scannerPlaceholderImage: {
    width: 200,
    height: 200,
  },

  scanResult: {
    alignItems: "center",
  },

  scanResultTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },

  scanButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#191830",
    padding: 10,
    marginBottom: 30,
  },

  scanButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  permissionScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
