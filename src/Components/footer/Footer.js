import React from "react";
import "./style.css";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text">Paladiumtechservice Limited</h5>
          <p>
            Address: House of Francis, Room 303, Ile Du Port, Mahe, Seychelle
          </p>
          <p>Phone: +372 81941296</p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2024 Copyright: Paladiumtechserviceltd
    </div>
  </footer>
);

export default Footer;
