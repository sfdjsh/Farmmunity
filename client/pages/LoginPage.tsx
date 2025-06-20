import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginPage = () => {
  const [idInput, setIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#212528" }}>
      <View
        style={{
          paddingLeft: 10,
          paddingTop: 50,
          width: "90%",
          marginHorizontal: "auto",
        }}
      >
        <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
          로그인
        </Text>
        <Text style={styles.horizonline}></Text>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              paddingBottom: 5,
            }}
          >
            아이디
          </Text>
          <TextInput
            autoFocus={true}
            style={{ backgroundColor: "white", borderRadius: 15 }}
            placeholder="아이디를 입력하세요."
            value={idInput}
            onChangeText={setIdInput}
          />
        </View>
        <View style={{ paddingTop: 30 }}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              paddingBottom: 5,
            }}
          >
            비밀번호
          </Text>
          <TextInput
            style={{ backgroundColor: "white", borderRadius: 15 }}
            placeholder="비밀번호를 입력하세요."
            value={passwordInput}
            onChangeText={setPasswordInput}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={{
            marginTop: 60,
            margin: "auto",
            backgroundColor: "#424B5A",
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
            로그인
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizonline: {
    margin: "auto",
    marginTop: 15,
    width: "100%",
    textAlign: "center",
    borderTopWidth: 2,
    borderColor: "#aaa",
  },
});

export default LoginPage;
