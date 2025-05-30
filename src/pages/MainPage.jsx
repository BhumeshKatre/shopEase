import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import { CgCarousel } from "react-icons/cg";
import LazyLoad from "../components/LazyLoad";
import FashionCategoryList from "../components/FashionCategoryList";
import ElectronicsProducts from "../constants/product_data.json";
import FashionProducts from "../constants/fashion_products.json";

import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import OfferCards from "../components/OfferCards";

const MainPage = () => {
  return (
    <>
        <Categories />
        <LazyLoad />
        <FashionCategoryList />
        <ProductList head="Best of Electronics " Products={ElectronicsProducts} />
        <ProductList head="Fashion Top Deals " Products={FashionProducts} />
        <OfferCards ElectronicsProducts={ElectronicsProducts} FashionCategoryList={FashionProducts} />
    </>
  );
};

export default MainPage;
