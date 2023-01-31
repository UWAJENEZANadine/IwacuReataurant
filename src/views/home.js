import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import Footer from "../components/footer";
import bgImage from "../assets/img.PNG";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import Header from "../components/header";
const Home = () => {
  return (
    <>
      <Header></Header>
      <section>
        <div className="body-backround">
          <img src={bgImage} style={{ width: "100%", height: "60vh" }} />
          <figcaption>
            <a href="" className="body-backround-figcapt">
              You are welcome
            </a>
          </figcaption>
        </div>
      </section>
      <section className="section2">
        <div className="body-images">
          <div className="body-image1">
            <h1>Nyarugenge</h1>
            <a href="">
              <img src={pic2} />
            </a>
          </div>
          <div className="body-image1">
            <h1>Kicukiro</h1>
            <a href="">
            
              <img src={pic1} />
            </a>
          </div>
          <div className="body-image1">
            <h1>Gasabo</h1>
            <a href="">
              <img src={pic3} />
            </a>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Home;
