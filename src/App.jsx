import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPageLayout from "./layouts/MainPageLayout";
import MainPage from "./pages/MainPage";
import ProductDetails from "./pages/ProductsDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainPageLayout />}>
          <Route index element={<MainPage />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
