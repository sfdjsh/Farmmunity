import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SelectCrop from "./component/SelectCrop";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <View style={{ backgroundColor: "green", marginTop: 50 }}>
        <Text>에로우 버튼</Text>
      </View> */}
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          🍒Farmmunity🍓
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <SelectCrop />
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
    backgroundColor: "#212528",
  },
});
