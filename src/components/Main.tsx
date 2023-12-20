import React from "react";
import { Route, Routes } from "react-router-dom";
// import MentalHealth from "./OldMentalHealth.tsx";
import Home from "./Home.tsx";
import MentalHealth from "./pages/MentalHealth.tsx";
import PrimaryCare from "./pages/PrimaryCare.tsx";
import Medicaid from "./pages/Medicaid.tsx";
import UrgentCare from "./pages/UrgentCare.tsx";


const Main = () => (
  <Routes>
    <Route path="/" Component={Home}></Route>
    <Route path="/MentalHealth" Component={MentalHealth}></Route>
    <Route path="/PrimaryCare" Component={PrimaryCare}></Route>
    <Route path="/Medicaid" Component={Medicaid}></Route>
    <Route path="/UrgentCare" Component={UrgentCare}></Route>

    {/* <Route path="/Prescription" Component={PrescriptionMedication}></Route> */}
  </Routes>
);

export default Main;
