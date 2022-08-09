import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen, RegisterScreen } from "./screen";
import { Games, News } from "./containers";

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
          <Route path="console" element={<h1>console</h1>} />
          <Route path="esport" element={<h1>esport</h1>} />
          <Route path="lazy-talk" element={<h1>lazy talk</h1>} />
          <Route path="tech-news" element={<h1>tech news</h1>} />
          <Route path="tech-tip" element={<h1>tech tip</h1>} />
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
