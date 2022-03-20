import React from "react";
import Widget from "../../../components/Widget";
import "../../../components/Widget/Widget.css";
import { optionBarMock } from "../../mock/data";

export const WidgetTest = () => (
  <Widget
    option={optionBarMock}
    type={"bar"}
    handleChangeType={() => {}}
    intervalTime={1000}
    handleChangeIntervalTime={() => {}}
  />
);

WidgetTest.beforeScreenshot = async element => {
  await new Promise(resolve => setTimeout(resolve, 1000));
};
