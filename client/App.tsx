import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function App() {
  const [test, setTest] = useState("");

  const apiTest = async () => {
    const res = await fetch("http://127.0.0.1:3000/test");
    const data = await res.json();
    setTest(data.test);
  };

  useEffect(() => {
    apiTest();
  }, []);

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ backgroundColor: "green", marginTop: 50 }}>
        <Text>에로우 버튼</Text>
      </View>
      <View style={{ backgroundColor: "blue" }}>
        <Text style={{ fontSize: 30 }}>Farmmunity</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "green" }}>
        <Text>(selectbox)방울 토마토</Text>
        <Image
          style={styles.image}
          source="https://img.hankyung.com/photo/202403/AA.36104679.1.jpg"
          placeholder={{ blurhash }}
          contentFit="cover"
          // transition={1000}
        />
        <Text>(name)방울토마토</Text>
        <Text>방울토마토에 대한 정보들을 확인해보세요!</Text>
      </View>
      <View style={{ backgroundColor: "black" }}>
        <Text style={{ color: "white" }}>최신순</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "white" }}>
        <View>
          <Text>이미지(사진)</Text>
          <View>
            <Text>#해시태그</Text>
            <Text>제목</Text>
            <Text>댓글, 좋아요 이모티콘</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 50,
  },
});
