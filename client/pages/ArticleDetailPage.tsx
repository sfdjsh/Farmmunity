import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../component/article/TotalArticle";
import { useEffect, useState } from "react";
import { getDetailArticleApi } from "../api/articleApi";
import Entypo from "@expo/vector-icons/Entypo";
import CommentToArticle from "../component/comment/CommentToArticle";

type ArticleDetailRouteProp = RouteProp<RootStackParamList, "ArticleDetail">;
type Props = {
  route: ArticleDetailRouteProp;
};

type ArticleInfoType = {
  category: string;
  comment_cnt: number;
  content: string;
  idx: number;
  image: string;
  like_cnt: number;
  title: string;
};

export type CommentsInfoType = {
  article_idx: number;
  content: string;
  created_at: string;
  idx: number;
  user_idx: number;
};

const ArticleDetailPage = ({ route }: Props) => {
  const [articleData, setArticleData] = useState<ArticleInfoType | null>(null);
  const [commentsData, setCommentsData] = useState<CommentsInfoType[]>([]);
  const id = route?.params?.id;

  useEffect(() => {
    const fetchDetailArticle = async () => {
      const DetailArticleData = await getDetailArticleApi(id);
      setArticleData(DetailArticleData.article);
      setCommentsData(DetailArticleData.comment);
    };
    fetchDetailArticle();
  }, [id]);

  return (
    <View style={{ backgroundColor: "#212528", flex: 1 }}>
      <View style={{ width: "90%", marginHorizontal: "auto" }}>
        <View
          style={{ flexDirection: "row", paddingTop: 20 }}
        >
          <Image
            style={styles.profileImg}
            source={articleData?.image}
            contentFit="cover"
          />
          <Text style={{ fontSize: 20, color: "white", paddingLeft: 10, fontWeight:'bold' }}>
            닉네임1
          </Text>
        </View>
        {articleData && (
          <>
            <Text
              style={{
                fontSize: 30,
                color: "white",
                paddingVertical: 20,
                fontWeight: "bold",
              }}
            >
              {articleData.title}
            </Text>
            <Text style={{ fontSize: 20, color: "white" }}>
              {articleData.content}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Entypo name="heart-outlined" size={23} color="red" />
                <Text style={{ color: "white", paddingLeft: 5 }}>
                  {articleData.like_cnt}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  <Text style={{ color: "blue" }}>수정</Text>
                </TouchableOpacity>
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={styles.verticalline}></Text>
                </View>
                <TouchableOpacity>
                  <Text style={{ color: "red" }}>삭제</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.horizonline}></Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 20, color: "white" }}>댓글</Text>
              <Text style={{ fontSize: 20, color: "red", paddingLeft: 5 }}>
                {articleData.comment_cnt}
              </Text>
            </View>
          </>
        )}
        <CommentToArticle commentInfo = {commentsData}/>
      </View>
    </View>
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

export default ArticleDetailPage;
