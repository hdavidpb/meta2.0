import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { errorNotify } from "../../alerts/alerts";
import LoaderComponent from "../../components/LoaderComponent";
import { updateQuoteData } from "../../redux/features/savings/interface";
import { setChangeIsCancelQuote } from "../../redux/features/savings/savingSlice";
import {
  getAllSavingQuotesByYear,
  updateWeekQuotes,
} from "../../redux/features/savings/services";
import { RootState } from "../../redux/store";
import { ViewContainer } from "../../style";
import * as sc from "./styles";

const SavingQuotesDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams<"id">();
  const {
    loadingSavingQuotes,
    savingQuotesByYear,
    totalAbonado,
    totalSaving,
    updateWeeksQuotes,
  } = useSelector((store: RootState) => store.saving.savingQuotesByYearData);
  const [weeksIds, setWeeksIds] = useState<updateQuoteData[]>([]);

  useEffect(() => {
    dispatch(getAllSavingQuotesByYear(id!));
  }, [id]);

  useEffect(() => {
    if (updateWeeksQuotes.length !== 0) {
      dispatch(getAllSavingQuotesByYear(id!));
    }
  }, [updateWeeksQuotes]);

  const handleChangeUpdateQuotes = (weekId: string, isCancel: boolean) => {
    dispatch(setChangeIsCancelQuote(weekId));

    if (weeksIds.length === 0) {
      setWeeksIds([{ weekId: weekId, isCancel: !isCancel }]);
    } else if (weeksIds.some((week) => week.weekId === weekId)) {
      weeksIds.forEach((week) => {
        if (week.weekId === weekId) {
          week.isCancel = !isCancel;
        }
      });
    } else {
      setWeeksIds([...weeksIds, { weekId: weekId, isCancel: !isCancel }]);
    }
  };
  const handleSaveChanges = () => {
    if (weeksIds.length === 0) {
      errorNotify("No ha seleccionado ningún item! :'(");
      return;
    }
    dispatch(updateWeekQuotes(weeksIds));
  };

  return (
    <ViewContainer>
      {loadingSavingQuotes ? (
        <LoaderComponent />
      ) : (
        <>
          <sc.Description>{`${savingQuotesByYear?.description} - ${savingQuotesByYear?.year}`}</sc.Description>
          <sc.SavingQuotesContainer>
            {savingQuotesByYear?.month.map((month) => (
              <sc.CardQuoteContainer key={month.id}>
                <sc.CardQuotetitle>{month.monthName}</sc.CardQuotetitle>
                <sc.ListQuotesContainer>
                  {month.weeks.map((week) => (
                    <sc.GridQuoteContainer
                      key={week.id}
                      style={{
                        background: week.isCancel ? "#DCFFF2" : "#FFFFFF",
                      }}
                    >
                      <p>{week.weekName}</p>
                      <p>{`$ ${new Intl.NumberFormat("CO-co").format(
                        week.quotePrice
                      )}`}</p>
                      <sc.CheckContainer>
                        <label htmlFor="check"></label>
                        <input
                          checked={week.isCancel}
                          type="checkbox"
                          id="check"
                          onChange={() =>
                            handleChangeUpdateQuotes(week.id, week.isCancel)
                          }
                        />
                      </sc.CheckContainer>
                    </sc.GridQuoteContainer>
                  ))}
                </sc.ListQuotesContainer>
              </sc.CardQuoteContainer>
            ))}
          </sc.SavingQuotesContainer>
          <sc.SaveAbonoContainer>
            <button onClick={handleSaveChanges}>Guardar</button>
          </sc.SaveAbonoContainer>
          <sc.FooterContainer>
            <sc.FooterGridContainer>
              <h1>Ahorro programado</h1>
              <h1>Total Abonado</h1>
            </sc.FooterGridContainer>
            <sc.FooterGridContainer shadow={true}>
              <p>{`$ ${new Intl.NumberFormat("CO-co").format(totalSaving)}`}</p>
              <p>{`$ ${new Intl.NumberFormat("CO-co").format(
                totalAbonado
              )}`}</p>
            </sc.FooterGridContainer>
          </sc.FooterContainer>
        </>
      )}
    </ViewContainer>
  );
};

export default SavingQuotesDetail;
