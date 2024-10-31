import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Services from "./pages/Services";
import TaxCalc from "./components/TaxCalc";
import GoFullPage from "./components/GoFullPage";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GoFullPage>
          <Navbar />
        </GoFullPage>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/services/taxcalc"
            element={
              <ProtectedRoutes>
                <TaxCalc />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
