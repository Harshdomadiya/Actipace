import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home";
import Navbar from "./Navbar";
import Header1 from "./Header1";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Product/Product";
import About from "./About/About";
import Support from "./Support/Support";
import Login from "./Dealer-Registation/Login";
import Signup from "./Dealer-Registation/Signup";
import ResetPassword from "./Dealer-Registation/ResetPassword";
import NewPassword from "./Dealer-Registation/NewPassword";
import Contact from "./Contact/Contact";
function App() {
  return (
    <Router>
      <Header1 />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer className="absolute bottom-0 w-full" /> 
    </Router>
  );
}

export default App;
