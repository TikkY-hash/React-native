import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PostsWrapper from "./components/PostsWrapper";
import FullPost from "./components/FullPost";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Posts"
          component={PostsWrapper}
          options={{ title: "Посты" }}
        />
        <Stack.Screen
          name="Post"
          component={FullPost}
          options={{ title: "Пост" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
