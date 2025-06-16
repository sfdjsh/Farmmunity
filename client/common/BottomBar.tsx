import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ArticlePage from "../pages/ArticlePage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ArticleNavigator from "../navigator/ArticleNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  const isLogin = true;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#212528",
        },
        tabBarInactiveTintColor: "white",
      }}
    >
      {isLogin ? (
        <>
          <Tab.Screen
            name="home"
            component={ArticleNavigator}
            options={({ route }) => {
              const routeName =
                getFocusedRouteNameFromRoute(route) ?? "TotalArticle";
              return {
                title: "홈",
                tabBarIcon: ({ color }) => (
                  <Entypo
                    name="home"
                    size={24}
                    color={routeName === "TotalArticle" ? color : "white"}
                  />
                ),
                tabBarActiveTintColor:
                  routeName === "TotalArticle" ? "#007AFF" : "white",
              };
            }}
          />
          <Tab.Screen
            name="profile"
            component={ProfilePage}
            options={{
              title: "내 프로필",
              tabBarIcon: ({ color }) => (
                <Ionicons name="person" size={24} color={color} />
              ),
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="login"
            component={LoginPage}
            options={{
              title: "로그인",
              tabBarIcon: ({ color }) => (
                <AntDesign name="login" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="signup"
            component={SignupPage}
            options={{
              title: "회원가입",
              tabBarIcon: ({ color }) => (
                <MaterialIcons
                  name="person-add-alt-1"
                  size={24}
                  color={color}
                />
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default BottomBar;
