import styled from "styled-components/native";
import axios from "axios";
import { ActivityIndicator, Text } from "react-native";
import { useQuery } from "react-query";

async function getPosts(id = 0) {
  const { data } = await axios.get(
    `https://64147a778dade07073c1130a.mockapi.io/posts/${id}`
  );

  return data;
}

const FullPostWrapper = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px 50px;
`;

const FullPostImage = styled.Image`
  margin-bottom: 50px;
  border-radius: 50px;
  height: 300px;
  line-height: 24px;
`;

const FullPostText = styled.Text`
  font-size: 16px;
`;

const LoadingWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const LoadingText = styled.Text`
  margin-top: 15px;
`;

export default FullPost = ({ route, navigation }) => {
  const { id } = route.params;
  const { data, isLoading } = useQuery("post", () => getPosts(id));

  if (isLoading)
    return (
      <LoadingWrapper>
        <ActivityIndicator size="large" />
        <LoadingText>Загрузка...</LoadingText>
      </LoadingWrapper>
    );

  navigation.setOptions({ title: data.title });

  return (
    <FullPostWrapper>
      <FullPostImage
        source={{
          uri: data.imageUrl,
        }}
      />
      <FullPostText>{data.text}</FullPostText>
    </FullPostWrapper>
  );
};
