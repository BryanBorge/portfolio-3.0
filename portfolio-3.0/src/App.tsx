import { AppShell, Box } from "@mantine/core";
import { ContentLayout } from "./ContentLayout";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <AppShell header={{height: 60}}>
      <Header />
      <AppShell.Main>
        <Box>
          <ContentLayout />
        </Box>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}

export default App;
