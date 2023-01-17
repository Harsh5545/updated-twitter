import React from "react";
import style from "./Login.module.css";
import CustomButton from "../../Atom/CustomButton";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { FaTwitter } from "react-icons/fa";
import Google from "../images/google.png";
import Input from "../../Atom/Input";

function Login() {
  const button1 = () => {
    alert("this is google");
  };
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <FaTwitter className={style.logo} />
        <div className={style.text}>
          <h1>Sign in to Twitter</h1>
        </div>

        <CustomButton
          buttonText="Sign in with Google"
          className={style.btn1}
          handaleclick={button1}
          Image={Google}
        ></CustomButton>
        <br />
        <CustomButton
          buttonText="Sign in with Apple"
          className={style.btn1}
          handaleclick={button1}
        ></CustomButton>
        <br />
        <div className={style.input}>
          <h4> phone, email or username</h4>
          <Input />
        </div>
        <br />
        <CustomButton
          buttonText="Next"
          className={style.btn1}
          handaleclick={button1}
        ></CustomButton>
        <br />
        <CustomButton
          buttonText="Forgot Password?"
          style={{ backgroundColor: "black" }}
          handaleclick={button1}
        ></CustomButton>
      </div>
    </div>
  );
}

export default Login;
