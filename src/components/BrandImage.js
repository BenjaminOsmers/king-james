import React from "react";

const BrandImage = ({ image }) => {
  return (
    <div
      className="column is-one-fifth"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <figure
        className="image is-2by1"
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
