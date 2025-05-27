import React, { lazy } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Header } from "./components/Header/Header";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;