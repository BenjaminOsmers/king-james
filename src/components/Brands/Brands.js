import React from "react";
import SectionHeading from "../SectionHeading";
import content from "./content";
import BrandImage from "../BrandImage";

const Brands = () => {
  return (
    <section className="section">
      <SectionHeading title={content.title} padding={30} />
      <h1 className="title has-text-weight-bold is-size-1-desktop" style={{paddingBottom: 70}}>
        {content.subtitle}
      </h1>
      <div className="container" style={{ padding: "0 70px" }}>
        <div className="columns is-multiline">
          {content.images.map((image, index) => (
            <BrandImage key={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
