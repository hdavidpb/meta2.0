import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePassword } from "react-icons/md";
import { IForms, ILoginData } from "../../interfaces";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/user/services";
import { RootState } from "../../redux/store";

import { ClipLoader } from "react-spinners";
import * as sc from "./style";
const LoginForm = ({ action }: IForms) => {
  const { loginLoading } = useSelector((store: RootState) => store.user);

  const dispatch = useDispatch();
  const defaultValues: ILoginData = {
    email: "",
    password: "",
  };
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: ILoginData) => {
    console.log(data);
    dispatch(login(data));
  };

  return (
    <sc.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <sc.FieldsContainer>
        <sc.IconContainer>
          <AiOutlineUser color="#5b4f7c" size={18} />
        </sc.IconContainer>
        <input
          type="email"
          placeholder="Usuario"
          {...register("email", {
            required: { value: true, message: "Debe digitar un correo valído" },
          })}
        />
        {errors.email && <sc.ErrorMsg>{errors.email.message}</sc.ErrorMsg>}
      </sc.FieldsContainer>
      <sc.FieldsContainer>
        <sc.IconContainer>
          <MdOutlinePassword color="#5b4f7c" size={18} />
        </sc.IconContainer>
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            required: { value: true, message: "Debe digitar una contraseña" },
          })}
        />
        {errors.password && (
          <sc.ErrorMsg>{errors.password.message}</sc.ErrorMsg>
        )}
      </sc.FieldsContainer>
      <sc.Button type="submit" bg="#5b4f7c" color="#FFFFFF">
        {loginLoading ? (
          <ClipLoader size={15} color="#FFFFFF" />
        ) : (
          "Iniciar sessión"
        )}
      </sc.Button>
      <sc.LinkChange onClick={() => action()}>Registrate</sc.LinkChange>
    </sc.FormContainer>
  );
};

export default LoginForm;
