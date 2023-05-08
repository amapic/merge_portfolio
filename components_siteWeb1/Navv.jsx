import { useState } from "react";

export default function Navv() {
    return (
      <div
        id="navv"
        style={{
          height: "15vh",
          width: "40vh",
          position: "fixed",
          right: "5vw",
          bottom: "18vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: "10000",
        }}
      >
        <a
          style={{
            cursor: "pointer",
          }}
          href="/index.html"
        >
          <svg width="50px" height="83px" viewBox="0 0 23 38">
            <g transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,23,38)">
              <path
                d="M2.75,1.5l17.5,17.5l-17.5,17.5"
                className="pathnav"
                style={{ fill: "none", stroke: "#AE8507", strokeWidth: "1px" }}
              />
            </g>
          </svg>
        </a>
        <a
          style={{
            cursor: "pointer",
          }}
          href="/agap2/agap2.html"
        >
          <svg width="50px" height="83px" viewBox="0 0 23 38">
            <g>
              <path
                d="M2.75,1.5l17.5,17.5l-17.5,17.5"
                className="pathnav"
                style={{ fill: "none", stroke: "#AE8507", strokeWidth: "1px" }}
              />
            </g>
          </svg>
        </a>
      </div>
    );
  }

export function Carousel() {
  const [isActive, setIsActive] = useState(1);

  const handleClick = (i) => {
    if (isActive != i) {
      setIsActive(i);
    }
  };

  return (
    <div data-v-07142c5e="" className="carousel-siteWeb1-pager">
      <a href="/index.html">
        <button
          className={isActive == 0 ? "active" : ""}
          onClick={() => handleClick(0)}
        >
          <div className="carousel-siteWeb1-pager-item"></div>
        </button>
      </a>
      <a href="/siteWeb1/index.html">
        <button
          className={isActive == 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          <div className="carousel-siteWeb1-pager-item"></div>
        </button>
      </a>
      <a href="/agap2/agap2.html">
        <button
          className={isActive == 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          <div className="carousel-siteWeb1-pager-item"></div>
        </button>
      </a>
      <a href="/planet/index.html">
      <button
        className={isActive == 3 ? "active" : ""}
        onClick={() => handleClick(3)}
      >
        <div className="carousel-siteWeb1-pager-item"></div>
      </button>
      </a>
    </div>
  );
}
