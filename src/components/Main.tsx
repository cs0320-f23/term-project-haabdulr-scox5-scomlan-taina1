import React from "react";
import { Route, Routes } from "react-router-dom";
import MentalHealth from "./MentalHealth.tsx";
import Home from "./Home.tsx";

const Main = () => (
  <Routes>
    <Route path="/" Component={Home}></Route>
    <Route path="/MentalHealth" Component={MentalHealth}></Route>
    {/* <Route path="/Prescription" Component={PrescriptionMedication}></Route> */}
  </Routes>
);

export default Main;
