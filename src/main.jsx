import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
//BrowserRouter
//이렇게 하면 현재 리액트앱의 모든 컴포넌트들이
//현재 브라우저의 주소를 불러와서 쓸수도 있고, 그리고 또 주소의 변화를 감지할수 있다.
