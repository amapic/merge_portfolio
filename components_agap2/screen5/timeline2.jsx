import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Timeline(width, height, initFontSizeZoom) {
  let tailleMaxZoom = (width * 2) / 12;
  let topZoom = 40; //vh
  let topBigWhiteCircle = topZoom + 1;
  let topSmallWhiteCircle = topZoom + 2;
  var scrollSunTl = gsap.timeline();

  var h = window.innerHeight;
  var w = window.innerWidth;

  ScrollTrigger.create({
    animation: scrollSunTl,
    trigger: "#container_move5",
    start: "center center", // which means "when the top of the trigger hits 40px above the bottom of the viewport
    end: "+=900 center",
    toggleActions: "play none none reset",
    scrub: 1,
    pin: "#container_move5",
    snap: {
      snapTo: "labelsDirectional", // snap to the closest label in the timeline
      duration: { min: 0.2, max: 0.5 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "none", // the ease of the snap animation ("power3" by default)
    },
  });

  scrollSunTl.addLabel("un", 0);

  // scrollSunTl.to(
  //   //commence à un, termine à 3
  //   "#entete",
  //   {
  //     top: "0vh",
  //     duration: "0.1",
  //   },
  //   "un"
  // );

  scrollSunTl.to(
    "#zoombgCircleDiv",
    {
      top: topZoom + "vh",
      duration: "0.5",
    },
    "un"
  );

  scrollSunTl.to(
    "#backgroundCircle",
    {
      top: topZoom + "vh",
      duration: "0.5",
    },
    "un"
  );

  scrollSunTl.to(
    "#zoom,.js-zoom-o",
    {
      fontSize: "230px",
      // color: "#ffe26e",
      // fontColor: "rgb(255,226,110)",
      duration: "1",
    },
    "un"
  );

  scrollSunTl.to(
    "#zoom",
    {
      // fontSize: "230px",
      color: "#ffe26e",
      // fontColor: "rgb(255,226,110)",
      duration: "1",
    },
    "un"
  );

  //le bleu est le même au point 1
  // scrollSunTl.to(
  //   "#zoom .js-zoom-o",
  //   {
  //     // fontSize: "150px",
  //     color: "rgb(2,38,170)",
  //     duration: "1", //?
  //   },
  //   "un"
  // );

  scrollSunTl.to(
    "h2#aero",
    {
      color: "#aab6e2",
      duration: "1", //?
    },
    "un"
  );

  scrollSunTl.fromTo(
    "#backgroundCircle",
    {
      transform: "scale(1)",
      transformOrigin: "center",
    },
    {
      transform: "scale(300)",
      transformOrigin: "center",
      duration: "1",
    },
    "un"
  );

  scrollSunTl.addLabel("deux", 2);

  scrollSunTl.to(
    "#backgroundCircle",
    {
      transform: "scale(900)",
      transformOrigin: "center",
      duration: "1",
    },
    "deux"
  );

  scrollSunTl.to(
    "#zoom,.js-zoom-o",
    {
      fontSize: "300px",
      // color: "white",
      // fontColor: "rgb(255,226,110)",
      duration: "1",
    },
    "deux"
  );

  scrollSunTl.to(
    "#zoom",
    {
      // fontSize: "300px",
      color: "white",
      // fontColor: "rgb(255,226,110)",
      // duration: "1",
    },
    "deux"
  );

  // scrollSunTl.to(
  //   ".js-zoom-o",
  //   {
  //     // fontSize: "300px",
  //     color: "white",
  //     // fontColor: "rgb(255,226,110)",
  //     // duration: "1",
  //   },
  //   "deux"
  // );

  scrollSunTl.to(
    "h2#aero",
    {
      color: "white",
      duration: "1", //?
    },
    "un"
  );

  scrollSunTl.addLabel("trois", 3);

  scrollSunTl.to(
    "#backgroundCircle",
    {
      // top: topZoom + "vh",
      transform: "scale(1200)",
      transformOrigin: "center",
      // opacity: "1",
      duration: "1",
    },
    "trois"
  );

  scrollSunTl.addLabel("quatre", 4);

  scrollSunTl.to(
    "#backgroundCircle",
    {
      // top: topZoom + "vh",
      transform: "scale(2500)",
      transformOrigin: "center",
      // opacity: "1",
      duration: "1",
    },
    "quatre"
  );

  scrollSunTl.addLabel("cinq", 5);

  scrollSunTl.to(
    "#zoom,.js-zoom-o",
    {
      fontSize: initFontSizeZoom,
      color: "#ffda40",
      duration: "1",
    },
    "cinq"
  );

  // scrollSunTl.to(
  //   "#zoom .js-zoom-o",
  //   {
  //     fontSize: initFontSizeZoom,
  //     color: "#0226aa",
  //     duration: "1",
  //   },
  //   "cinq"
  // );

  scrollSunTl.addLabel("six", 4);

  // scrollSunTl.to(
  //   //commence à un, termine à 3
  //   "#backgroundCircle",
  //   {
  //     // top: topZoom + "vh",
  //     transform: "scale(5)",
  //     transformOrigin: "center",
  //     opacity: "1",
  //     duration: "1",
  //   },
  //   "<"
  // );

  //cercle qui a grossi, lettre aussi

  // scrollSunTl.to(
  //   //commence à un, termine à 3
  //   "#backgroundCircleDiv",
  //   {
  //     top: topZoom + "vh",
  //     duration: "0.1",
  //   }
  // );

  // scrollSunTl.to(
  //   "#zoom",
  //   {
  //     // top: 2 * topZoom + "vh",
  //     height: tailleMaxZoom + "px",
  //     fontSize: tailleMaxZoom + "px",
  //     lineHeight: tailleMaxZoom + "px",
  //     duration: 2,
  //   },
  //   "<"
  // );

  // scrollSunTl.to(
  //   "#backgroundCircle",
  //   {
  //     transform: "scale(0.34)", //=> prochaine étape 0.61
  //     transformOrigin: "center",
  //     duration: 2,
  //   },
  //   "<"
  // );

  // scrollSunTl.addLabel("deux");

  // scrollSunTl.to(
  //   "#zoom",
  //   {
  //     top: "40%",
  //     duration: 2,
  //   },
  //   "<"
  // );

  scrollSunTl.to(
    "#plane",
    {
      y: "-10vh",
      duration: 1,
      opacity: "1",
    },
    "six"
  );

  scrollSunTl.to(
    "h2#aero",
    {
      color: "white",
      duration: 2,
    },
    "six"
  );

  // scrollSunTl.to(
  //   "#biggerWhiteCircle",
  //   {
  //     top: h / 10 + "px",
  //     width: w / 4 + "px",
  //     height: w / 4 + "px",
  //     opacity: "1",
  //     duration: "3",
  //   },
  //   "six"
  // );

  // scrollSunTl.to(
  //   "#smallerWhiteCircle",
  //   {
  //     top: h / 10 + 15 + "px",
  //     width: w / 4 - 30 + "px", //30px de différence en big taille
  //     height: w / 4 - 30 + "px",
  //     opacity: "1",
  //     duration: "3",
  //   },
  //   "six"
  // );

  scrollSunTl.to(
    "#biggerWhiteCircle2",
    {
      // scale: "0.7",
      opacity: "1",
      duration: "3",
      transform: "scale(0.7)",
      transformOrigin: "center",
    },
    "six"
  );

  scrollSunTl.to(
    "#smallerWhiteCircle2",
    {
      // scale: "0.7",
      opacity: "1",
      duration: "3",
      transform: "scale(0.7)",
      transformOrigin: "center",
    },
    "six"
  );

  // scrollSunTl.to(
  //   "#smallerWhiteCircleDiv",
  //   {
  //     top: 2 + "vh",
  //     duration: "3",
  //   },
  //   "<"
  // );

  scrollSunTl.to(
    "h2#aero",
    {
      x: "-10px",
      opacity: "1",
    },
    ">"
  );

  scrollSunTl.to(
    "#faire",
    {
      x: "-10px",
      opacity: "1",
    },
    ">"
  );

  scrollSunTl.to(
    "#vingt",
    {
      x: "10px",
      opacity: "1",
    },
    "<+=1"
  );

  scrollSunTl.to(
    "#postes",
    {
      x: "10px",
      opacity: "1",
    },
    "<+=1"
  );

  scrollSunTl.to(
    "#disponibles",
    {
      x: "10px",
      opacity: "1",
    },
    "<+=1"
  );

  scrollSunTl.to(
    "#secteurs",

    {
      x: "-40px",
      opacity: "1",
    },
    "<+=1"
  );

  scrollSunTl.addLabel("fin");

  return scrollSunTl;
}
