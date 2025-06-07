import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./shared/header";
import Home from "./components/home";
import About from "./components/about";
import Auctions from "./components/auctions";
import Blog from "./components/blog";
import PocCreators from "./components/poccreators";
import Products from "./components/products";
import UserProfiles from "./components/products";
import Footer from "./shared/footer";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/poccreators" element={<PocCreators />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route path="/userprofiles" element={<UserProfiles />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
