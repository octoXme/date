import React from "react";
import { Fade } from "@material-ui/core";
import InfoBox from "components/info-box";

const HelperText = ({ error, helperText }) => (
  <Fade in={helperText !== undefined && helperText !== null}>
    <div>
      <InfoBox variant={error ? "alert" : "info"}>{helperText}</InfoBox>
    </div>
  </Fade>
);

export default HelperText;
