import React, { useState } from "react";
import style from "./Register.module.css";
import CustomButton from "../../Atom/CustomButton";

import Input from "../../Atom/Input";
import { Link } from "react-router-dom";
function Register() {
  const [form, Setform] = useState(false);
  const [toggle, setToggle] = useState(false);
  function Form() {
    Setform(true);
  }
  function ToggleEU() {
    setToggle(!toggle);
  }
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <div className={style.mainContainer}>
          {form ? (
            <>
              <div className={style.form}>
                <div>
                  <h1>Create your account</h1>
                </div>
                <div>
                  <Input className={style.input1} placeholder="Name" />
                  <br />
                  <div className={style.toogleData}>
                    {toggle ? (
                      <>
                        <Input className={style.input2} placeholder="Phone" />
                      </>
                    ) : (
                      <>
                        <Input className={style.input2} placeholder="email" />
                      </>
                    )}
                    <span className={style.toggle} onClick={ToggleEU}>
                      {toggle ? (
                        <h6> UseEmail insted </h6>
                      ) : (
                        <h6>UsePhone insted</h6>
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <CustomButton
                    buttonText="Sign up"
                    customCss={style.formbtn}
                  ></CustomButton>
                </div>
              </div>
            </>
          ) : (
            <>
              <p>
                <i class="fa fa-brands fa-twitter"></i>
              </p>
              <h1>Join Twitter today</h1>
              <div>
                <CustomButton
                  icon={<i class="fa fa-brands fa-google"></i>}
                  buttonText="Sign in with google"
                  customCss={style.CustomButton1}
                ></CustomButton>
              </div>
              <br />
              <div>
                <CustomButton
                  icon={<i class="fa fa-brands fa-apple"></i>}
                  buttonText="Sign in with Apple"
                  customCss={style.CustomButton2}
                />
              </div>
              <div className={style.or}>
                <p className={style.line}>__________</p>
                OR
                <p className={style.line}>__________</p>
              </div>
              <div className={style.signupbtn}>
                <CustomButton
                  btnNext={Form}
                  buttonText="sign up with phone number or email"
                  customCss={style.CustomButton2}
                />
                <p>
                  By signing up, you agree to the Terms of Service <br />
                  and Privacy Policy, including Cookie Use.
                </p>
              </div>
              <div className={style.txt2}>
                Have an Account Already..? <Link path="/"> Log in</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
