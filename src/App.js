import { RouterProvider } from "react-router-dom";
import { createContext } from "react";
import { router } from "./routes/browserRouter";
import "./globalStyles/normalize.scss";
import "./globalStyles/reset.scss";
import "./globalStyles/global.scss";

export const AppDataContext = createContext([]);

function App() {
  return <RouterProvider className="App" router={router} />;
}

export default App;
