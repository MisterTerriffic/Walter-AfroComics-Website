import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BACK_END_URL = "http//localhost:3000";

const Header = ({ user, setUser }) => {

  // const navigate = useNavigation();

  fetch(`${BACK_END_URL}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("result:>> ", result);
      localStorage.removeItem("user", user);
      setUser({});
    })
    .catch((error) => {
      console.log("error :>>", error);
    });

    return(
  <header className="header_design">
    <div>
      <Link to="/">
        <img
          src="/images/TheCr8_Logo.jpeg" className="header-logo"
          alt="The Cr8 Logo" 
        />
      </Link>
    </div>
    <nav className="navbar-design">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/userprofiles">User Profiles</Link>
      <Link to="/auctions">Auctions</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/poccreators">POC Creators</Link>
      <Link to="/products">Products</Link>
    </nav>
  </header>
    );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default Header;
