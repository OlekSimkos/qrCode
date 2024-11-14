import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import QrCodeGenerator from "./QrCodeGenerator";
import QrCodeScaner from "./QrCodeScaner";



createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <Layout/>
    </BrowserRouter>
);
