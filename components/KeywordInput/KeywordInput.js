import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import styles from "./KeywordInput.styles";
import { useImageStore } from "../../store/ImageStore";

const KeywordInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { setKeyword } = useImageStore();

  const loadImage = () => {
    setKeyword(inputValue);
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
    <View style={styles.KeywordInputContainer}>
      <Text style={styles.KeywordInputLabel}>Votre mot clé</Text>

      <TextInput
        style={styles.KeywordInput}
        placeholder="Saisissez un mot clé"
        value={inputValue}
        onChangeText={handleInputChange}
      />

      <TouchableOpacity style={styles.KeywordInputButton} onPress={loadImage}>
        <Text style={styles.KeywordInputButtonLabel}>Charger l'image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KeywordInput;
