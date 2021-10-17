import React from "react";
import loading from "../../../assets/loading.svg";

const Spinner = () => {
  return (
    <div>
      <img src={loading} alt="loader" />
    </div>
  );
};

export default Spinner;
