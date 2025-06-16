import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../component/article/TotalArticle";

type ArticleDetailRouteProp = RouteProp<RootStackParamList, "ArticleDetail">;
type Props = {
  route: ArticleDetailRouteProp;
};

const ArticleDetailPage = ({ route }: Props) => {
  const id = route?.params?.id;
  console.log(id);

  return (
    <View>
      <Text>디테일 페이지 : {id}</Text>
    </View>
  );
};

export default ArticleDetailPage;
