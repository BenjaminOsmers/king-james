import React from "react";
import SectionHeading from "../SectionHeading";
import WhatWeDoCard from "../WhatWeDoCard";
import content from "./content";

const WhatWeDo = () => {
  return (
    <section className="section" style={{ paddingTop: 80 }}>
      <SectionHeading title={content.title} />
      <h1 className="title has-text-weight-bold is-size-1-desktop">
        {content.subtitle}
      </h1>
      <div className="columns is-multiline">
        {content.cards.map((card, index) => (
          <WhatWeDoCard
            key={index}
            image={card.image}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
