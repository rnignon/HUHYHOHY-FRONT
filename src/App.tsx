import React from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import MainPage from "./pages/MainPage";
import CrewsPage from "./pages/CrewsPage";
import CrewDetailPage from "./pages/CrewDetailPage";
import CrewFormPage from "./pages/CrewFormPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="crews" element={<CrewsPage />} />
          <Route path="crew/:crewId" element={<CrewDetailPage />} />
          <Route path="crew/form" element={<CrewFormPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
