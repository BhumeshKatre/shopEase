import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import { CgCarousel } from "react-icons/cg";
import LazyLoad from "../components/LazyLoad";
import FashionCategoryList from "../components/FashionCategoryList";

const MainPageLayout = () => {
  return (
    <div>
    <Navbar />
      <main
      className="w-screen">
        <Categories />
        <section >
          <LazyLoad />
     </section>
        <FashionCategoryList  />
      </main>
    </div>
  );
};

export default MainPageLayout;
