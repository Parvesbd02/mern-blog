import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboute from "./pages/Aboute";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"  element={<Aboute></Aboute>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>} />
        <Route path="/projects" element={<Projects></Projects>} />
        
      </Routes>
    </BrowserRouter>
  );
}
