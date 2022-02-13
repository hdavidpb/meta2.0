import { createAsyncThunk } from "@reduxjs/toolkit";

import { errorNotify, successNotify } from "../../../alerts/alerts";
import { rest } from "../../../services";
import { ILoginResponse, IUserLogin, IUserRegister } from "./interfaces";

export const createUSer = createAsyncThunk(
  "create-new-user",
  async (data: IUserRegister) => {
    try {
      const res = await rest.post(
        `${process.env.REACT_APP_META}/auth/register`,
        data
      );
      console.log(res.data);
      successNotify("Usuario creado con exito!");
    } catch (error: any) {
      errorNotify(error.response.data.message);

      return error;
    }
  }
);

export const login = createAsyncThunk(
  "logij-meta",
  async (data: IUserLogin) => {
    try {
      const res = await rest.post<ILoginResponse>(
        `${process.env.REACT_APP_META}/auth/login`,
        data
      );
      console.log(res.data.access_token);
      localStorage.setItem("access", res.data.access_token);
      successNotify("Bienvenid@!");
      return res.data;
    } catch (error: any) {
      console.log(error);
      if (error.response.data.message === "invalid credentials") {
        errorNotify("Usuario o contraseña invalido");
        return error.response.data.message;
      }
    }
  }
);
