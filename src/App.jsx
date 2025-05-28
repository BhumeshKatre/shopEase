import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPageLayout from './layouts/MainPageLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainPageLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
