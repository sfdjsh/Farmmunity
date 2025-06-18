import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../component/article/TotalArticle";
import { useEffect, useState } from "react";
import { getDetailArticleApi } from "../api/articleApi";

type ArticleDetailRouteProp = RouteProp<RootStackParamList, "ArticleDetail">;
type Props = {
  route: ArticleDetailRouteProp;
};

const ArticleDetailPage = ({ route }: Props) => {
  const [articleData, setArticleData] = useState({});
  const [commentsData, setCommentsData] = useState([]);
  const id = route?.params?.id;

  useEffect(() => {
    const fetchDetailArticle = async () => {
      const DetailArticleData = await getDetailArticleApi(id);
      setArticleData(DetailArticleData.article);
      setCommentsData(DetailArticleData.comment);
    };
    fetchDetailArticle();
  }, [id]);

  console.log("articleData:", articleData);
  console.log(commentsData);

  return (
    <View>
      {articleData && (
        <>
          <Text>{articleData.category}</Text>
          <Text>디테일 페이지 : {id}</Text>
        </>
      )}
    </View>
  );
};

export default ArticleDetailPage;
