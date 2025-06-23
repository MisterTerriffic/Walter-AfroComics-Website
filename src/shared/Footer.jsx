import React from "react";
const Footer = () => {
  return (
    <div className="footer_design">
      <span>
        <h3>Tha Cr8</h3>
      </span>
      <div className="soc-media-icons">
        <span>
          <Link to="#">
            <FontAwesomeIcon icon="fa-solid fa-inbox" />
          </Link>
        </span>
        <span>
          <Link to="#">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </Link>
        </span>
        <span>
          <Link to="*">
            <FontAwesomeIcon icon="fa-brands fa-bluesky" />
          </Link>
        </span>
        <span>
          <Link to="#">
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
