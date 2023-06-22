import React, { useState } from "react";
import { Wrapper } from "./style";
import useObservingApi from "../../../../Generic/ObservingApi";

const Observing = () => {
  const { formatData, mapInfo } = useObservingApi();
  return (
    <Wrapper>
      {mapInfo.map((value, index) => {
        return (
          <Wrapper.Item>
            <Wrapper.Title>{value[1]}</Wrapper.Title>
            <Wrapper.Info>{formatData(value[0])}</Wrapper.Info>
          </Wrapper.Item>
        );
      })}
    </Wrapper>
  );
};
export default Observing;
