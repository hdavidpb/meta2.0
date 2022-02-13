import styled from "styled-components";
interface IProps {
  shadow?: boolean;
}

export const QuotesDetailPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
export const Description = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  color: #c10dcb;
  font-weight: bold;
`;

export const SavingQuotesContainer = styled.div`
  width: 100%;
  height: 67vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
  overflow-y: scroll;
`;

export const CardQuoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const CardQuotetitle = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: white;
  font-weight: bold;
  background: purple;
`;
export const ListQuotesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px;
`;
export const GridQuoteContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 10px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 9px;

  & p {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    word-wrap: break-word;
  }
  &:last-child {
    box-shadow: none;
  }
`;

export const CheckContainer = styled.div`
  margin: auto;
  width: 30px;
  height: 30px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  position: relative;

  & input {
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    --webkit-appearance: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;
    outline: none;

    &:hover {
      background: #a5a5a5;
    }
    &:after {
      font-family: "Font Awesome 5 Free";
      content: "\f00c";
      font-weight: bold;
      font-size: 20px;
      color: #64e85b;
      display: none;
    }

    &:checked {
      background: #f2f2f2;
    }
    &:checked::after {
      display: block;
    }
  }
  /* 
  & input::after {
    font-family: "Font Awesome 5 Free";
    content: "\f00c";
    font-weight: bold;
    font-size: 20px;
    color: #64e85b;
    display: none;
  } */

  & label {
    position: absolute;
    display: none;
    width: 100%;
    height: 100%;
    background: red;
  }
`;

export const SaveAbonoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4%;

  & button {
    border: none;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 21px;
    font-size: 13px;
    background: purple;
    color: #ffffff;
    padding: 6px;
    text-align: center;
    transition: all 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 14px;
`;
export const FooterGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 10px;
  padding: 5px;
  box-shadow: ${({ shadow }: IProps) =>
    shadow ? "0px 3px 6px #00000029" : "none"};
  border-radius: 6px;

  & h1 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #cdcffe 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;
    word-wrap: break-word;
    font-size: 14px;
    padding: 5px;
  }

  & p {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
  }
`;
