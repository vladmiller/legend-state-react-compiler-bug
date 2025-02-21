import * as ReactDOM from "react-dom/client";
import * as React from "react";
import { App, AppNoMemo } from "./app";


const root = ReactDOM.createRoot(document.body);
root.render(
    <React.StrictMode>
        <App />
        <AppNoMemo />
    </React.StrictMode>
);