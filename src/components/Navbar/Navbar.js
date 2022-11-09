import React, { useState } from "react";
import content from "./content";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  return (
    <nav className="navbar py-2">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={`./assets/images/${content.logo}`}
              alt="Logo"
              style={{ width: "100%" }}
            />
          </Link>
          <span
            className="navbar-burger"
            data-target="navbarMenuHeroA"
            onClick={() => setShowMobile(!showMobile)}
          >
            <span style={{ backgroundColor: "#fff" }}></span>
            <span style={{ backgroundColor: "#fff" }}></span>
            <span style={{ backgroundColor: "#fff" }}></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            {content.links.map((link, index) => (
              <Link
                key={index}
                className="navbar-item has-text-weight-bold"
                to={link.link}
              >
                {link.text}
              </Link>
            ))}
            <span className="navbar-item">
              <Link
                className="button is-primary is-inverted is-rounded"
                to={content.button.link}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                  transition: "all 0.3s ease-in-out",
                  backgroundColor: hover ? "transparent" : "#fff",
                  borderWidth: 1,
                  borderColor: "#fff",
                }}
              >
                <span
                  className="has-text-weight-bold"
                  style={{ color: hover ? "#fff" : "rgba(112, 37, 155, 1)" }}
                >
                  {content.button.text}
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(112, 37, 155, 1)",
          height: showMobile ? 250 : 0,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div
          style={{
            visibility: showMobile ? "visible" : "hidden",
            paddingTop: 20,
            opacity: showMobile ? 1 : 0,
            transition: "opacity 0.3s ease 0.3s",
          }}
        >
          {content.links.map((link, index) => (
            <Link
              key={index}
              className="navbar-item has-text-weight-bold"
              to={link.link}
              style={{ paddingLeft: 30 }}
            >
              {link.text}
            </Link>
          ))}
          <span className="navbar-item" style={{ paddingLeft: 20 }}>
            <Link
              className="button is-primary is-inverted is-rounded"
              to={content.button.link}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                transition: "backgroundColor 0.3s ease-in-out",
                backgroundColor: hover ? "transparent" : "#fff",
                borderWidth: 1,
                borderColor: "#fff",
              }}
            >
              <span
                className="has-text-weight-bold"
                style={{ color: hover ? "#fff" : "rgba(112, 37, 155, 1)" }}
              >
                {content.button.text}
              </span>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
