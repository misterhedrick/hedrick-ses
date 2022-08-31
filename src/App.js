import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ClientDetails from "./pages/ClientDetails";
import ItemDetails from "./pages/ItemDetails";

import "./styles/reset.css";
import "./styles/setup.scss";
import AddClient from "./pages/AddClient";
import Login from "./components/Login";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/client/:clientId" element={<ClientDetails />} />
        <Route path="/client/:clientId/:itemId" element={<ItemDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add" element={<AddClient />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      {/* <LoginModal /> */}
    </div>
  );
}

export default App;
