import React from "react";
import logo from "../assets/logo2.PNG";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-container-footer ">
        <div className="row rows justify-content-around">
          <div className="col-10 col-xs-10 cols1 col-sm-2 h-2 col-md-5 col-lg-3 cols1">
            <div className="logo">
              <img src={logo} />
            </div>

            <p style={{ width: "100%" }}>
              IWACU Resto is a website which allow the customer to know the
              loacation of restaurant in Kigali city
              <a href=""> @Nyarugenge</a> and <a href="">Kicukiro</a> and{" "}
              <a href="">Gasabo</a>
            </p>

            <div className="footer-icon" style={{ alignItems: "center" }}>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="social"
                  style={{ background: "#3B5998", marginLeft: "50px" }}
                />
              </a>
              <a href="https://twitter.com/igirerwandaorg">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social"
                  style={{ background: "#55ACEE" }}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  className="social"
                  icon={faGooglePlusG}
                  style={{ background: "#DD4B39" }}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  className="social"
                  icon={faLinkedinIn}
                  style={{ background: "#0976B4" }}
                />
              </a>
            </div>
          </div>
          <div className="col-10 col-xs-10 col-sm-2 col-md-5 col-lg-2 px-4 cols2 ">
            <h1>
              Navigation{" "}
              <hr style={{ height: "2px", color: "white", width: "35%" }} />{" "}
            </h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutUS">Location</a>
              </li>
              <li>
                <a href="/aweprogram">Reservation</a>
              </li>
              <li>
                <a href="/blogs">Menu</a>
              </li>
              <li>
                <a href="/Contactus">Order Online</a>
              </li>
            </ul>
          </div>
          <div className="col-10 col-xs-10 col-sm-2 col-md-5 col-lg-3 cols4 ">
            <h1>
              Reach out:
              <hr style={{ height: "2px", color: "white", width: "20%" }} />
            </h1>

            <p>
            
              <FontAwesomeIcon icon={faHome} style={{ fontSize: "16px" }} />
              &nbsp;&nbsp;&nbsp;Kigali, KN 3
            </p>
            <p>
             
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                style={{ fontSize: "16px" }}
              />
              &nbsp;&nbsp;&nbsp;iwacuresto@gmail.com
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: "16px" }} />
              &nbsp;&nbsp;&nbsp;<a href="tel:0785627690">+250 786 677 287</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPrint} style={{ fontSize: "16px" }} />
              &nbsp;&nbsp;&nbsp;<a href="tel:0785627690">+1(100) 816-7876</a>
            </p>
          </div>
          <hr className="big-line" />
          <div className="sub-footer">
            <p style={{ margin: "0 auto", alignItems: "center" }}>
              &copy; 2023 Copyright: <a href="">IWACU Resto</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
