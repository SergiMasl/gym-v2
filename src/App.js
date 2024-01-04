import Home from "./components/Home";
import Nav from "./components/nav/Nav";
import AboutUs from "./components/pages/about/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurServices from "./components/pages/ourservices/OurServices";
import Contacts from "./components/pages/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <Contacts /> */}
        <Routes>
          <Route path="/gym-v2/" element={<Home />} />
          <Route path="/gym-v2/about" element={<AboutUs />}></Route>
          <Route path="/gym-v2/contact" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
