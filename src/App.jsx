import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header";
import Home from "./components/Home";
import About from "./components/About";
import Auctions from "./components/Auctions";
import Blog from "./components/Blog";
import Poccreators from "./components/Poccreators";
import Products from "./components/Products";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfiles from "./components/Userprofiles";
import Footer from "./shared/Footer";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <Routes>
        <Route path ="/" index element={<Home/> } />
        <Route path="/about" element={<About />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/poccreators" element={<Poccreators />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route path="/userprofiles" element={<UserProfiles />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
