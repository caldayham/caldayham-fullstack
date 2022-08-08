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
      <h1>Experiences</h1>
      <p style={{ lineHeight: "30px", paddingTop: "40px" }}>
        I am defining "experiences" as things my environment did to me.
        <br /> An obvious example of an experience under this definition would
        be an item about me recieving college decision letters.
        <br /> I cannot yet think of an inconspicuous item for this definition,
        it is a fairly colloquial one.
      </p>
    </PrimaryContainer>
  );
};

export default ExperiencesPage;
