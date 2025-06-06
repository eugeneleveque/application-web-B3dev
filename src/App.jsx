import React from "react";

//? Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ConfigRoutes from "./routes/ConfigRoutes";
import { BrowserRouter as Router } from "react-router-dom";


//? Global Style

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ConfigRoutes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
