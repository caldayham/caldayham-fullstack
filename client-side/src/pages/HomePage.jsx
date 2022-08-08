import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PrimaryContainer } from "../globalstyles";
import { changePage } from "../redux/currentPageRedux";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("home"));
    };
    updatePage();
  });

  return (
    <PrimaryContainer>
      <h1>Cal Day Ham's HomePage</h1>
    </PrimaryContainer>
  );
};

export default HomePage;
