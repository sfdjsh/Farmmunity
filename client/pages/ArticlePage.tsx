import { View } from "react-native";
import SelectCrop from "../component/SelectCrop";
import SelectOrderByArticle from "../component/article/SelectOrderByArticle";

const ArticlePage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#212528" }}>
      <SelectCrop />
      <SelectOrderByArticle />
    </View>
  );
};

export default ArticlePage;
