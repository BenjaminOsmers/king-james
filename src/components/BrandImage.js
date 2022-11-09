import React from "react";

const BrandImage = ({ image }) => {
  return (
    <div
      className="column is-one-fifth-desktop is-12-mobile is-4-tablet"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <figure
        className="image is-2by1-desktop"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`./assets/images/brands/${image}`}
          alt={image}
          style={{ width: 120, position: "relative" }}
        />
      </figure>
    </div>
  );
};

export default BrandImage;
