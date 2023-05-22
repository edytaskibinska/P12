import { RouterProvider } from "react-router-dom";
import { createContext } from "react";
import { router } from "./routes/browserRouter";
// style
import GlobalStyle from "./globalStyles/globalStyle";
import NormalizeStyle from "./globalStyles/normalizeStyle";
import { ThemeProvider } from "styled-components";

export const AppDataContext = createContext([]);

function App() {
  return (
    <ThemeProvider theme={{ mode: "dark" }}>
      <NormalizeStyle />
      <GlobalStyle />
      <RouterProvider className="App" router={router} />;
    </ThemeProvider>
  );
}

export default App;
