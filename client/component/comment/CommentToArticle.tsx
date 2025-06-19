import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { RouteProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";

type CommentsInfoType = {
  article_idx: number;
  content: string;
  created_at: string;
  idx: number;
  user_idx: number;
};

const CommentToArticle = ({
  commentInfo,
}: {
  commentInfo: CommentsInfoType[];
}) => {
  const [moreTest, setMoreTest] = useState(false);

  return (
    <>
      {commentInfo.length >= 1 &&
        commentInfo.map((data) => {
          return (
            <>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 30,
                  width: "90%",
                  //   height: moreTest && 150,
                }}
              >
                <Image
                  style={styles.profileImg}
                  source="https://i.namu.wiki/i/C4LDZhfBJ-7fCGkJRbj9dA2k26mWeLVjfQzckfYhmJGucYqMr-88nks10Q_DgmkmyHomchcOs6r-HBMedMbWSw.webp"
                  contentFit="cover"
                />
                <View style={{ paddingLeft: 10 }}>
                  <Text style={{ fontSize: 15, color: "grey" }}>닉네임1</Text>
                  <Text style={{ color: "white", fontSize: 20 }}>{data.content}</Text>
                  {/* <TouchableOpacity onPress={() => setMoreTest(!moreTest)}>
                    <Text style={{ color: "grey" }}>
                      {moreTest ? "간략히" : "더 보기"}
                    </Text>
                  </TouchableOpacity> */}
                  <View
                    style={{
                      paddingTop: 5,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "95%",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity>
                        <Entypo name="heart-outlined" size={23} color="red" />
                      </TouchableOpacity>
                      <Text style={{ color: "white", paddingLeft: 5 }}>1</Text>
                    </View>
                    <TouchableOpacity>
                      <Text style={{ color: "red" }}>삭제</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          );
        })}
    </>
  );
};

const styles = StyleSheet.create({
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  verticalline: {
    borderRightWidth: 2,
    borderColor: "#aaa",
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  horizonline: {
    margin: "auto",
    marginTop: 10,
    width: "100%",
    textAlign: "center",
    borderTopWidth: 2,
    borderColor: "#aaa",
  },
});

export default CommentToArticle;
