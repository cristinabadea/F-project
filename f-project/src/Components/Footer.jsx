import React from "react";
import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram,
//   faFacebook,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faLocationArrow,
//   faAddressBook,
//   faAddressCard,
// } from "@fortawesome/free-solid-svg-icons";

// const element1 = <FontAwesomeIcon icon={faLocationArrow} />;
// const element2 = <FontAwesomeIcon icon={faAddressBook} />;
// const element3 = <FontAwesomeIcon icon={faAddressCard} />;
// const element4 = <FontAwesomeIcon icon={faInstagram} />;
// const element5 = <FontAwesomeIcon icon={faTwitter} />;
// const element6 = <FontAwesomeIcon icon={faFacebook} />;

class Footer extends React.Component {
  render() {
    return (
      <div className="main-footer">
        {/* First row */}
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Company Details</h4>
            <ul className="list">
              <li>1213-678-344</li>
              <li>  Bucharest, Romania</li>
              <li>  123 Street North East</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4> Social Media</h4>
            <ul className="list">
              <li>  Instagram</li>
              <li> Twitter</li>
              <li>  Facebook</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4> Web</h4>
            <ul className="list">
              <li> SkiLovers.uk</li>
              <li> SkiLovers.ro</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        {/* Second row */}
        <div className="row">
          <div className="col-sm">
            &copy;{new Date().getFullYear()} Company Name | All rights reserved
            | Terms of Service | Privacy
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
