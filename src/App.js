import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {

  const [token, setToken] = useState("")


  return (

    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage setToken={setToken} />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<TodayPage token={token}/>} />
        <Route path="/historico" element={<HistoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
