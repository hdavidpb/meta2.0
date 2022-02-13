import { createAsyncThunk } from "@reduxjs/toolkit";
import { successNotify } from "../../../alerts/alerts";
import { ICreateDataSend } from "../../../interfaces";
import { reloadUnauthorized, rest } from "../../../services";
import {
  ICreateSavingResponse,
  ISavingQuotesByYearResponse,
  ISavingResponse,
  IWeek,
  IYear,
  updateQuoteData,
} from "./interface";

export const getAllYearsFromUser = createAsyncThunk(
  "get-all-savings",
  async () => {
    try {
      const res = await rest.get<ISavingResponse>(
        `${process.env.REACT_APP_META}/saving/years`
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //     "Content-Type": "application/json",
        //   },
        // }
      );
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      reloadUnauthorized(error);
    }
  }
);

export const createNewSaving = createAsyncThunk(
  "create-new-user",
  async (data: ICreateDataSend) => {
    try {
      const res = await rest.post<ICreateSavingResponse>(
        `${process.env.REACT_APP_META}/saving/create`,
        data
      );
      console.log(res.data);
      successNotify("Ahorro programado con exito!");
    } catch (error) {
      console.log(error);
      reloadUnauthorized(error);
      return error;
    }
  }
);

export const deleteSaving = createAsyncThunk(
  "delete-saving",
  async (yearId: string) => {
    try {
      const res = await rest.delete<IYear>(
        `${process.env.REACT_APP_META}/saving/delete/${yearId}`
      );
      successNotify("Ahorro eliminado con exito!");
      console.log(res.data);
      return res.data;
    } catch (error) {
      reloadUnauthorized(error);
      console.log(error);
    }
  }
);

export const getAllSavingQuotesByYear = createAsyncThunk(
  "get-saving-quotes",
  async (yearID: any) => {
    try {
      const res = await rest.post<ISavingQuotesByYearResponse>(
        `${process.env.REACT_APP_META}/saving/quotes/${yearID}`
      );

      console.log(res.data);
      return res.data;
    } catch (error) {
      reloadUnauthorized(error);
      console.log(error);
    }
  }
);

export const updateWeekQuotes = createAsyncThunk(
  "update-saving-week-quotes",
  async (weeksID: updateQuoteData[]) => {
    try {
      const res = await rest.put<IWeek[]>(
        `${process.env.REACT_APP_META}/saving/update-is-cancel-quotes`,
        weeksID
      );
      if (res.data.length === 1) {
        successNotify("Semana Actualiza con exito! :)");
      } else {
        successNotify("Semanas Actualizas con exito! :)");
      }
      console.log(res.data);
      return res.data;
    } catch (error) {
      reloadUnauthorized(error);
      console.log(error);
    }
  }
);
