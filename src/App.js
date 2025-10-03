import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './components/nav/nav'
import Button from "./components/button/button";
import Home from './pages/Home/home'
import About from './pages/About/about'
import Contact from './pages/About/contact'
import Login from "./pages/Auth/login";
import Logo from './assest/images/Logo.png'
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Register from "./pages/Auth/register";
import Footer from "./components/footer/footer";
export default function App() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Router>
      <Navbar
        className="!font-english !bg-darkGreen"
        links={links}
       logo={Logo} 
  button={
    <Link to="/login">
      <Button  className="bg-emeraldGreen w-[100px] h-[50px]"  size="lg">Login</Button>
    </Link>
  }
/>

      <div className="!font-english">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </div>
       <Footer />
    </Router>
  );
}
