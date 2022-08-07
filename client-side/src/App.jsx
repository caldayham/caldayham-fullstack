import React, { Fragment, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";

import Page404 from "./pages/Page404";
import { CommandLineInput } from "./globalstyles";

const App = () => {
  const [showingCmdLn, toggleShowingCmdLn] = useState(false);

  return (
    <BrowserRouter style={{ position: "relative" }}>
      <Header />

      <Fragment>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/actions" element={<HomePage />} />
          <Route exact path="/thoughts" element={<HomePage />} />
          <Route exact path="/experiences" element={<HomePage />} />

          <Route exact path="/*" element={<Page404 />} />
        </Routes>
      </Fragment>

      <Footer />
      {showingCmdLn && <CommandLineInput type="text" id="CmdLn" />}

      {document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "c" && e.ctrlKey && e.shiftKey) {
          e.preventDefault();
          e.Handled = true;
          toggleShowingCmdLn(!showingCmdLn);
          document.getElementById("CmdLn").focus();
          console.log(e);
        }
      })}
    </BrowserRouter>
  );
};

export default App;
