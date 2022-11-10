import React, { useState } from "react";
import content from "./content";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className="hero is-primary is-large">
      <div className="hero-head">
        <Navbar />
      </div>
      <div
        className="hero-body"
        style={{
          background: `url('./assets/images/${content.background}') no-repeat center center /cover`,
          paddingBottom: 80,
          paddingTop: 400,
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <p className="title pb-3 is-size-1">{content.title}</p>
          <p className="subtitle">{content.subtitle}</p>
          <span whileTap={{ scale: 0.9 }}>
            <Link
              className="button is-primary is-inverted is-rounded"
              style={{
                transition: "all 0.3s ease-in-out",
                backgroundColor: hover ? "#fff" : "rgba(112, 37, 155, 1)",
              }}
              to={content.button.link}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <motion.span
                className="has-text-weight-bold"
                style={{
                  color: hover ? "rgba(112, 37, 155, 1)" : "#fff",
                  fontSize: "14px",
                }}
                whileTap={{ scale: 0.9 }}
              >
                {content.button.text}
              </motion.span>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
