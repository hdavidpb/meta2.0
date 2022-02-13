import React, { useEffect } from "react";
import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";

import { ViewContainer } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/SideBarMenu/Sidebar";

const App = () => {
  const { isLogin } = useSelector((store: RootState) => store.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <ViewContainer>
      <Sidebar />
      <Routes />
      <Toaster />
    </ViewContainer>
  );
};

export default App;
