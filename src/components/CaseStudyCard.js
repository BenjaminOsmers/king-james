import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CaseStudyCard = ({ title, content, image }) => {
  const [hover, setHover] = useState(false);
  const [cardHover, setCardHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the user is on a mobile device based on screen size or input mode
  useEffect(() => {
    if (
      window.screen.width < 850 ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div
      className="tile is-parent column is-12-tablet is-12-mobile is-4-desktop"
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <article
        className="tile is-child box"
        style={{
          background: `url('./assets/images/${image}') no-repeat center center /cover`,
          borderRadius: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            height: "100%",
            width: "100%",
            padding: "20px",
            paddingTop: 200,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              transform:
                cardHover || isMobile ? "translateY(0)" : "translateY(50%)",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(209, 0, 201, 1)",
                height: 5,
                flex: 1,
                width: "10%",
                marginBottom: 15,
              }}
            ></div>
            <p className="title has-text-white py-2" style={{ flex: 1 }}>
              {title}
            </p>
            <p
              className="subtitle has-text-white"
              style={{
                fontSize: "16px",
                flex: 5,
                paddingBottom: 15,
              }}
            >
              {content}
            </p>
            <span style={{ flex: 1 }}>
              <Link
                className="button is-primary is-inverted is-rounded"
                style={{
                  transition: "all 0.3s ease-in-out",
                  backgroundColor: hover ? "#fff" : "rgba(112, 37, 155, 1)",
                }}
                to="/"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <span
                  className="has-text-weight-bold"
                  style={{
                    color: hover ? "rgba(112, 37, 155, 1)" : "#fff",
                    fontSize: "14px",
                  }}
                >
                  Read More
                </span>
              </Link>
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CaseStudyCard;
