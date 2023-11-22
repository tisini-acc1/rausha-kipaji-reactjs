import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@pages/home/Home";
import Layout from "@pages/layout/layout";
import AboutPage from "@pages/about/AboutPage";
import ScoresPage from "@pages/scores/ScoresPage";
import WinnersPage from "@pages/winners/WinnersPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/scores" element={<ScoresPage />} />
          <Route path="/winners" element={<WinnersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
