import React from "react";
import Loader from "../src/index";

import "../src/loader/css/react-spinner-loader.css";

const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
};

export default {
  title: "Bars",
  component: Bars,
};

/** Bars */
export const Bars = (props) => {
  return (
    <div style={center}>
      <Loader width={200} height={200} color="green" type="Bars" />
    </div>
  );
};
