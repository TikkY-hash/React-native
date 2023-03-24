import Post from "../Post";
import axios from "axios";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import {
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";

async function getPosts() {
  const { data } = await axios.get(
    "https://64147a778dade07073c1130a.mockapi.io/posts"
  );

  return data;
}

const LoadingWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const PostContainer = styled.View`
  margin-top: 50px;
`;

const LoadingText = styled.Text`
  margin-top: 15px;
`;

export default PostsWrapper = ({ navigation }) => {
  const { data, isLoading } = useQuery("posts", getPosts);

  if (isLoading)
    return (
      <LoadingWrapper>
        <ActivityIndicator size="large" />
        <LoadingText>Загрузка...</LoadingText>
      </LoadingWrapper>
    );

  return (
    <PostContainer>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getPosts} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Post", {id : item.id})}>
            <Post
              title={item.title}
              url={item.imageUrl}
              date={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </PostContainer>
  );
};
