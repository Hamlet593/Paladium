import React from "react";
import { useEffect } from "react";
import "./style.css";

function Footer () {

return(
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text">Paladiumtechservice Limited</h5>
          <p>49 Al Tatawwur St - Al Khalidiyah - W9 Abu Dhabi, UAE</p>
          <p>House of Francis, Ile du Port, Mahe</p>
          <p>Email: info@paladiumtechserviceltd.com</p>
          <p>Phone: +971 52 725 68 19</p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2023 Copyright: Paladiumtechserviceltd
    </div>
  </footer>
)
}
 

export default Footer;
