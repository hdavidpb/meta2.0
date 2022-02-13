import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { generateRandomRgb } from "../../assets/resurces/resources";
import LoaderComponent from "../../components/LoaderComponent";

import {
  deleteSaving,
  getAllSavingQuotesByYear,
  getAllYearsFromUser,
} from "../../redux/features/savings/services";
import { RootState } from "../../redux/store";
import { ViewContainer } from "../../style";
import * as sc from "./style";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userYears, loadingYears } = useSelector(
    (store: RootState) => store.saving
  );

  useEffect(() => {
    dispatch(getAllYearsFromUser());
  }, []);

  const handleDeletSaving = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    dispatch(deleteSaving(id));
  };

  const handleGetSavingQuoteDetail = (yearID: string) => {
    navigate(`/savingQuote/${yearID}`);
    dispatch(getAllSavingQuotesByYear(yearID));
  };
  return (
    <ViewContainer>
      <sc.HomeContainer>
        <sc.Title>
          <h6>Mis Ahorros</h6>
        </sc.Title>
        {!loadingYears ? (
          <sc.YearsCardsContainer>
            {userYears.map((saving) => (
              <sc.CardYear
                key={saving.id}
                onClick={() => handleGetSavingQuoteDetail(saving.id)}
              >
                <sc.DeletBtn onClick={(e) => handleDeletSaving(e, saving.id)}>
                  x
                </sc.DeletBtn>
                <img style={{ background: generateRandomRgb() }} alt="" />
                <sc.FooterCard>
                  <h6>{saving.description}</h6>
                  <p>{saving.year}</p>
                </sc.FooterCard>
              </sc.CardYear>
            ))}
          </sc.YearsCardsContainer>
        ) : (
          <LoaderComponent />
        )}
      </sc.HomeContainer>
    </ViewContainer>
  );
};

export default Home;
