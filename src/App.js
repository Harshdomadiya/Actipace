import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home";
import Navbar from "./Navbar";
import Header1 from "./Header1";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header1 />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
