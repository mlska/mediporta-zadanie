import '@fontsource/inter';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container } from '@mui/material';

import Header from './components/Header/Header';
import TableSection from './components/TableSection/TableSection';

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
