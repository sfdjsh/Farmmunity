import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SelectCrop from "./component/SelectCrop";
import SelectOrderByArticle from "./component/article/SelectOrderByArticle";

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
      <SelectOrderByArticle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212528",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  horizonline: {
    margin: "auto",
    marginTop: 5,
    width: "80%",
    textAlign: "center",
    borderTopWidth: 2,
    borderColor: "#aaa",
    // borderBottom: "1px solid #aaa",
    // lineHeight: "0.1em",
    // margin: "10px 0 20px",
  },
});
