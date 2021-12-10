import React from "react";
import "./body_style.css";
import Body_form from "./body_form";
import Title_desc from "./title_desc";
import { Container } from "@mui/material";

function Body() {
  return (
    <div className="body">
      <Container>
        <div className="align">
          <Title_desc />
          <Body_form />
        </div>
      </Container>
    </div>
  );
}

export default Body;
