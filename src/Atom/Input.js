import React, { useState } from "react";
import style from "./styled.module.css";
function Input(type = "text", label) {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className={style.inputContainer}>
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && "filled"} />
    </div>
  );
}

export default Input;
