import { AppShell, Box } from "@mantine/core";
import { ContentLayout } from "./ContentLayout";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <AppShell padding="xl" py="xl">
      <Header />
      <AppShell.Main>
        <Box style={{ flex: 1 }}>
          <ContentLayout />
        </Box>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}

export default App;
