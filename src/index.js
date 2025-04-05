import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>

      <App />

      <ToastContainer
        theme="dark"
        toastClassName={" max-w-[360px]  "}
        bodyClassName={() =>
          "text-sm font-white  font-med block p-3  w-full flex flex-row-reverse  gap-2  justify-start  max-w-[360px] "
        }
        position="top-right"
        autoClose={2000}
      />
   
  </BrowserRouter>
);

reportWebVitals();
