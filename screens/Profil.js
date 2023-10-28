import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, Text } from "react-native";

export default function Profil() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Page Profil</Text>
      <Button title="Ouvrir le menu" onPress={() => navigation.openDrawer()} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
