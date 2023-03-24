import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components/native";
import { Navigation } from "./Navigation";

const Container = styled.View`
  flex: 1;
`;

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Navigation />
      </Container>
    </QueryClientProvider>
  );
}
