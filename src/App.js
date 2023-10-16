import "./App.css";
import Header from "./components/header";

import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

import{
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";


function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
             
    </div>
  );
}

export default App;
