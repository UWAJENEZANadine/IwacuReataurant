import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import Footer from "../components/footer";
import bgImage from "../assets/img.PNG";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg"
import Header from "../components/header";
const Home = () => {
  return (
    <>
      <Header></Header>
      <section>
        <div className="body-backround">
          <img src={bgImage} style={{ width: "100%", height: "75vh" }} />
          <figcaption className="body-backround-welcome">
            You are welcome to kigali's <br />{" "}
            <span className="body-backround-resto">Restaurant</span>
            <br />
            <a href="">Rira I kigali</a>
          </figcaption>
        </div>
      </section>
      <section className="container-fluid section2">
        <h1>SERVING FOOD FAST HAPPINESS OF CUSTOMER IS OUR GOAL!</h1>
        <p>
          We cook up bright, bold kigali dishes that are totally unique in
          Vancouver, you won’t find our flavors and colors anywhere else. And we
          serve it all hot, fast and in a format that’s affordable and
          comfortable for urban Vancouverites to enjoy.
        </p>
        <div className="row body-images">
          <div className="col-3 body-image1">
            <h2 className="headings-resto">Nyarugenge</h2>
            <a href="">
              <img src={pic2} />
            </a>
            <h3 className="resto-detail">MONDAY-FRIDAY 7:AM to 12:PM</h3>
            <h3 className="resto-detail">SATURDAY-SUNDAY 8:AM to 10:PM</h3>
            <a href="" className="resto-detail-button">Order Now</a>
          </div>
          <div className="col-3 body-image1">
            <h2 className="headings-resto">Kicukiro</h2>
            <a href="">
              <img src={pic1} />
            </a>
            <h3 className="resto-detail">MONDAY-FRIDAY 7:AM to 12:PM</h3>
            <h3 className="resto-detail">SATURDAY-SUNDAY 8:AM to 10:PM</h3>
            <a href="" className="resto-detail-button">Order Now</a>
          </div>
          <div className="col-3 body-image1">
            <h2 className="headings-resto">Gasabo</h2>

            <a href="">
              <img src={pic3} />
            </a>
            <h3 className="resto-detail">MONDAY-FRIDAY 7:AM to 12:PM</h3>
            <h3 className="resto-detail">SATURDAY-SUNDAY 8:AM to 10:PM</h3>
            <a href="" className="resto-detail-button">Order Now</a>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row final-row">
          <div className="col-6 final-row-col1">
            <h1>Menus</h1>
            <h4>Make your day better by choosing best Restaurant</h4>
            <a href="" className="resto-detail-card">Restaurant</a>
            <a href="" className="resto-detail-card">Food & Drink</a>
          </div>
          <div className="col-6">
          <img src={pic4} style={{width:"100%", height:"67vh"}} />
          </div>
        </div>
      </div>


      <Footer></Footer>
    </>
  );
};

export default Home;
