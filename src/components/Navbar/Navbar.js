import React, { useState } from "react";
import content from "./content";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  return (
    <nav
      className="navbar px-5"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "rgba(112, 37, 155, 1)" }}
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img
            src={`./assets/images/${content.logo}`}
            width="112"
            height="28"
            alt="Logo"
          />
        </a>
        <span
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setShowMobile(!showMobile)}
        >
          <span aria-hidden="true" className="has-text-white"></span>
          <span aria-hidden="true" className="has-text-white"></span>
          <span aria-hidden="true" className="has-text-white"></span>
        </span>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div
          className="navbar-start p-0 m-0"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {content.links.map((link, index) => (
            <Link
              key={index}
              className="navbar-item has-text-weight-bold"
              to={link.link}
              style={{
                backgroundColor: "transparent",
              }}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <div className="navbar-item p-1">
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
          display: showMobile ? "block" : "none",
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
              <motion.span
                className="has-text-weight-bold"
                style={{ color: hover ? "#fff" : "rgba(112, 37, 155, 1)" }}
                whileTap={{ scale: 0.9 }}
              >
                {content.button.text}
              </motion.span>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
