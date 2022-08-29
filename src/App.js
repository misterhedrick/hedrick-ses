import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./styles/reset.css";
import "./styles/setup.scss";
import Admin from "./components/Admin";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route path="" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
