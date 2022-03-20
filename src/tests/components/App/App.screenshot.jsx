import React from "react";
import "../../../index.css";
import App from "../../../App";


export const AppTest = () => (
  <App />
);

AppTest.beforeScreenshot = async element => {
  await new Promise(resolve => setTimeout(resolve, 3000));
};