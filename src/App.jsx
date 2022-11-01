import React from "react";
import Shop from "./pages/shop/Shop";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import './App.css'

const App = () => {
  return (
    <div className='container'>
        <Header />
        <Shop />
        <Footer />
    </div>
  );
};

export default App;
