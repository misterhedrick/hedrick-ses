import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ClientDetails from "./pages/ClientDetails";
import ItemDetails from "./pages/ItemDetails";

import "./styles/reset.css";
import "./styles/setup.scss";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/client/:clientId" element={<ClientDetails />} />
        <Route path="/client/:clientId/:itemId" element={<ItemDetails />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
