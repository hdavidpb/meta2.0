import React from "react";
import { RingLoader } from "react-spinners";
import { LoaderContainer } from "./styles";

const LoaderComponent = () => {
  return (
    <LoaderContainer>
      <RingLoader size={55} color="#d721dde6" />
    </LoaderContainer>
  );
};

export default LoaderComponent;
