import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PrimaryContainer } from "../globalstyles";
import { changePage } from "../redux/currentPageRedux";

const ThoughtsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("thoughts"));
    };
    updatePage();
  });

  return (
    <PrimaryContainer>
      <h1>Cal Day Ham's Thoughts</h1>
    </PrimaryContainer>
  );
};

export default ThoughtsPage;
