import React from "react";
import { motion } from "framer-motion";

const WhatWeDoCard = ({ image, title, content }) => {
  return (
    <div className="column is-6-tablet is-12-mobile is-3-desktop">
      <motion.article
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-300px" }}
      >
        <figure className="image is-16by9" style={{ width: 60 }}>
          <img src={`./assets/icons/${image}`} alt={title} />
        </figure>
        <p
          className="title"
          style={{
            fontSize: "24px",
            color: "#000",
            flex: 1,
            paddingBottom: 30,
          }}
        >
          {title}
        </p>
        <p
          className="subtitle"
          style={{ fontSize: "20px", color: "#000", flex: 2 }}
        >
          {content}
        </p>
      </motion.article>
    </div>
  );
};

export default WhatWeDoCard;
