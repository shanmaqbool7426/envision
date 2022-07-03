import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/Index.js";
import "./App.css";
import { CLIENT_ID } from "./config";
import { PersistGate } from "redux-persist/lib/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
  <Provider store={store}>
  <PersistGate persistor={ persistor }>
    <BrowserRouter basename={"/"}> 
      <AppRoute />
    </BrowserRouter>
    </PersistGate>
  </Provider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
