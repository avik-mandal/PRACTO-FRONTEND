import React from "react";
import HeaderFooter from "../components/headerfooter";
import { Container } from "../styled";
import IconButtons from "../components/materialui/IconButtons";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import history from "../utils/createHistory";

const Feedback = () => {
  return (
    <HeaderFooter>
      <IconButtons
        width="50px"
        height="30px"
        color="black"
        tooltipTitle="Back"
        tooltipPlacement="right"
        onClick={() => {
          history.goBack();
        }}
      >
        <KeyboardBackspaceIcon fontSize="large" />
      </IconButtons>
      <Container align="center" height="100%" justify="center">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeK3RwtmXGOfD-ns5R4dWQ9z5-DGKXzxfdr2NzSw-x0l4gI1Q/viewform?embedded=true" width="640" height="1057" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </Container>
    </HeaderFooter>
  );
};

export default Feedback;
