import "@fontsource/inter";

import { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Container } from "@mui/material";

import Header from "./components/Header/Header";
import ElementsInput from "./components/ElementsInput/ElementsInput";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import TagsTable from "./components/TagsTable/TagsTable";
import TableSection from "./components/TableSection/TableSection";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="md">
        <Header />
        <TableSection />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
