import React from "react";
import EchartsWrapper from "../../../components/EchartsWrapper";
import { optionLineMock } from "../../mock/data";

export const EchartsWrapperTest = () => (
  <EchartsWrapper
    option={optionLineMock}
  />
);

EchartsWrapperTest.beforeScreenshot = async element => {
  await new Promise(resolve => setTimeout(resolve, 1000));
};