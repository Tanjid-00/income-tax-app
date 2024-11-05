import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Services from "./pages/Services";
import GoFullPage from "./components/GoFullPage";
import TaxCalc from "./pages/services/TaxCalc";
import TaxFile from "./pages/services/taxFiling/TaxFile";
// import TaxFile from "./pages/services/TaxFile";

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
            path="/taxcalc"
            element={
              <ProtectedRoutes>
                <TaxCalc />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/taxfile"
            element={
              <ProtectedRoutes>
                <TaxFile />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
