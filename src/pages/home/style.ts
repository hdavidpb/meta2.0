import styled from "styled-components";

import bgHome from "../../assets/images/bg-home.jpg";

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  background: url("https://media.istockphoto.com/vectors/neon-light-cash-money-line-icon-banking-currency-sign-dollar-or-usd-vector-id1310171499?b=1&k=20&m=1310171499&s=170667a&w=0&h=Vx66XgdCZVRbUy9PI3HPoFmhiS2sSXxQJQPhk-aIH8c=")
    no-repeat center center/cover;
`;

export const Title = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  padding: 10px;
  color: black;
  font-weight: 600;
  top: -12%;
  right: -7%;
  border-radius: 15px;
  transform: rotate(-21deg);
  background: purple;
  color: #ffffff;
  box-shadow: 0 0 2px 2px #00000047;
  & h6 {
    position: absolute;
    left: 6%;
    bottom: 41px;
    font-size: 1.2rem;
    transform: rotate(20deg);
  }
`;

export const YearsCardsContainer = styled.div`
  margin-top: 8rem;
  width: 100vw;
  height: 66vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  overflow-y: scroll;
  gap: 1.2rem;
  padding: 6px;
`;

export const CardYear = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
  height: 138px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 2px 2px 2px #38042e54;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;
  box-shadow: 0 0 14px 8px white;

  & img {
    height: 50%;
    width: 100%;
    background: white;
    border-radius: 12px 12px 0 0;

    /* background: url(${bgHome});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(5px); */
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const DeletBtn = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #ffffff;
  font-weight: 600;
  background: #ff00009c;
  z-index: 50;
  border: none;
`;
export const DeletContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FooterCard = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 6px;

  & h6 {
    width: 100%;
    text-align: right;
    font-size: 14px;
    font-weight: 600;
    word-wrap: break-word;
  }

  & p {
    width: 100%;
    text-align: right;
    font-size: 13px;
  }
`;
