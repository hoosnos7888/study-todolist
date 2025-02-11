import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import TodoPage from "./pages/TodoPage";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoPage />
    </ThemeProvider>
  );
}

export default App;
