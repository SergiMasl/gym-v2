import Home from "./components/pages/home/Home";
import Nav from "./components/nav/Nav";
import AboutUs from "./components/pages/about/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./components/pages/contacts/Contacts";
import Modal from "./components/nav/modal/ModalNavBar";
import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/gym-v2/" element={<Home openModal={openModal} />} />
          <Route
            path="/gym-v2/about"
            element={<AboutUs openModal={openModal} />}
          ></Route>
          <Route
            path="/gym-v2/contact"
            element={<Contacts openModal={openModal} />}
          ></Route>
        </Routes>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </BrowserRouter>
    </div>
  );
}

export default App;
