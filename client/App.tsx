import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomBar from "./common/BottomBar";

export default function App() {
  return (
    <NavigationContainer>
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
        <BottomBar />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212528",
  },
});
