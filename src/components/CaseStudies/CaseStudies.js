import React from "react";
import CaseStudyCard from "../CaseStudyCard";
import SectionHeading from "../SectionHeading";
import content from "./content";
import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <section className="section">
      <SectionHeading title={content.title} />
      <motion.div
        className="columns is-multiline"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        {content.cards.map((card, index) => (
          <CaseStudyCard
            key={index}
            title={card.title}
            content={card.content}
            image={card.image}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default CaseStudies;
