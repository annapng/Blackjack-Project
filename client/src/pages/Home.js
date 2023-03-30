import logo from '../assets/logo.png';
import '../App.css';
import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/footer';

const Home = () => {
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div className="toggleButton">
        <Link className="login" to="/Login">Login/Signup</Link>
      </div>
      <Footer />
      </header>
    </div>
)
}

export default Home;
