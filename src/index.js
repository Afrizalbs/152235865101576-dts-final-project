import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen, RegisterScreen } from "./screen";
import {
  Console,
  DetailNews,
  Esport,
  Games,
  LazyTalk,
  News,
  TechNews,
  TechTip,
} from "./containers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route element={<App />}>
          <Route path="/" element={<News />} />
          <Route path="games" element={<Games />} />
          <Route path="console" element={<Console />} />
          <Route path="esport" element={<Esport />} />
          <Route path="lazy-talk" element={<LazyTalk />} />
          <Route path="tech-news" element={<TechNews />} />
          <Route path="tech-tip" element={<TechTip />} />
          <Route path="detail/:id" element={<DetailNews />} />
        </Route>
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
