import * as React from "react";

export default function Ttext1() {
  return (
    <div
      id="texte_haut"
      style={{
        width: "300px",
        zIndex: "20",
        top: "15vh",
        left: "25vh",
        position: "absolute",
        size: "40px",
      }}
    >
      <div className="w-full h-full relative">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div
              className="w-50 text1 text-yellow
          font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
          "
            >
              +200
            </div>
            <div
              className="ml-1 w-50 text2 text-white
          font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
          "
            >
              M€
            </div>
          </div>
          <div
            className="w-100 text3 text-white
        opacity-0 backface-hidden
        "
          >
            {" "}
            de chiffres d affaires
          </div>
        </div>
        <div
          id="cercle1"
          className="opacity-0"
          style={{
            bottom: "-5vh",
            left: "20%",
            borderRadius: "999px",
            backgroundColor: "white",
            position: "absolute",
            width: "1px",
            height: "1px",
            zIndex: "50",
          }}
        ></div>
      </div>
    </div>
  );
}

export function Ttext2() {
  return (
    <div
      id="texte_droite"
      style={{
        width: "100px",
        zIndex: "20",
        top: "50vh",
        right: "2vw",
        position: "absolute",
        size: "40px",
        textAlign: "right",
      }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div
              className="w-100 text1 text-yellow
          font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
          "
            >
              +2900{" "}
            </div>
            {/* <div className="w-50 text2 blueLetter">M€</div> */}
          </div>
          <div
            className="w-100 text3 text-white 
        font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
        "
          >
            {" "}
            collaborateurs
          </div>
        </div>
        <div
          id="cercle2"
          className="opacity-0"
          style={{
            top: "0vh",
            left: "-5vh",
            borderRadius: "999px",
            backgroundColor: "white",
            position: "absolute",
            width: "1px",
            height: "1px",
            zIndex: "10",
          }}
        ></div>
      </div>
    </div>
  );
}

export function Ttext3() {
  return (
    <div
      id="texte_bas"
      style={{
        // width: "300px",
        zIndex: "20",
        top: "80vh",
        left: "25vw",
        position: "absolute",
        size: "40px",
        // textAlign: "right",
      }}
    >
      <div className="w-full h-full">
        <div className="flex flex-col">
          {/* <div className="flex flex-row"> */}
          <div
            className="w-50 text1 text-yellow
        text-yellow font-bold text-2-5xl md:text-3xl xl:text-3-5xl opacity-0 backface-hidden
        "
          >
            9
          </div>
          <div
            className="w-50 text2 text-white
        font-bold text-xl md:text-1-5xl xl:text-2xl opacity-0 backface-hidden
        "
          >
            pays
          </div>
          {/* </div> */}
          <div
            className="w-100 text3 text-white
        "
          >
            {" "}
            en Europe
          </div>
        </div>
        <div
          id="cercle3"
          className="opacity-0"
          style={{
            top: "-5vh",
            left: "0vh",
            borderRadius: "999px",
            backgroundColor: "white",
            position: "absolute",
            width: "1px",
            height: "1px",
            zIndex: "10",
          }}
        ></div>
      </div>
    </div>
  );
}

//les timeline se passe les unes après les autres
export function Timeline1(scrollSunTl, q) {
  let ColorWhite = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-white"
  );

  // console.log("white", ColorWhite);

  scrollSunTl.fromTo(
    q("#texte_haut .text1"),
    {
      y: 20,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=90% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
        // fontColor: "red",
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.fromTo(
    q("#texte_haut .text2"),
    {
      y: 40,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
        color: ColorWhite,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.fromTo(
    q("#texte_haut .text3"),
    {
      y: 70,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
        color: ColorWhite,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.to(
    q("#cercle1"),

    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      width: "24px",
      height: "24px",
      x: "-12px",
      y: "-12px",
    }
  );

  return scrollSunTl;
}

export function Timeline2(scrollSunTl, q) {
  scrollSunTl.fromTo(
    q("#texte_droite .text1"),
    {
      y: 20,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=90% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.fromTo(
    q("#texte_droite .text2"),
    {
      y: 40,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.fromTo(
    q("#texte_droite .text3"),
    {
      y: 70,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.to(
    q("#cercle2"),

    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      // x: "-24px",
      width: "24px",
      height: "24px",
      x: "-12px",
      y: "-12px",
    }
  );

  return scrollSunTl;
}

export function Timeline3(scrollSunTl, q) {
  scrollSunTl.fromTo(
    q("#texte_bas .text1"),
    {
      y: 20,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=90% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.fromTo(
    q("#texte_bas .text2"),
    {
      y: 40,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.fromTo(
    q("#texte_bas .text3"),
    {
      y: 70,
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      y: 0,
    }
  );

  scrollSunTl.to(
    q("#cercle3"),

    {
      scrollTrigger: {
        trigger: "#screen4",
        // endTrigger: ".screen6",
        start: "top+=40% top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=91% bottom",
        // end: "+=200",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      opacity: 1,
      width: "24px",
      height: "24px",
      x: "-12px",
      y: "-12px",
    }
  );

  return scrollSunTl;
}
