/** @format */

import React from "react";
import "./Footer.css";

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
              <li> Bucharest, Romania</li>
              <li> 123 Street North East</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4> Social Media</h4>
            <ul className="list">
              <li> Instagram</li>
              <li> Twitter</li>
              <li> Facebook</li>
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
            &copy;{new Date().getFullYear()} Ski Lovers | All rights reserved
            <a
              rel="noreferrer"
              target="_blank"
              href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
            >
              | Terms of Service | Privacy
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
