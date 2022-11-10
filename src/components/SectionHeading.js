import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ title, padding, color }) => {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: padding ? padding : 80,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div
        className="mx-3"
        style={{
          backgroundColor: "rgba(209, 0, 201, 1)",
          height: 5,
          width: "5%",
        }}
      ></div>
      <h2
        className={`subtitle is-size-5 ${
          color && color === "white" ? "has-text-white" : "has-text-black"
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
