import styled from "styled-components";

interface IProps {
  close?: boolean;
}

export const SidebarContainer = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: purple;
  position: absolute;
  margin-left: -10%;
  transition: all 0.4s;
  transform: translate(${({ close }: IProps) => (close ? "-99%" : "0")});
  opacity: ${({ close }: IProps) => (close ? "0.8" : "1")};
  z-index: 100;
  padding-top: 2rem;
`;

export const ButtonSlideOpen = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: absolute;
  top: 10px;
  right: -7%;
  border: none;
  outline: none;
  width: 30px;
  height: 30px;
  background: purple;
  border-radius: 0 12px 12px 0;
`;

export const OptionFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.4s;
  & p {
    font-size: 15px;
    color: white;
    font-weight: 600;
  }
  &:hover {
    background: #ffffff33;
  }
`;

export const OptionContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  cursor: pointer;
  transition: all 0.4s;
  & p {
    font-size: 15px;
    color: white;
    font-weight: 600;
  }
  &:hover {
    background: #ffffff33;
  }
`;
