import "./App.css";

import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import AppLayout from "./Components/AppLayout/AppLayout";

const theme = createTheme({
  // fontFamily: "Roboto, sans-serif",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <AppLayout />
    </MantineProvider>
  );
}

export default App;
