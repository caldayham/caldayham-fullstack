import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  PrimaryContainer,
  ToggleCollapse,
  ToggleCollapseBody,
  ToggleCollapseTitle,
} from "../globalstyles";
import { changePage } from "../redux/currentPageRedux";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("home"));
    };
    updatePage();
  });

  const [open, setOpen] = useState(false);

  return (
    <PrimaryContainer>
      <h1>Welcome to my public database ui!</h1>

      <ToggleCollapse
        onClick={() => setOpen((prev) => !prev)}
        open={open}
        height="420px"
      >
        <ToggleCollapseTitle open={open}>Page Thoughts</ToggleCollapseTitle>
        <ToggleCollapseBody>
          <p style={{ lineHeight: "30px", paddingTop: "20px" }}>
            This sites primary purpose is to organize my public data accessibly.
            <br />I really appreciate when people who do interesting things
            share their data. It helps me understand how they got there and why.
            <br />I do things I find interesting, so maybe other people will too
            and appreciate this resource.
            <br />
            At the very least I think it's a good thing to take charge of your
            online data and <i>truly</i> own the means of distribution. Your
            hardware, your software, not just AWS and instagram. I know you must
            choose your battles, this is one I enjoy.
            <br />
            <br />
            Finally, be slow to judgement and eager to understand, this applies
            both to my "hot" takes/actions and to my misspelling of words.
            <br />
            (if you see something just make a pull request on github, I will be
            very appreciative).
          </p>
        </ToggleCollapseBody>
      </ToggleCollapse>
    </PrimaryContainer>
  );
};

export default HomePage;
