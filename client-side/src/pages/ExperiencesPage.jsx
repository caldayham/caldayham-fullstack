import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PrimaryContainer } from "../globalstyles";
import { changePage } from "../redux/currentPageRedux";

const ExperiencesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("experiences"));
    };
    updatePage();
  });

  return (
    <PrimaryContainer>
      <h1>Cal Day Ham's Experiences</h1>
    </PrimaryContainer>
  );
};

export default ExperiencesPage;
