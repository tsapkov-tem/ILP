import React, { lazy } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Header } from "./components/Header/Header";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Learning = lazy(() => import("./pages/Learning/Learning"));
const Community = lazy(() => import("./pages/Community/Community"));
const Path = lazy(() => import("./pages/Path/Path"));

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/learning" element={<Learning/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/path" element={<Path/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;