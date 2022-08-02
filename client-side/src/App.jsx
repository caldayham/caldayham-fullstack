import React, { Fragment } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import CousinPage from "./pages/CousinPage";

import Page404 from "./pages/Page404";

const App = () => {
  return (
    <BrowserRouter style={{ position: "relative" }}>
      <Header />

      <Fragment>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/about" element={<HomePage />} />
          <Route exact path="/projects" element={<HomePage />} />
          <Route exact path="/thoughts" element={<HomePage />} />
          <Route exact path="/cousins" element={<CousinPage />} />

          <Route exact path="/*" element={<Page404 />} />
        </Routes>
      </Fragment>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
