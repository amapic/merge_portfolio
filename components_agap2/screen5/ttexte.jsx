import * as React from "react";
export default function Ttexte() {
  return (
    <div className="home-zoom__content w-10/12 md:w-3/5 xl:w-1/2 mx-auto flex flex-col md:items-end">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end">
        <h2
          className="home-zoom__subtitle home-zoom__subtitle--top md:hidden text-white backface-hidden opacity-0 js-zoom-subtitle-mobile"
          //   style="opacity: 1; transform: translate(0px, 0px);"
        >
          {" "}
          Aéronautique, Spatial et Défense
        </h2>

        <div className="flex items-center md:flex-col md:mr-10 xl:mr-12 js-zoom-jobs">
          <p
            id="vingt"
            className="text-3-5xl font-bold opacity-0 backface-hidden"
            // style="transform: translate(0px, 0px); opacity: 1;"
          >
            20
          </p>
          <div className="ml-2 md:ml-0">
            <p
              id="postes"
              className="text-2xl font-bold opacity-0 backface-hidden"
              //   style="transform: translate(0px, 0px); opacity: 1;"
            >
              postes
            </p>
            <p
              id="disponibles"
              className="opacity-0 backface-hidden"
              //   style="transform: translate(0px, 0px); opacity: 1;"
            >
              disponibles
            </p>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <h2
            id="aero"
            className="home-zoom__subtitle mt-8 md:mt-0 home-zoom__subtitle--bottom text-blue text-center md:text-left transform md:translate-x-5 backface-hidden js-zoom-subtitle"
            // style="color: rgb(255, 255, 255); opacity: 0; transform: translate(0px, 0px);"
          >
            {" "}
            Aéronautique, Spatial et Défense
          </h2>

          <div
            id="faire"
            className="mce -mt-10 md:mt-4 opacity-0 js-zoom-mce backface-hidden"
            // style="transform: translate(0px, 0px); opacity: 1;"
          >
            <h4>Faire décoller vos projets !</h4>
          </div>
        </div>
      </div>

      <div
        id="secteurs"
        className="md:w-3/4 mt-6 md:mt-10 xl:mt-12  flex justify-end opacity-0 js-zoom-btn backface-hidden"
        // style="transform: translate(0px, 0px); opacity: 1;"
      >
        <a
          href="https://www.agap2.fr/metiers/secteurs/"
          className="button relative flex items-center button--invert"
        >
          <div className="button__text flex-1 backface-hidden transition-transform duration-500 ease-out-quad transform mr-3">
            de secteurs
          </div>

          <div className="button__plus backface-hidden border border-solid flex items-center justify-center h-8 w-8">
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M132 36V132H36V168H132V264H168V168H264V132H168V36H132Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
