import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home";
import Navbar from "./Navbar";
import Header1 from "./Header1";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Product/Product";
import Award from "./Award/Award";
import About from "./About/About";

import Price from "./Price/Price";
import ExtraPage from "./ExtraPage/ExtraPage";
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
        <Route path="/about" element={<About/>}/>
        <Route path="/award" element={<Award/>}/>
        <Route path="/extrapage" element={<ExtraPage/>}/>
        <Route path="/price" element={<Price/>}/>
        {/* <Route path="/contact" element={<ContactPage />} />  */}
      </Routes> 
      <Footer className="absolute bottom-0 w-full" />
    </Router>
  );
}


export default App;
