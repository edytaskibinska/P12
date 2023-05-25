import { Layout } from "../layout";

import { Dashboard, Page404 } from "../pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { routerArray } from "./routerArray";
import { Outlet } from "react-router-dom";

const Root = () => {
  return <Layout menu={routerArray} content={<Outlet />} />;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index path="/:userId" element={<Dashboard />} />
      <Route path="accueil" element={<Page404 />} />
      <Route path="profil" element={<Page404 />} />
      <Route path="reglages" element={<Page404 />} />
      <Route path="communaute" element={<Page404 />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

export default Root;

//DOING
