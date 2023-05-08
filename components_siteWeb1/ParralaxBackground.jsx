import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParralaxBackground() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parralax",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });

      // gsap.utils.toArray(".kibouge").forEach((layer) => {
      //   const speed = layer.dataset.speed;
      //   const movement = -(layer.offsetHeight * speed);
      //   tl.to(layer, { y: movement, ease: "none" }, 0);
      // });
    });

    return () => ctx.revert();
  });

  return (
    <>
      <div
        id="gg"
        className="position-absolute top-0 left-0 h-100 w-100"
        style={{
          zIndex: "auto",
        }}
      >
        <img
          ref={ref}
          src="/agap2/siteWeb1/brownCircle.png"
          height={"50px"}
          width={"50px"}
          className="position-absolute kibouge d-none d-sm-block fadeIn animated"
          style={{
            transform: "scale(0.5)",
            left: "1vw",
            top: "25vh",
            zIndex: "none",
          }}
          data-speed="0.6"
        />
        <img
          ref={ref2}
          src="/agap2/siteWeb1/brownSquare.png"
          height={"50px"}
          width={"50px"}
          className="position-absolute d-none d-sm-block kibouge fadeIn animated"
          data-speed="0.6"
          style={{
            transform: "rotate(45deg) scale(1)",
            left: "96vw",
            top: "50vh",
            zIndex: "auto",
          }}
        />

        <img
          src="/agap2/siteWeb1/darkBrownSquare.png"
          height={"50px"}
          width={"50px"}
          className="position-absolute kibouge d-none d-sm-block fadeIn animated"
          data-speed="0.3"
          style={{
            transform: "rotate(5deg) scale(1)",
            left: "90vw",
            top: "25vh",
          }}
        />

        <img
          src="/agap2/siteWeb1/darkBrownSquare.png"
          height={"50px"}
          width={"50px"}
          className="position-absolute kibouge d-block fadeIn animated"
          data-speed="0.3"
          style={{
            transform: "rotate(45deg) scale(0.5)",
            left: "calc(50vw - 200px)",
            top: "20vh",
            zIndex: "9",
          }}
        />

        <img
          src="/agap2/siteWeb1/brownCircle.png"
          height={"50px"}
          width={"50px"}
          className="position-absolute kibouge d-block fadeIn animated"
          data-speed="0.3"
          style={{
            transform: "scale(0.5)",
            left: "calc(50vw + 100px)",
            top: "20vh",
            zIndex: "9",
          }}
        />

        <img
          src="/agap2/siteWeb1/darkBrownSquare.png"
          height={"50px"}
          width={"50px"}
          className="position-absolute kibouge d-none d-xxl-block fadeIn animated"
          data-speed="0.9"
          style={{
            transform: "rotate(35deg) scale(1)",
            left: "95vw",
            top: "140vh",
            zIndex: "9",
          }}
        />

        <img
          src="/agap2/siteWeb1/redSquare.png"
          height={"50px"}
          width={"50px"}
          className="position-absolute d-none d-sm-block kibouge fadeIn animated"
          data-speed="0.3"
          style={{
            transform: "rotate(10deg) scale(1)",
            left: "5vw",
            top: "90vh",
            // zIndex: "9",
          }}
        />

        {/* <img
          src="/siteWeb1/darkBrownSquare.png"
          height={"50px"}
          width={"50px"}
          className="position-absolute d-block d-md-none kibouge fadeIn animated"
          data-speed="0.3"
          style={{
            transform: "rotate(-5deg) scale(1)",
            left: "45vw",
            top: "95vh",
            // zIndex: "9",
          }}
        /> */}
      </div>
    </>
  );
}

export function TimelinePart2() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".card1",
      start: "top bottom",
      end: "bottom bottom",
      once: true,
    },
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".card2",
      start: "top bottom",
      end: "bottom bottom",
      once: true,
    },
  });

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".card3",
      start: "top bottom",
      end: "bottom bottom",
      once: true,
    },
  });

  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".card4",
      start: "top bottom",
      end: "bottom bottom",
      once: true,
    },
  });

  const tlJauge = gsap.timeline({
    scrollTrigger: {
      trigger: ".jauge",
      start: "bottom bottom",
      end: "bottom bottom",
      once: true,
      // markers:true
    },
  });

  tlJauge.fromTo(
    ".jauge div:nth-child(1)",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      backgroundColor: "rgb(174,133,7)",
      duration: "0.5",
    },
    ">0.5"
  );

  tlJauge.fromTo(
    ".jauge div:nth-child(2)",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      backgroundColor: "rgb(174,133,7)",
      duration: "0.5",
    },
    ">0.5"
  );

  tlJauge.fromTo(
    ".jauge div:nth-child(3)",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      backgroundColor: "rgb(174,133,7)",
      duration: "0.5",
    },
    ">0.5"
  );

  tlJauge.fromTo(
    ".jauge div:nth-child(4)",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      backgroundColor: "rgb(174,133,7)",
      duration: "0.5",
    },
    ">0.5"
  );

  tl.fromTo(
    ".card1 div",
    {
      opacity: 0,
      y: "150px",
      duration: "3",
    },
    {
      opacity: 1,
      y: "0px",
    }

    // "0.4"
  );

  tl2.fromTo(
    ".card2 div",
    {
      opacity: 0,
      y: "150px",
      duration: "3",
    },
    {
      opacity: 1,
      y: "0px",
    }
    // "0.5"
  );

  tl3.fromTo(
    ".card3 div",
    {
      opacity: 0,
      y: "150px",
    },
    {
      opacity: 1,
      y: "0px",
    }
    // "0.6"
  );

  tl4.fromTo(
    ".card4 div",
    {
      opacity: 0,
      y: "150px",
    },
    {
      opacity: 1,
      y: "0px",
    }
    // "0.7"
  );
}
// }

export function TimelinePartWobblyText() {
  var kaka = 3;

  function Rrepeat(localkaka) {
    kaka = localkaka - 1;
    // alert(kaka);
  }

  const tl = gsap.timeline({
    repeat: 2,
    repeatDelay: 0,
    onRepeat: Rrepeat(kaka),
    repeatRefresh: true,
  });

  tl.to(
    ".bb",
    {
      rotationZ: kaka,
      duration: "0.2",
      ease: "power2",
    },
    "0"
  );

  tl.to(
    ".bb",
    {
      rotationZ: "0",
      duration: "0.2",
      ease: "power2",
    },
    ">"
  );

  tl.to(
    ".bb",
    {
      rotationZ: -kaka,
      duration: "0.2",
      ease: "power2",
    },
    ">"
  );

  tl.to(
    ".bb",
    {
      rotationZ: "0",
      duration: "0.2",
      ease: "power2",
    },
    ">"
  );

  return tl;
}
