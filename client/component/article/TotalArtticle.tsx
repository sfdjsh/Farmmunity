import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect, useState } from "react";
import { getTotalArticlesApi } from "../../api/articleApi";

const TotalArticle = () => {
  const [articles, setArticles] = useState([{}]);

  useEffect(() => {
    const fetchTotalArticle = async () => {
      const totalArticleData = await getTotalArticlesApi();
      setArticles(totalArticleData);
    };
    fetchTotalArticle();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {articles &&
        articles.map((data) => {
          return (
            <>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: "30%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={styles.image}
                    source={data.image}
                    contentFit="cover"
                  />
                </View>
                <View
                  style={{
                    width: "70%",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
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
                      <Text style={{ paddingLeft: 3 }}>{data.comment_cnt}</Text>
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
            </>
          );
        })}
    </ScrollView>
  );
};

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
    marginTop: 15,
    width: "90%",
    textAlign: "center",
    borderTopWidth: 2,
    borderColor: "#aaa",
  },
});

export default TotalArticle;
