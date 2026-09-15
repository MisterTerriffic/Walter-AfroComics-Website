import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faBluesky, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div className="footer_design">
      <span>
        <h3>Contact Us</h3>
      </span>
      <div className="soc-media-icons">
        <span>
          <a href="mailto:thecr8@proton.me">
            <FontAwesomeIcon icon={faInbox} style={{color: "#ff2600",}} />
          </a>
        </span>
        <span>
          <Link to="https://www.instagram.com/thecr8comicshop/">
           <FontAwesomeIcon icon={faInstagram} style={{color: "#ff2600",}} />
          </Link>
        </span>
        <span>
          <Link to="https://bsky.app/profile/thecr8.bsky.social">
            <FontAwesomeIcon icon={faBluesky} style={{color: "#ff2600",}} />
          </Link>
        </span>
        <span>
          <Link to="https://www.youtube.com">
            <FontAwesomeIcon icon={faYoutube} style={{color: "#ff2600",}} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
