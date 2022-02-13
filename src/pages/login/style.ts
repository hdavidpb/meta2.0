import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";
interface IProps {
  bg?: "#5b4f7c" | "gray";
  color?: "#FFFFFF" | "black";
}

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  background: url(${bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(5px);
`;

export const LoginBoxContainer = styled.div`
  width: 90%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px white;
  border-radius: 6px;
  box-shadow: 3px 2px 18px #fbf6f6;
`;

export const BackgroundHeader = styled.img`
  width: 100%;
  height: 35%;
`;
export const FormContainer = styled.form({
  position: "relative",
  width: "100%",
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1.5rem",
  background: "#FFFFFF",
});

export const FieldsContainer = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  justifycontent: center;
  alignitems: center;
  transition: all 0.9s;

  & input {
    width: 100%;
    padding: 6px;
    padding-left: 13%;

    box-shadow: 2px 2px 2px #0000003d;
    border-radius: 6px;
    outline: none;
    border: none;
    color: #5b4f7c;
    transition: all 0.4s;
  }

  & input:focus {
    box-shadow: 2px 2px 2px #5b4f7c;
  }
`;

export const ErrorMsg = styled.p`
  position: absolute;
  font-size: 11px;
  color: red;
  bottom: -16px;
  left: 4px;
`;

export const IconContainer = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  left: 4%;
`;
export const Button = styled.button`
  border: none;
  padding: 6px;
  border-radius: 6px;
  text-align: center;
  background: ${({ bg }: IProps) => bg};
  color: ${({ color }: IProps) => color};
  font-size: 15px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LinkChange = styled.p`
  position: absolute;
  font-size: 12px;
  color: #5b4f7c;
  bottom: 3%;
  right: 7%;
  font-weight: bold;
  text-decoration: underline;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    text-shadow: 2px 2px 2px #5b4f7c8c;
  }
`;
