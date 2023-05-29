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
        bottom: "40vh",
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
        href="/siteWeb1"
      >
        {/* <img height="100%" width="50vh" src="/agap2/fleche_gauche.svg" /> */}
        <svg width="50px" height="83px" viewBox="0 0 23 38">
          <g transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,23,38)">
            <path
              d="M2.75,1.5l17.5,17.5l-17.5,17.5"
              className="pathnav"
              style={{ fill: "none", stroke: "#ffffff", strokeWidth: "1px" }}
            />
          </g>
        </svg>
      </a>
      <a
        style={{
          cursor: "pointer",
        }}
        href="/planet"
      >
        <svg width="50px" height="83px" viewBox="0 0 23 38">
          <g>
            <path
              d="M2.75,1.5l17.5,17.5l-17.5,17.5"
              className="pathnav"
              style={{ fill: "none", stroke: "#ffffff", strokeWidth: "1px" }}
            />
          </g>
        </svg>
      </a>
    </div>
  );
}

export function Carousel() {
  const [isActive, setIsActive] = useState(2);

  const handleClick = (i) => {
    if (isActive != i) {
      setIsActive(i);
    }
  };

  return (
    <div data-v-07142c5e="" className="carousel-agap2-pager">
      <a href="/index">
        <button
          className={isActive == 0 ? "active" : ""} 
          onClick={() => handleClick(0)}
        >
          <div className="carousel-agap2-pager-item pathnav"></div>
        </button>
      </a>
      <a href="/siteWeb1">
        <button
          className={isActive == 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          <div className="carousel-agap2-pager-item"></div>
        </button>
      </a>
      <a href="/agap2">
        <button
          className={isActive == 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          <div className="carousel-agap2-pager-item"></div>
        </button>
      </a>
      <a href="/planet">
        <button
          className={isActive == 3 ? "active" : ""}
          onClick={() => handleClick(3)}
        >
          <div className="carousel-agap2-pager-item"></div>
        </button>
      </a>
    </div>
  );
}
