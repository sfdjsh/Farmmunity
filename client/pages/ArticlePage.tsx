import { View } from "react-native";
import SelectCrop from "../component/SelectCrop";
import SelectOrderByArticle from "../component/article/SelectOrderByArticle";
import { useEffect, useState } from "react";
import TotalArticle from "../component/article/TotalArticle";

const ArticlePage = () => {
  const [selectedCrop, setSelectedCrop] = useState("전체");
  const [orderBy, setOrderBy] = useState("최신순");

  return (
    <View style={{ flex: 1, backgroundColor: "#212528" }}>
      <SelectCrop
        selectedCrop={selectedCrop}
        setSelectedCrop={setSelectedCrop}
      />
      <SelectOrderByArticle orderBy={orderBy} setOrderBy={setOrderBy} />
      <TotalArticle selectedCrop={selectedCrop} orderBy={orderBy} />
    </View>
  );
};

export default ArticlePage;
