import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { KanbanContextProvider } from "./context/KanbanContext";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <KanbanContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </KanbanContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
