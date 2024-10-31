import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>What's the TEAm?</h1>

      <Link to="/reviews">
      <h2>Search for a Team </h2>
      </Link>

    </div>
  );
};

export default Home;