import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Routes/HomePage";
import { Components } from "./Routes/Components";
import { Progress } from "./Routes/Progress";

export const BrowserRoute = () => {



    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Components" element={<Components/>}/>
            <Route path="/Progress" element={<Progress/>}/>
        </Routes>
    </BrowserRouter>
}
