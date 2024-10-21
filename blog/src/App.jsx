import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/navbar";
import {useState,useEffect} from "react"
import useFetch from "./hooks/useFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import BlogDetails from "./BlogDetails";

const App = () => {

  return (
    <BrowserRouter>
      <div className="bg-tiffany-300">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<h1>Error page not found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
   );
} 

export default App;