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
      <h1>Cal Day Ham's Actions</h1>
    </PrimaryContainer>
  );
};

export default ActionsPage;
