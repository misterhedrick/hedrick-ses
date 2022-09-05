import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ClientDetailsPage from "./pages/ClientDetailsPage";
import EquipmentDetailsPage from "./pages/EquipmentDetailsPage";
import AddClientPage from "./pages/AddClientPage";

import "./styles/reset.css";
import "./styles/setup.scss";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/client/:clientId" element={<ClientDetailsPage />} />
        <Route path="/client/:clientId/:equipmentId" element={<EquipmentDetailsPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/add" element={<AddClientPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;