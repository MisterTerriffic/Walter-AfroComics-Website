import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faBluesky, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div className="footer_design">
      <span>
        <h3>The Cr8</h3>
      </span>
      <div className="soc-media-icons">
        <span>
          <Link to="#">
            <FontAwesomeIcon icon={faInbox} />
          </Link>
        </span>
        <span>
          <Link to="#">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </span>
        <span>
          <Link to="*">
            <FontAwesomeIcon icon={faBluesky} />
          </Link>
        </span>
        <span>
          <Link to="#">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
