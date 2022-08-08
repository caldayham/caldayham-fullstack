import React, { useEffect } from "react";
import { PrimaryContainer } from "../globalstyles";

import { useDispatch } from "react-redux";
import { changePage } from "../redux/currentPageRedux";

const ContactPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("contact"));
    };
    updatePage();
  });

  return (
    <PrimaryContainer>
      <h1>Cal Day Ham's Contact Page</h1>
    </PrimaryContainer>
  );
};

export default ContactPage;
