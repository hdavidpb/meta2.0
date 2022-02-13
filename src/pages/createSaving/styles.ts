import styled from "styled-components";

export const CreateSavingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  position: relative;
`;

export const TitleHeader = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: purple;
  text-align: center;
  font-size: 28px;
`;

export const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  & img {
    width: 150px;
    height: 150px;
    padding-bottom: 12px;
  }
`;

export const FraseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    width: 100%;
    font-size: 13px;
    padding-right: 10px;
    text-align: right;
    font-family: "Dancing Script", cursive;
    color: gray;
    font-weight: 600;
  }

  & span {
    width: 100%;
    text-align: right;
    font-size: 8px;
    padding-right: 10px;
    color: gray;
  }
`;

export const FormContainer = styled.form`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  z-index: 50;

  & button {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    background: purple;
    color: #ffffff;
    border-radius: 4px;
    box-shadow: 2px 2px 2px #2c2a2a2b;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const FieldsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: purple;
  font-size: 16px;

  & input {
    width: 80%;
    padding: 6px;
    border: none;
    outline: none;
    border-radius: 7px;
    box-shadow: 2px 2px 2px #2c2a2a2b;
    color: purple;
    font-size: 13px;
  }
`;
