import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            enim, quo eos illo reprehenderit ex numquam adipisci, quas nulla
            laborum, velit atque inventore modi! Culpa ipsum porro quisquam
            animi, dolor perferendis! Illo ut aliquam explicabo quia quam
            delectus dolorum omnis deserunt corrupti.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Homw</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy plicy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 9790386679</li>
            <li>periyasamyr6679@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomoto.com - All Right Reserved
      </p>
    </div>
  );
};
