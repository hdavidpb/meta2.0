export interface IInitialState {
  userYears: IYear[];
  loadingYears: boolean;
  loadingCreate: boolean;
  savingQuotesByYearData: {
    savingQuotesByYear: null | ISavingQuotesByYearResponse;
    loadingSavingQuotes: boolean;
    allQuotes: IWeek[];
    totalSaving: number;
    totalAbonado: number;
    updateWeeksQuotes: IWeek[];
  };
}

export interface IYear {
  description: string;
  id: string;
  year: string;
}

export interface ISavingResponse {
  years: IYear[];
}

export interface ICreateSavingResponse {
  id: string;
  monthName: string;
  monthNumber: number;
  weeks: IWeek[];
}

export interface IWeek {
  id: string;
  weekName: string;
  quotePrice: number;
  isCancel: boolean;
}

export interface ISavingQuotesByYearResponse {
  year: string;
  description: string;
  month: IMonth[];
}

export interface IMonth {
  id: string;
  monthName: string;
  monthNumber: number;
  weeks: IWeek[];
}

export interface IWeek {
  id: string;
  weekName: string;
  quotePrice: number;
  isCancel: boolean;
}

export interface updateQuoteData {
  weekId: string;
  isCancel: boolean;
}
