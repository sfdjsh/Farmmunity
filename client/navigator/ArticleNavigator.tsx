import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticlePage from "../pages/ArticlePage";
import ArticleDetailPage from "../pages/ArticleDetailPage";
import { RootStackParamList } from "../component/article/TotalArticle";

const Stack = createNativeStackNavigator<RootStackParamList>();

const ArticleNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TotalArticle"
        component={ArticlePage}
        options={{ title: "전체 게시글", headerShown: false }}
      />
      <Stack.Screen
        name="ArticleDetail"
        component={ArticleDetailPage}
        options={{ title: "게시글 상세", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ArticleNavigator;
