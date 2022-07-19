import React, { Fragment } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
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

          <Route exact path="/*" element={<Page404 />} />
        </Routes>
      </Fragment>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
