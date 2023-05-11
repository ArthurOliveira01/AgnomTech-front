import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import TechnologiesPage from "./pages/TechnologiesPage/TechnologiesPage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/technologies" element={<TechnologiesPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}