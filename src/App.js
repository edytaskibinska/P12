import { RouterProvider } from "react-router-dom";
import { createContext } from "react";
import { router } from "./routes/browserRouter";
// style
import GlobalStyle from "./globalStyles/globalStyle";
import NormalizeStyles from "./globalStyles/normalizeStyles";
import { ThemeProvider } from "styled-components";

export const AppDataContext = createContext([]);

function App() {
  return (
    <ThemeProvider theme={{ mode: "dark" }}>
      <NormalizeStyles />
      <GlobalStyle />
      <RouterProvider className="App" router={router} />;
    </ThemeProvider>
  );
}

export default App;
