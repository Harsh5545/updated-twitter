import React from "react";
import style from "./styled.module.css";

function CustomButton({ buttonText }) {
  return <button className={style.btn}>{buttonText}</button>;
}

export default CustomButton;
