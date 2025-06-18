import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './shared/Header';
import Home from './components/Home';
import About from './components/About';
import Auctions from './components/Auctions';
import Blog from './components/Blog';
import PocCreators from './components/Poccreators';
import Products from './components/Products';
import Login from './components/Login';
import SignUp from './components/Signup';
import UserProfiles from './components/Products';
import Footer from './shared/Footer';

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