import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

const TotalArticle = () => {
  const dummyData = [
    {
      title: "테스트입니다.",
      image: "https://img.hankyung.com/photo/202403/AA.36104679.1.jpg",
      category: "방울토마토",
      commentCnt: 3,
      likeCnt: 3,
    },
    {
      title: "테스트입니다2.",
      image:
        "https://images.mypetlife.co.kr/content/uploads/2021/09/16152032/times-1831237_1280-1024x682.jpg",
      category: "포도",
      commentCnt: 2,
      likeCnt: 2,
    },
    {
      title: "테스트입니다2.",
      image:
        "https://images.mypetlife.co.kr/content/uploads/2021/09/16152032/times-1831237_1280-1024x682.jpg",
      category: "포도",
      commentCnt: 2,
      likeCnt: 2,
    },
    {
      title: "테스트입니다2.",
      image:
        "https://images.mypetlife.co.kr/content/uploads/2021/09/16152032/times-1831237_1280-1024x682.jpg",
      category: "포도",
      commentCnt: 2,
      likeCnt: 2,
    },
    {
      title: "테스트입니다2.",
      image:
        "https://images.mypetlife.co.kr/content/uploads/2021/09/16152032/times-1831237_1280-1024x682.jpg",
      category: "포도",
      commentCnt: 2,
      likeCnt: 2,
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {dummyData &&
        dummyData.map((data) => {
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
                      <Text style={{ paddingLeft: 3 }}>2</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 5,
                      }}
                    >
                      <Entypo name="heart-outlined" size={23} color="black" />
                      <Text style={{ paddingLeft: 1 }}>2</Text>
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
    // borderBottom: "1px solid #aaa",
    // lineHeight: "0.1em",
    // margin: "10px 0 20px",
  },
});

export default TotalArticle;
