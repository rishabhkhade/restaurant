import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Nav from "./components/side-nav/Nav";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Payment from "./pages/payment/Payment";
import Order from "./pages/orders/Order";
import Setting from "./pages/settings/Setting";
import Rsnav from "./components/right-side-nav/Rsnav";
import { useState } from "react";

function App() {

const [menuAdd, setMenuAdd] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
        <Rsnav menuAdd={menuAdd}/>
    
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/menu" element={<Menu setMenuAdd={setMenuAdd} menuAdd={menuAdd} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
     
      </BrowserRouter>
    </>
  );
}

export default App;
