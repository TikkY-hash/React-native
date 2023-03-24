import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  margin-right: 10px;
`;

const PostContentContainer = styled.View`
  justify-content: center;
  flex: 1;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + "...";
  }

  return str;
};

export default Post = ({ url, title, date }) => (
  <PostView>
    <PostImage
      source={{
        uri: url,
      }}
    />
    <PostContentContainer>
      <PostTitle>{truncateTitle(title)}</PostTitle>
      <PostDate>{date && new Date(date).toLocaleDateString()}</PostDate>
    </PostContentContainer>
  </PostView>
);
