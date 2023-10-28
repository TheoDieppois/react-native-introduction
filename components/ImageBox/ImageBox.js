import { Image, Text } from "react-native";
import styles from "./ImageBox.styles";
import { useImageStore } from "../../store/ImageStore";

const ImageBox = () => {
  const { keyword } = useImageStore();

  if (!keyword)
    return <Text>Saisissez un mot clé et appuyez sur "Charger l'image"</Text>;

  return (
    <Image
      style={styles.imageBox}
      source={{
        uri: `https://loremflickr.com/320/240/${keyword}`,
      }}
    />
  );
};

export default ImageBox;
