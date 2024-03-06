
import './App.css';
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Footer from "./components/Footer";

function App() {
  return (
  <ShoppingCartProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Container>
      <Routes>
        <Route path="/store" element={<Store />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Container>
    <Footer />
  </ShoppingCartProvider>

  )
}

export default App;
