import React from "react";
import { useEffect, useState } from "react";
import "./back.css";

export default function Back() {
  const [back, setBack] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBack(true);
      } else {
        setBack(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="Back">
      {back && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "20px",
            height: "50px",
            width: "50px",
            fontSize: "37px",
            border: "none",
            borderRadius: "25px",
            backgroundColor: "rgba(64, 130, 162, 0.5)",
            color: "white",
          }}
          onClick={scrollUp}
        >
          <span>^</span>
        </button>
      )}
    </div>
  );
}
