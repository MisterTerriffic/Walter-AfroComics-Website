import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BACK_END_URL = "http//localhost:3000";


const Header =({user, setUser}) => {

  //const navigate = useNavigation();

  fetch(`${BACK_END_URL}`, {
    method: "GET",
    headers: {
      "Content-type" : "application/json",
    },
    credentials: "include"
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

  <header className="header_design">
    <h1>Tha Cr8</h1>
    <div className="header-logo">
      <Link to="/">
      <img src ="" alt="#" width="150px" />
      </Link>
    </div>
    <nav className="navbar-design">
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/userprofiles" >User Profiles</Link>
      <Link to="/auction" >Auction</Link>
      <Link to="/blog" >Blog</Link>
      <Link to="/poccreators" >POC Creators</Link>
      <Link to="/products" >Products</Link>
    </nav>
  </header>;
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default Header;
