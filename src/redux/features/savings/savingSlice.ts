import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./interface";
import {
  createNewSaving,
  deleteSaving,
  getAllSavingQuotesByYear,
  getAllYearsFromUser,
  updateWeekQuotes,
} from "./services";

const initialState: IInitialState = {
  userYears: [],
  loadingYears: false,
  loadingCreate: false,
  savingQuotesByYearData: {
    savingQuotesByYear: null,
    allQuotes: [],
    totalSaving: 0,
    totalAbonado: 0,
    loadingSavingQuotes: false,
    updateWeeksQuotes: [],
  },
};

export const savingSlice = createSlice({
  name: "savingSlice",
  initialState,
  reducers: {
    setChangeIsCancelQuote: (state, action: PayloadAction<string>) => {
      state.savingQuotesByYearData.savingQuotesByYear?.month.forEach(
        (month) => {
          month.weeks.forEach((week) => {
            if (action.payload === week.id) {
              week.isCancel = !week.isCancel;
            }
          });
        }
      );
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getAllYearsFromUser.pending, (state) => {
      state.loadingYears = true;
    });
    addCase(getAllYearsFromUser.fulfilled, (state, { payload }) => {
      state.loadingYears = false;
      console.log(payload);
      state.userYears = payload!.years;
    });
    addCase(createNewSaving.pending, (state) => {
      state.loadingCreate = true;
    });
    addCase(createNewSaving.fulfilled, (state, { payload }) => {
      state.loadingCreate = false;
    });
    addCase(deleteSaving.fulfilled, (state, { payload }) => {
      const newSavings = state.userYears.filter(
        (saving) => saving.id !== payload!.id
      );
      state.userYears = newSavings;
    });
    addCase(getAllSavingQuotesByYear.pending, (state) => {
      state.savingQuotesByYearData.loadingSavingQuotes = true;
    });
    addCase(getAllSavingQuotesByYear.fulfilled, (state, { payload }) => {
      state.savingQuotesByYearData.loadingSavingQuotes = false;

      payload!.month.sort((a, b) => {
        if (a.monthNumber < b.monthNumber) {
          return -1;
        }
        if (a.monthNumber > b.monthNumber) {
          return 1;
        }
        return 0;
      });

      payload!.month.forEach((mont) => {
        mont.weeks.sort((a, b) => {
          if (a.weekName < b.weekName) {
            return -1;
          }
          if (a.weekName > b.weekName) {
            return 1;
          }
          return 0;
        });
      });
      state.savingQuotesByYearData.savingQuotesByYear = payload!;
      const allQuotes = payload?.month.flatMap((month) => {
        return month.weeks;
      });

      const totalSaving = allQuotes!.reduce(
        (acc, quote) => acc + quote.quotePrice,
        0
      );
      let totalAbonado = 0;
      allQuotes?.forEach((quote) => {
        if (quote.isCancel) {
          totalAbonado += quote.quotePrice;
        }
      });
      state.savingQuotesByYearData.totalSaving = totalSaving;
      state.savingQuotesByYearData.totalAbonado = totalAbonado;
      console.log(totalAbonado);
    });
    // addCase(updateWeekQuotes.pending, (state) => {
    //   state.savingQuotesByYearData.loadingSavingQuotes = true;
    // });
    addCase(updateWeekQuotes.fulfilled, (state, { payload }) => {
      state.savingQuotesByYearData.loadingSavingQuotes = false;
      state.savingQuotesByYearData.updateWeeksQuotes = payload!;
    });
  },
});

export const { setChangeIsCancelQuote } = savingSlice.actions;

export default savingSlice.reducer;
