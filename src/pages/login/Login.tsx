import React, { useEffect, useState } from "react";

import LoginForm from "./LoginForm";
import Register from "./Register";
import bg from "../../assets/images/bg.jpg";
import * as sc from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const { isLogin } = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();
  const handleChangeForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <sc.LoginContainer>
      <sc.LoginBoxContainer>
        <sc.BackgroundHeader src={bg}></sc.BackgroundHeader>
        {isLoginForm ? (
          <LoginForm action={handleChangeForm} />
        ) : (
          <Register action={handleChangeForm} />
        )}
      </sc.LoginBoxContainer>
    </sc.LoginContainer>
  );
};

export default Login;
