import { useState } from "react";
import { Button, Image, View, Alert, StyleSheet, Text } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

export default function App() {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [imagePreview, setImagePreview] = useState(null);

  const verifyPermissions = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted; // true or false selon la réponse de l'utilisateur
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission refusée",
        "Vous devez autoriser l'accès à la caméra pour pouvoir prendre une photo"
      );

      return false;
    }

    return true;
  };

  const pickImage = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    let result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImagePreview(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Prendre une photo" onPress={pickImage} />
      {imagePreview ? (
        <Image
          source={{ uri: imagePreview }}
          style={{ width: 200, height: 200 }}
        />
      ) : (
        <Text>Aucune image</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
