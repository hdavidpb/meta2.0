import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { IForms, IRegisterData } from "../../interfaces";
import { useForm } from "react-hook-form";
import { errorNotify } from "../../alerts/alerts";
import { useDispatch, useSelector } from "react-redux";
import { createUSer } from "../../redux/features/user/services";

import { RootState } from "../../redux/store";
import { ClipLoader } from "react-spinners";
import { IUserRegister } from "../../redux/features/user/interfaces";
import * as sc from "./style";
export const defaultValues: IRegisterData = {
  email: "",
  password: "",
  repetPassword: "",
  name: "",
  lastName: "",
};

const Register = ({ action }: IForms) => {
  const { loading } = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: IRegisterData) => {
    console.log(data);

    if (data.password !== data.repetPassword) {
      errorNotify("las contraseñas no coinciden");
      return;
    }

    const registerData: IUserRegister = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    dispatch(createUSer(registerData));
    reset();
  };

  return (
    <sc.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <sc.FieldsContainer>
        <sc.IconContainer>
          <AiOutlineUser color="#5b4f7c" size={18} />
        </sc.IconContainer>
        <input
          type="text"
          placeholder="Nombre"
          {...register("name", {
            required: { value: true, message: "debe dijitar el nombre" },
          })}
        />
        {errors.name && <sc.ErrorMsg>{errors.name.message}</sc.ErrorMsg>}
      </sc.FieldsContainer>
      <sc.FieldsContainer>
        <sc.IconContainer>
          <AiOutlineUser color="#5b4f7c" size={18} />
        </sc.IconContainer>
        <input
          type="text"
          placeholder="Apellido"
          {...register("lastName", {
            required: { value: true, message: "debe dijitar su apellido" },
          })}
        />
        {errors.lastName && (
          <sc.ErrorMsg>{errors.lastName.message}</sc.ErrorMsg>
        )}
      </sc.FieldsContainer>
      <sc.FieldsContainer>
        <sc.IconContainer>
          <MdOutlineAlternateEmail color="#5b4f7c" size={18} />
        </sc.IconContainer>
        <input
          type="email"
          placeholder="Correo"
          {...register("email", {
            required: { value: true, message: "debe dijitar un email valido" },
          })}
        />
        {errors.email && <sc.ErrorMsg>{errors.email.message}</sc.ErrorMsg>}
      </sc.FieldsContainer>
      <sc.FieldsContainer>
        <sc.IconContainer>
          <MdOutlinePassword color="#5b4f7c" size={18} />
        </sc.IconContainer>
        <input
          type="text"
          placeholder="Contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "debe dijitar una contraseña valida",
            },
          })}
        />
        {errors.password && (
          <sc.ErrorMsg>{errors.password.message}</sc.ErrorMsg>
        )}
      </sc.FieldsContainer>
      <sc.FieldsContainer>
        <sc.IconContainer>
          <MdOutlinePassword color="#5b4f7c" size={18} />
        </sc.IconContainer>
        <input
          type="text"
          placeholder="Repetir contraseña"
          {...register("repetPassword", {
            required: { value: true, message: "debe repetir la contraseña" },
          })}
        />
        {errors.repetPassword && (
          <sc.ErrorMsg>{errors.repetPassword.message}</sc.ErrorMsg>
        )}
      </sc.FieldsContainer>
      <sc.Button type="submit" bg="gray" color="#FFFFFF">
        {loading ? <ClipLoader size={15} color="#FFFFFF" /> : "Registrate"}
      </sc.Button>
      <sc.LinkChange onClick={() => action()}>Inicia sessión</sc.LinkChange>
    </sc.FormContainer>
  );
};

export default Register;
