import * as React from "react";

export function TimelineDroite(scrollSunTl, q) {
  let ColorWhite = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-white"
  );

  scrollSunTl.fromTo(
    q("#screen4PartieDroite"),
    {
      y: "25vh",
    },
    {
      scrollTrigger: {
        trigger: "#screen4",
        start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
        end: "top+=90% bottom",
        toggleActions: "play none none reset",
        // markers: true,
        scrub: 1,
      },

      y: 0,
    }
  );

  return scrollSunTl;
}

export default function RightText() {
  return (
    // <div id="screen4PartieDroite">
    <div
      id="screen4PartieDroite"
      className="relative container-main w-full rg:w-1/2 py-10 rg:py-16 rg:pl-8 lg:pl-20 xl:pl-40 order-1 rg:order-2"
    >
      <div className="js-home-gl-text home-numbers__wrap backface-hidden">
        <h2
          className="text-blue mb-4 rg:mb-12 lg:mb-4 xl:mb-12"
          data-cartapus="visible"
        >
          <span>A propos</span>
        </h2>

        <p className="home-numbers__agap text-4xl text-blue font-semibold">
          agap<span className="text-yellow">2</span>
        </p>
        <h3 className="text-3xl mb-8">
          est un acteur européen du conseil en ingénierie et des services
          numériques
        </h3>

        <div className="mce w-full xl:w-2/3">
          <p>
            Depuis 17 ans maintenant, nous mettons notre expertise technique au
            service de nos partenaires dans tous les grands secteurs de
            l’industrie et de l’IT. Notre métier est d’accompagner nos clients
            dans la réalisation de leurs projets et d’imaginer des réponses
            nouvelles à leurs problématiques.
          </p>
        </div>

        <a
          href="https://www.agap2.fr/agap2/"
          className="points-link mt-6 py-2 inline-block"
        >
          <div className="points flex items-stretch ml-1">
            <div className="bg-blue points__pt mr-px transform backface-hidden"></div>
            <div className="bg-blue points__pt mx-px transform backface-hidden"></div>
            <div className="bg-blue points__pt ml-px transform backface-hidden"></div>
          </div>
        </a>
      </div>

      <p
        className="back-title select-none w-fit-content pointer-events-none whitespace-no-wrap font-black text-huge tracking-tighter absolute leading-none -z-1 opacity-100 top-0 back-title--aligned text-white md:top-unset md:bottom-0"
        data-cartapus="visible"
      >
        agap2
      </p>
    </div>
    // </div>
  );
}
