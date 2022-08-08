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
      <h1>Thoughts</h1>
      <p style={{ lineHeight: "30px", paddingTop: "40px" }}>
        "Thoughts" are very similar to "actions" but they never come to
        fruition, sometimes they don't even need an actionable component.
        <br /> Every action is born from a thought.
        <br /> Every thought is born from an experience.
      </p>
    </PrimaryContainer>
  );
};

export default ThoughtsPage;
