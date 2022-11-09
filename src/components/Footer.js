import React from "react";
import SectionHeading from "./SectionHeading";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "rgba(67, 9, 100, 1)" }}
    >
      <div className="px-5 container">
        <SectionHeading title="Contact us" color="white" />
        <div className="columns">
          <p className="title column has-text-white has-text-weight-bold is-8 is-size-1-desktop">
            Have a project in mind? <br /> Let's make it happen
          </p>
          <p
            className="column has-text-white is-4"
            style={{ fontSize: "20px" }}
          >
            22 Lawley Road, Woodstock, 7925,
            <br />
            Cape Town, South Africa
            <br />
            +27 21 469 1500
            <br />
            <span className="is-underlined">enquirie@kingjames.co.za</span>
          </p>
        </div>
        <div className="columns pt-5">
          <div className="column">
            <p className="has-text-white">Terms of service</p>
            <p className="has-text-white">Privacy policy</p>
            <p className="has-text-white">Impressum</p>
          </div>
          <div className="column">
            <p className="has-text-white">Facebook</p>
            <p className="has-text-white">Instagram</p>
            <p className="has-text-white">Twitter</p>
          </div>
          <div className="column">
            <p className="has-text-white">Github</p>
            <p className="has-text-white">Linkedin</p>
            <p className="has-text-white">Teams</p>
          </div>
          <div className="column">
            <p className="has-text-white">Youtube</p>
            <p className="has-text-white">Behance</p>
            <p className="has-text-white">Dribbble</p>
          </div>
          <div
            className="column is-4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p className="has-text-white">Explore open jobs</p>
            <p className="has-text-white">&#169;2000-2022 King James Digital</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
