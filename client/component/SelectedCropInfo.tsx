import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { getCropsInfoApi } from "../api/crops";

type SelectedCropNameProps = {
  name: string;
};

const SelectedCropInfo = ({ name }: SelectedCropNameProps) => {
  const [cropName, setCropName] = useState("");
  const [cropImage, setCropImage] = useState("");

  useEffect(() => {
    const fetchCropInfo = async () => {
      const cropInfoData = await getCropsInfoApi(name);
      setCropName(cropInfoData.name);
      setCropImage(cropInfoData.image);
    };
    fetchCropInfo();
  });

  return (
    <View style={styles.container}>
      <View style={styles.marginTop10}>
        <Image style={styles.image} source={cropImage} contentFit="cover" />
      </View>
      <Text
        style={{
          ...styles.marginTop10,
          fontWeight: "bold",
          color: "white",
          fontSize: 25,
        }}
      >
        {cropName}
      </Text>
      <Text style={{ ...styles.marginTop10, color: "white", fontSize: 15 }}>
        {cropName === "전체" ? "농작물" : cropName}에 대한 정보들을
        확인해보세요!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  marginTop10: {
    marginTop: 10,
  },
});

export default SelectedCropInfo;
