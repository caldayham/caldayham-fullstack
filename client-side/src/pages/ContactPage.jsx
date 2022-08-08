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
      <h1>Contact</h1>
      <p style={{ lineHeight: "30px", paddingTop: "40px" }}>
        Here is where I will post the best ways to contact me based on what you
        are looking for.
        <br /> Please use the route best specified for the type of inquiry you
        plan to send, unless you think I will be amused, although the
        consequences for incorect judgement are dire.
        <br /> You can also click on the icons to go to external websites where
        I maintain a presence.
      </p>
    </PrimaryContainer>
  );
};

export default ContactPage;
