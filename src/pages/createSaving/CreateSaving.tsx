import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ICreateData, ICreateDataSend } from "../../interfaces";
import dayjs from "dayjs";
import { ViewContainer } from "../../style";
import { useDispatch, useSelector } from "react-redux";
import { createNewSaving } from "../../redux/features/savings/services";
import piggyBank from "../../assets/images/piggyBank.svg";
import * as sc from "./styles";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BsPiggyBankFill } from "react-icons/bs";
import { RootState } from "../../redux/store";
import { RingLoader } from "react-spinners";
export const defaultValues: ICreateData = {
  initialMonth: "",
  finalMonth: "",
  year: "",
  totalSaving: "",
  description: "",
};

const CreateSaving = () => {
  const dispatch = useDispatch();
  const [actualDate, setActualDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [minFinalDate, setMinSecondFinalDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );
  const [maxFinalDate, setMaxSecondFinalDate] = useState("");
  const { loadingCreate } = useSelector((store: RootState) => store.saving);
  const { handleSubmit, register, reset, watch } = useForm({
    defaultValues: defaultValues,
  });
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      /**CAPTURE MEDICAMENT CODE */

      if (name === "initialMonth") {
        setMinSecondFinalDate(dayjs(value.initialMonth!).format("YYYY-MM-DD"));

        const yearInstance = String(dayjs(value.initialMonth).get("year"));
        const maxDate = `${yearInstance}-12-31`;
        setMaxSecondFinalDate(maxDate);
        reset({ ...value, finalMonth: "" });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: ICreateData) => {
    console.log(data);

    const dataSend: ICreateDataSend = {
      description: data.description,
      initialMonth: dayjs(data.initialMonth).get("M") + 1,
      finalMonth: dayjs(data.finalMonth).get("M") + 1,
      totalSaving: +data.totalSaving,
      year: String(dayjs(data.initialMonth).get("year")),
    };
    dispatch(createNewSaving(dataSend));
    console.log(dataSend);
    reset();
  };
  return (
    <ViewContainer>
      <sc.CreateSavingContainer>
        <sc.TitleHeader>Crea tu ahorro programado :)</sc.TitleHeader>
        <sc.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <sc.FieldsContainer>
            <BsFillChatSquareTextFill />

            <input
              type="text"
              placeholder="Descripción"
              maxLength={20}
              {...register("description", { required: true })}
            />
          </sc.FieldsContainer>
          <sc.FieldsContainer>
            <BsFillCalendar2DateFill />
            <input
              type="date"
              placeholder="Fecha inicial"
              {...register("initialMonth", { required: true })}
              min={actualDate}
            />
          </sc.FieldsContainer>
          <sc.FieldsContainer>
            <BsFillCalendar2DateFill />
            <input
              disabled={!maxFinalDate}
              type="date"
              placeholder="Fecha final"
              {...register("finalMonth", { required: true })}
              min={minFinalDate}
              max={maxFinalDate}
            />
          </sc.FieldsContainer>
          <sc.FieldsContainer>
            <BsPiggyBankFill />
            <input
              type="number"
              placeholder="Ahorro programado"
              {...register("totalSaving", { required: true })}
            />
          </sc.FieldsContainer>

          <button type="submit">
            {loadingCreate ? (
              <RingLoader color="#FFFFFF" size={20} />
            ) : (
              "Guardar"
            )}
          </button>
        </sc.FormContainer>
        <sc.SvgContainer>
          <img src={piggyBank} alt="piggy" />
          <sc.FraseContainer>
            <p>
              No pongas tu interés en el dinero, pero pon tu dinero a interés
            </p>
            <span>~ Oliver Wendell Holmes</span>
          </sc.FraseContainer>
        </sc.SvgContainer>
      </sc.CreateSavingContainer>
    </ViewContainer>
  );
};

export default CreateSaving;
