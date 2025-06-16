import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect, useState } from "react";
import { getTotalArticlesApi } from "../../api/articleApi";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type GetArticleType = {
  category: string;
  comment_cnt: number;
  idx: number;
  image: string;
  like_cnt: number;
  title: string;
};

type PropsOrderByType = {
  orderBy: string;
};

export type RootStackParamList = {
  TotalArticle: undefined;
  ArticleDetail: { id: number };
};

const TotalArticle = ({ orderBy }: PropsOrderByType) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [articles, setArticles] = useState<GetArticleType[]>([]);

  useEffect(() => {
    const fetchTotalArticle = async () => {
      const totalArticleData = await getTotalArticlesApi(orderBy);
      setArticles(totalArticleData);
    };
    fetchTotalArticle();
  }, [orderBy]);

  return (
    <View style={{ flex: 2, paddingTop: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {articles &&
          articles.map((data) => {
            return (
              <TouchableOpacity
                key={data.idx}
                onPress={() =>
                  navigation.navigate("ArticleDetail", { id: data.idx })
                }
              >
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      width: "30%",
                      ...styles.flexCenter,
                    }}
                  >
                    {data.image ? (
                      <Image
                        style={styles.image}
                        source={data.image}
                        contentFit="cover"
                      />
                    ) : (
                      <View
                        style={{
                          ...styles.flexCenter,
                          ...styles.image,
                          backgroundColor: "grey",
                        }}
                      >
                        <Text style={{ color: "white" }}>No Image</Text>
                      </View>
                    )}
                  </View>
                  <View style={{ width: "70%" }}>
                    <Text style={{ fontSize: 15, color: "#757575" }}>
                      # {data.category}
                    </Text>
                    <Text style={{ fontSize: 20, color: "white" }}>
                      {data.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome5
                          name="comment-alt"
                          size={20}
                          color="black"
                        />
                        <Text style={{ paddingLeft: 3 }}>
                          {data.comment_cnt}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginLeft: 5,
                        }}
                      >
                        <Entypo name="heart-outlined" size={23} color="black" />
                        <Text style={{ paddingLeft: 1 }}>{data.like_cnt}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.horizonline}></Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
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
  horizonline: {
    margin: "auto",
    marginTop: 15,
    width: "90%",
    textAlign: "center",
    borderTopWidth: 2,
    borderColor: "#aaa",
  },
});

export default TotalArticle;
