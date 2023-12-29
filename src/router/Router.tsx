import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@pages/home/Home";
import Layout from "@pages/layout/layout";
import FaqsPage from "@pages/faqs/FaqsPage";
import AboutPage from "@pages/about/AboutPage";
import GalleryPage from "@pages/gallery/GalleryPage";
import SingleGallery from "@pages/single-gallery/SingleGallery";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:year" element={<SingleGallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
