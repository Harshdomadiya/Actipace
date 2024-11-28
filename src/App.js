import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home";
import Navbar from "./Navbar";
import Header1 from "./Header1";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Product/Product";
function App() {
  return (
    // <div className="App">
    //   <Header1 />
    //   <Navbar />
    //   <Home />
    //   <Footer />
    // </div>
    <Router>
      <Header1 />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/contact" element={<ContactPage />} />  */}
      </Routes>
      <Footer className="absolute bottom-0 w-full" /> 
    </Router>
  );
}

export default App;
