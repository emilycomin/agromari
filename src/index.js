import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { initializeApp } from "firebase/app";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const firebaseConfig = {
  apiKey: "AIzaSyDxPAGDx8qXZcuI4cW69zdtC3SY5Wep1UM",
  authDomain: "agromari-653c6.firebaseapp.com",
  projectId: "agromari-653c6",
  storageBucket: "agromari-653c6.appspot.com",
  messagingSenderId: "473044721045",
  appId: "1:473044721045:web:424a99898352d5e55f2a9c",
  measurementId: "G-N681EG5S9H",
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
