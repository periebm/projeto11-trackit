import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import { userContext } from "././context/userContext"
import { URL } from "./constants/constants";

function App() {

  const [token, setToken] = useState("")
  const [userImage, setImage] = useState("https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png")
  const [footerPercentage, setPercentage] = useState(0)
  return (

    <BrowserRouter>
      <Menu userImage={userImage} />
      <userContext.Provider value={{token, setToken, URL}}>
        <Routes>
          <Route path="/" element={<HomePage setImage={setImage} />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage setPercentage={setPercentage} />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </userContext.Provider>
      <Footer footerPercentage={footerPercentage} />
    </BrowserRouter>
  );
}

export default App;
