import React from "react";

import Login from "../pages/login/Login";
interface IProps {
  isLogin: null | string;
  children: JSX.Element;
}

const ProtectedRoute = ({ isLogin, children }: IProps) => {
  if (!isLogin) {
    console.log(isLogin);
    console.log("No esta logueado");
    return <Login />;
  }

  return children;
};

export default ProtectedRoute;
