import React, { useEffect } from "react";
import { PrimaryContainer } from "../globalstyles";

import { useDispatch } from "react-redux";
import { changePage } from "../redux/currentPageRedux";

const ActionsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("actions"));
    };
    updatePage();
  });

  return (
    <PrimaryContainer>
      <h1>Actions</h1>
      <p style={{ lineHeight: "30px", paddingTop: "40px" }}>
        I am defining "actions" as things I did to my environment.
        <br /> An obvious example of an action under this definition would be an
        item about me applying to college.
        <br /> A not so obvious example would be an item about my animal farming
        escapades. Projects are things I did to my environment.
      </p>
    </PrimaryContainer>
  );
};

export default ActionsPage;
