import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Screen1() {
  const ref = useRef(null);
  const [hoverr, setHover] = useState("");
  const clicked = useRef(false);

  const x = useRef(0);
  const y = useRef(0);

  useEffect(() => {
    document.querySelector(".home-cover").addEventListener("mousemove", (e) => {
      if (!clicked.current) {
        ref.current.style.setProperty(
          "clip-path",
          "circle(200px at " + e.pageX + "px " + e.pageY + "px)"
        );
      }
    });

    document.querySelector(".home-cover").addEventListener("mouseleave", () => {
      if (!clicked.current) {
        gsap.to("#div_clip_path", {
          duration: 1,
          ease: "power2",
          clipPath: "circle(200px at 72vw 50%)",
        });
      }
    });

    document.querySelector(".home-cover").addEventListener("click", () => {
      if (!clicked.current) {
        var clipPath = ref.current.style.getPropertyValue("clip-path");

        if (clipPath) {
          clipPath = clipPath.split("at");
          clipPath = "circle(100vw at " + clipPath[1];
          clicked.current = true;
          gsap.to("#div_clip_path", {
            duration: 3,
            ease: "power2",
            clipPath: clipPath,
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // let q = document.querySelector(".line:nth-child(1) .word:nth-child(1)");

      function q(x) {
        return document.querySelectorAll(x);
      }
      // gsap.fromTo(
      //   ".home-cover__content .line:nth-of-type(1)",
      //   {
      //     zIndex: "10",
      //   },
      //   {
      //     duration: 1.2,
      //     // ease: "power2",
      //     // backgroundColor: "red",
      //     // color: "red",
      //     // fontColor: "red",
      //     y: "-40px",
      //     zIndex: "10",
      //     marginTop: "20px",
      //     // lineHeight: "20px",
      //   }
      // );

      gsap.from(
        q(
          "#div_clip_path .home-cover__content .line:nth-child(1) .word:nth-child(1)"
        ),
        {
          // backgroundColor: "red",
          y: "-30px",
          duration: "1",
          ease: "linear",
        },
        0
      );

      // gsap.fromTo(
      //   q(".home-cover__content .line:nth-child(1) .word:nth-child(2)"),
      //   {
      //     // backgroundColor: "red",
      //     y: "10vh",
      //     duration: "1",
      //   },
      //   {
      //     // backgroundColor: "red",
      //     y: "0vh",
      //     duration: "1",
      //     // position: "relative",
      //   },
      //   0.2
      // );

      // gsap.fromTo(
      //   q(".home-cover__content .line:nth-child(2) .word:nth-child(1)"),
      //   {
      //     // backgroundColor: "red",
      //     y: "10vh",
      //     duration: "1",
      //   },
      //   {
      //     // backgroundColor: "red",
      //     y: "0vh",
      //     duration: "1",
      //   },
      //   0
      // );

      // gsap.from(
      //   q(".home-cover__you .line:nth-child(1) .word:nth-child(1)"),
      //   {
      //     // backgroundColor: "red",
      //     y: "10vh",
      //     duration: "1",
      //   },
      //   // {
      //   //   // backgroundColor: "red",
      //   //   y: "0vh",
      //   //   duration: "1",
      //   //   // position: "relative",
      //   // },
      //   0
      // );
    });

    return () => ctx.revert();
  });

  return (
    <>
     
      <div className={hoverr + " home-cover relative w-full h-screen z-100"}>
        <div className="home-cover__wrapper relative w-full cursor-pointer overflow-hidden js-cover">
          <div
            id="div_clip_path"
            className="w-full h-full home-cover__hover absolute top-0 left-0 z-30 backface-hidden"
            ref={ref}
          >
            <header
              id="header_1"
              className="header fixed flex items-center w-full opacity-0 invisible rg:opacity-100 rg:visible z-20"
              style={{
                backgroundColor: "var(--color-transparent)",
                color: "var(--color-white)",
              }}
              data-text-color="white"
            >
              <div className=" header__container flex items-center justify-between w-full">
                <div className="flex items-center h-full">
                  <a
                    href="https://www.agap2.fr"
                    className="header__logo flex items-center justify-center h-full container-main-l rg:px-8 bg-white mr-2 sm:mr-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="logo"
                      viewBox="0 0 177.49 55.03"
                    >
                      <path
                        fill="#ffcd00"
                        d="M147.32,42.32v-6.7L161,23c3.84-3.47,5.79-5.54,5.79-8.22,0-3.9-2.74-5.6-6.76-5.6-2.14,0-5.55.43-11.09,2.26l-2.14-8.47A45.34,45.34,0,0,1,161.64,0c10.6,0,15.3,6.15,15.3,13.28,0,6.15-4.14,10.77-9.63,15.7l-5.42,4.5h15.6v8.84Z"
                      ></path>
                      <path
                        className="logo-letter"
                        fill="#0226AA"
                        d="M32.48,10.33v29H22.54v-2A12.94,12.94,0,0,1,14,40.23c-7.14,0-14-5.54-14-15.83C.25,15.08,5.67,8.87,14.81,8.87c5.6,0,8.71.43,17.67,1.46M9.57,24.58c0,4.45,2.74,7.49,6.64,7.49a9.66,9.66,0,0,0,6.33-2.55V17.16c-2-.19-3.83-.31-6-.31-4.82,0-7,3.23-7,7.73"
                      ></path>
                      <path
                        className="logo-letter"
                        fill="#0226AA"
                        d="M104.52,10.33v29H94.59v-2a13,13,0,0,1-8.53,2.92c-7.13,0-14-5.54-14-15.83.24-9.32,5.67-15.53,14.8-15.53,5.61,0,8.72.43,17.67,1.46M81.61,24.58c0,4.45,2.74,7.49,6.64,7.49a9.69,9.69,0,0,0,6.34-2.55V17.16c-2-.19-3.84-.31-6-.31-4.81,0-7,3.23-7,7.73"
                      ></path>
                      <path
                        className="logo-letter"
                        fill="#0226AA"
                        d="M50.9,8.87c-9.2,0-14.63,6.22-14.81,15.53,0,9,5.74,14.39,12.49,15.27.44,0,1.14.1,2,.14h2.22c2.26-.1,4.73-.57,5.93-2a16,16,0,0,1-.23,3.09c0,.16,0,.32-.08.47a10.15,10.15,0,0,1-.34,1.23l0,.08a3.54,3.54,0,0,1-.49,1c-1.24,2.08-3.52,3.19-6.94,3.19a55.31,55.31,0,0,1-9-1.22l-1.4,7.55A38.39,38.39,0,0,0,51,55C62.6,55,68.57,48.7,68.57,38.9V10.34c-6.52-.67-10-1.47-17.67-1.47m7.74,22.41a39.59,39.59,0,0,1-6.34.43c-3.9,0-6.64-3.11-6.64-7.13,0-4.5,2.13-7.73,7-7.73,2.14,0,4,.12,6,.3Z"
                      ></path>
                      <path
                        className="logo-letter"
                        fill="#0226AA"
                        d="M126.73,8.87a129.76,129.76,0,0,0-17.61,1.46V53H119V37.45s1.88,2.28,8.65,2.34c7.36-.24,13.9-5.74,13.9-15.39-.31-9.31-5.6-15.53-14.81-15.53m-1.34,22.84a41.55,41.55,0,0,1-6.4-.43V17.16c2.08-.19,3.84-.3,6-.3,4.88,0,7,3.22,7,7.73,0,4-2.74,7.12-6.64,7.12"
                      ></path>
                    </svg>
                  </a>

                  <div className="flex items-stretch categories__wrap pointer-events-none transition-opacity duration-1000 ease-out-quad opacity-0 js-departments">
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b active border-l rounded-l-full"
                      data-slug="industrie"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 23.9 23.9"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M6.26,14.81a2.83,2.83,0,1,0,5.66,0,.62.62,0,0,1,.62-.62.61.61,0,0,1,.61.62,4.07,4.07,0,1,1-4.06-4.06h0a.61.61,0,0,1,.62.61.62.62,0,0,1-.62.62h0A2.83,2.83,0,0,0,6.26,14.81ZM1.33,16.92l.89.16a7.6,7.6,0,0,0,.42,1l-.53.74a1.59,1.59,0,0,0,.18,2l.76.76a1.59,1.59,0,0,0,2,.18l.74-.52a7.24,7.24,0,0,0,1,.41l.16.89A1.58,1.58,0,0,0,8.55,23.9H9.63a1.59,1.59,0,0,0,1.57-1.32l.16-.89a6.57,6.57,0,0,0,1-.42l.74.53a1.6,1.6,0,0,0,2-.18l.78-.76a1.59,1.59,0,0,0,.17-2l-.52-.74a8.65,8.65,0,0,0,.42-1l.89-.16a.61.61,0,0,0,.52-.69.63.63,0,0,0-.67-.53h-.06l-1.27.22a.61.61,0,0,0-.49.45,6.19,6.19,0,0,1-.6,1.43.63.63,0,0,0,0,.66l.74,1.06A.35.35,0,0,1,15,20l-.76.76a.35.35,0,0,1-.46,0l-1.05-.74a.63.63,0,0,0-.67,0,6.19,6.19,0,0,1-1.43.6.61.61,0,0,0-.45.49L10,22.37a.36.36,0,0,1-.35.3H8.55a.37.37,0,0,1-.36-.3L8,21.1a.6.6,0,0,0-.44-.49A6.26,6.26,0,0,1,6.09,20a.61.61,0,0,0-.66,0l-1,.74a.36.36,0,0,1-.47,0L3.15,20a.36.36,0,0,1,0-.46l.74-1.05a.63.63,0,0,0,0-.67,5.94,5.94,0,0,1-.6-1.42.6.6,0,0,0-.49-.44l-1.27-.22a.37.37,0,0,1-.29-.37V14.27a.36.36,0,0,1,.3-.35L2.8,13.7a.6.6,0,0,0,.49-.45,6.19,6.19,0,0,1,.6-1.43.61.61,0,0,0,0-.66L3.12,10.1a.35.35,0,0,1,0-.46l.76-.76a.35.35,0,0,1,.46,0l1,.74a.63.63,0,0,0,.67,0A5.94,5.94,0,0,1,7.52,9,.63.63,0,0,0,8,8.52l.22-1.27a.61.61,0,0,0-.51-.71A.62.62,0,0,0,7,7,.07.07,0,0,1,7,7l-.14.9a8.09,8.09,0,0,0-1,.42l-.74-.52a1.59,1.59,0,0,0-2,.17l-.76.76a1.6,1.6,0,0,0-.19,2.05l.52.74a8.09,8.09,0,0,0-.42,1l-.89.15A1.6,1.6,0,0,0,0,14.27v1.08a1.59,1.59,0,0,0,1.32,1.57Zm22.57-10v.85a1.37,1.37,0,0,1-1.15,1.36l-.62.11a4.84,4.84,0,0,1-.28.66l.37.53a1.38,1.38,0,0,1-.15,1.77l-.6.6a1.38,1.38,0,0,1-1.78.15l-.52-.36-.66.27-.11.62A1.39,1.39,0,0,1,17,14.57h-.84a1.39,1.39,0,0,1-1.37-1.14l-.11-.63a6.5,6.5,0,0,1-.66-.27l-.52.36a1.39,1.39,0,0,1-1.78-.15l-.6-.6A1.39,1.39,0,0,1,11,10.36l.37-.52a4.84,4.84,0,0,1-.28-.66l-.61-.1A1.37,1.37,0,0,1,9.33,7.72V6.87A1.39,1.39,0,0,1,10.47,5.5l.63-.11a6.5,6.5,0,0,1,.27-.66L11,4.21a1.38,1.38,0,0,1,.15-1.78l.59-.58a1.37,1.37,0,0,1,1.77-.16l.53.37a4.88,4.88,0,0,1,.66-.29l.11-.63A1.38,1.38,0,0,1,16.18,0H17A1.39,1.39,0,0,1,18.4,1.15l.11.62a6.21,6.21,0,0,1,.66.28l.52-.37a1.37,1.37,0,0,1,1.77.16l.59.6a1.38,1.38,0,0,1,.16,1.77l-.37.52q.15.33.27.66l.63.11A1.39,1.39,0,0,1,23.9,6.87Zm-1.23,0a.16.16,0,0,0-.13-.15l-1-.18a.6.6,0,0,1-.49-.44A4.27,4.27,0,0,0,20.59,5a.61.61,0,0,1,0-.66l.59-.84a.17.17,0,0,0,0-.2l-.6-.6a.17.17,0,0,0-.2,0l-.83.59a.61.61,0,0,1-.66,0,5,5,0,0,0-1.1-.46.61.61,0,0,1-.45-.49l-.17-1A.16.16,0,0,0,17,1.22h-.85a.16.16,0,0,0-.15.13l-.17,1a.64.64,0,0,1-.45.5,4.24,4.24,0,0,0-1.1.45.61.61,0,0,1-.66,0l-.84-.58a.15.15,0,0,0-.2,0l-.6.6a.15.15,0,0,0,0,.2l.58.83a.63.63,0,0,1,0,.67,4.65,4.65,0,0,0-.46,1.1.6.6,0,0,1-.49.44l-1,.18a.14.14,0,0,0-.12.15v.85a.16.16,0,0,0,.12.15l1,.17a.62.62,0,0,1,.5.45,4.55,4.55,0,0,0,.45,1.1.61.61,0,0,1,0,.66l-.58.83a.14.14,0,0,0,0,.2l.6.6a.15.15,0,0,0,.2,0l.83-.58a.61.61,0,0,1,.66,0,5.21,5.21,0,0,0,1.09.45.6.6,0,0,1,.44.49l.18,1a.15.15,0,0,0,.15.13H17a.15.15,0,0,0,.15-.13l.18-1a.6.6,0,0,1,.45-.49,5,5,0,0,0,1.1-.46.61.61,0,0,1,.66,0l.83.59a.17.17,0,0,0,.2,0l.6-.6a.15.15,0,0,0,0-.2l-.58-.83a.65.65,0,0,1,0-.66,4.35,4.35,0,0,0,.46-1.09.63.63,0,0,1,.49-.45l1-.18a.15.15,0,0,0,.13-.15Zm-3.16.42a2.91,2.91,0,1,1-2.9-2.9h0a2.9,2.9,0,0,1,2.9,2.9Zm-1.23,0A1.68,1.68,0,1,0,16.61,9h0A1.68,1.68,0,0,0,18.28,7.29Z"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm md:text-base">industrie</p>
                    </div>
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b border-r rounded-r-full"
                      data-slug="it"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24.73 21.64"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M23.7,0H1A1,1,0,0,0,0,1V16.49a1,1,0,0,0,1,1H9L8,20.61H5.67v1H19.58v-1H17l-1-3.09H23.7a1,1,0,0,0,1-1V1A1,1,0,0,0,23.7,0ZM16,20.61H9.12l1-3.09H15Zm7.73-4.12H1V1H23.7Z"
                          ></path>
                          <path
                            fill="#2a2a2a"
                            d="M3.09,15.46H21.64a1,1,0,0,0,1-1V3.09a1,1,0,0,0-1-1H3.09a1,1,0,0,0-1,1V14.43A1,1,0,0,0,3.09,15.46Zm0-12.37H21.64V14.43H3.09Z"
                          ></path>
                          <line
                            x1="14.08"
                            y1="5.64"
                            x2="11.08"
                            y2="11.64"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></line>
                          <path
                            d="M15.38,7l3,1.81-3,1.72"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></path>
                          <path
                            d="M9.34,7l-3,1.81,3,1.72"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm md:text-base">IT</p>
                    </div>
                  </div>
                </div>

                <div className="container-main-r rg:hidden">
                  <div className="hamburger ml-auto w-6">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <nav className="header__menu px-4 rg:px-3 lg:px-4 xl:px-8 flex items-center hidden rg:flex">
                  <ul className="flex rg:mr-6 lg:mr-10 xl:mr-32">
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/agap2/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        agap2
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/metiers/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Métiers
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/esprit/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Esprit
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1 submenu">
                      <div className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4">
                        Carrière
                        <div className="points flex items-stretch ml-1">
                          <div className="bg-blue points__pt mr-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt mx-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt ml-px transform backface-hidden"></div>
                        </div>
                      </div>

                      <div className="header__submenu absolute top-full left-0 bg-white text-base flex-col items-start py-6 pl-6 pr-12 hidden">
                        <a
                          href="https://www.agap2.fr/carriere/devenir-consultant/"
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Devenir Consultant en ingénierie
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/devenir-ingenieur-d-affaires/"
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Devenir Ingénieur d’affaires
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/parcours-agapiens/"
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Parcours agapiens
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/formation/"
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Formation
                        </a>
                      </div>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/blog/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/categorie/presse/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Presse
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/contact/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1 border rounded-l-full rounded-r-full overflow-hidden">
                      <a
                        href="https://www.agap2.fr/carriere/offres-demploi/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Offres d’emploi
                      </a>
                    </li>
                  </ul>

                  <ul className="lang-switcher leading-none">
                    <li>
                      <a
                        href="https://www.agap2.fr"
                        data-router-disabled=""
                        data-noprefetch=""
                        data-lang="fr"
                        className="font-semibold uppercase text-sm "
                      >
                        fr
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.agap2.fr/en/"
                        data-router-disabled=""
                        data-noprefetch=""
                        data-lang="en"
                        className="font-semibold uppercase text-sm  line-through"
                      >
                        en
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>

            <div className="js-menu-mobile menu-mobile fixed top-0 left-0 inset-0 bg-blue z-1000 pointer-events-none select-none rg:hidden">
              {/* <header
                id="header_mobile_1"
                className="header fixed flex flex-wrap w-full"
                // style={{ backgroundColor: "rgba(0, 0, 255, 0.5)" }}
              >
                <div className="header__container flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <a
                      href="https://www.agap2.fr"
                      className="header__logo flex items-center justify-center h-full container-main-l rg:px-8 mr-2 sm:mr-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="129"
                        height="40.001"
                        viewBox="0 0 129 40.001"
                      >
                        <g id="logo" transform="translate(-55.971 -44.738)">
                          <g id="Groupe_1" data-name="Groupe 1">
                            <path
                              id="Tracé_1"
                              data-name="Tracé 1"
                              d="M163.048,75.5V70.629l9.921-9.206c2.791-2.522,4.207-4.027,4.207-5.974,0-2.834-1.991-4.073-4.916-4.073a26.381,26.381,0,0,0-8.059,1.64l-1.553-6.153a32.981,32.981,0,0,1,10.807-2.124c7.707,0,11.117,4.468,11.117,9.649,0,4.47-3.011,7.833-7,11.418l-3.94,3.273h11.338V75.5Z"
                              fill="#ffcd00"
                            ></path>
                            <path
                              id="Tracé_2"
                              data-name="Tracé 2"
                              d="M79.578,52.251V73.318h-7.22V71.858a9.458,9.458,0,0,1-6.2,2.125c-5.184,0-10.188-4.029-10.188-11.505.179-6.773,4.118-11.289,10.762-11.289,4.074,0,6.334.312,12.845,1.063M62.925,62.608c0,3.232,1.993,5.445,4.826,5.445a7.042,7.042,0,0,0,4.607-1.859V57.21c-1.462-.135-2.791-.223-4.339-.223-3.5,0-5.094,2.347-5.094,5.62"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_3"
                              data-name="Tracé 3"
                              d="M131.937,52.251V73.318h-7.218V71.858a9.467,9.467,0,0,1-6.2,2.125c-5.182,0-10.187-4.029-10.187-11.505.177-6.773,4.12-11.289,10.76-11.289,4.074,0,6.334.312,12.845,1.063M115.284,62.608c0,3.232,1.993,5.445,4.827,5.445a7.047,7.047,0,0,0,4.608-1.859V57.21c-1.462-.135-2.792-.223-4.341-.223-3.5,0-5.094,2.347-5.094,5.62"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_4"
                              data-name="Tracé 4"
                              d="M92.966,51.19c-6.689,0-10.629,4.516-10.763,11.288,0,6.542,4.171,10.458,9.076,11.093.324.036.828.079,1.438.1.562,0,1.093,0,1.618-.006,1.643-.076,3.434-.413,4.305-1.422a11.879,11.879,0,0,1-.161,2.246c-.018.115-.039.228-.062.341a6.9,6.9,0,0,1-.249.891l-.023.062a2.713,2.713,0,0,1-.358.7c-.9,1.516-2.56,2.32-5.042,2.32a40.332,40.332,0,0,1-6.512-.885l-1.017,5.487a27.944,27.944,0,0,0,7.794,1.329c8.458,0,12.8-4.6,12.8-11.728V52.252c-4.738-.487-7.263-1.063-12.842-1.063m5.625,16.288a29.08,29.08,0,0,1-4.608.309,4.871,4.871,0,0,1-4.826-5.18c0-3.273,1.549-5.619,5.093-5.619,1.549,0,2.88.088,4.341.222Z"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_5"
                              data-name="Tracé 5"
                              d="M148.081,51.188a93.75,93.75,0,0,0-12.8,1.064V83.277h7.176V71.958s1.362,1.659,6.286,1.7c5.351-.17,10.1-4.167,10.1-11.181-.223-6.772-4.073-11.289-10.763-11.289m-.973,16.6a29.551,29.551,0,0,1-4.651-.309V57.21c1.507-.134,2.789-.222,4.384-.222,3.545,0,5.094,2.346,5.094,5.619a4.872,4.872,0,0,1-4.827,5.18"
                              fill="#fff"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div className="container-main-r">
                    <div className="js-menu-mobile-hamburger hamburger hamburger--white active ml-auto w-6 rg:hidden">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

                <nav className="menu-mobile__nav w-full overflow-y-auto">
                  <ul className="flex flex-col overflow-x-hidden">
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/agap2/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        agap2
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/metiers/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Métiers
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/esprit/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Esprit
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group submenu">
                      <div className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500 break-all">
                        Carrière
                        <div className="points flex items-stretch ml-1">
                          <div className="bg-blue points__pt mr-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt mx-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt ml-px transform backface-hidden"></div>
                        </div>
                      </div>

                      <div className="menu-mobile__submenu absolute flex flex-col text-white transition-all duration-500 overflow-hidden py-8">
                        <a
                          href="https://www.agap2.fr/carriere/devenir-consultant/"
                          className="text-lg mb-4 last:mb-0"
                        >
                          Devenir Consultant en ingénierie
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/devenir-ingenieur-d-affaires/"
                          className="text-lg mb-4 last:mb-0"
                        >
                          Devenir Ingénieur d’affaires
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/parcours-agapiens/"
                          className="text-lg mb-4 last:mb-0"
                        >
                          Parcours agapiens
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/formation/"
                          className="text-lg mb-4 last:mb-0"
                        >
                          Formation
                        </a>
                      </div>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/blog/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/categorie/presse/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Presse
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/contact/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/carriere/offres-demploi/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Offres d’emploi
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <ul className="lang-switcher leading-none">
                        <li>
                          <a
                            href="https://www.agap2.fr"
                            data-router-disabled=""
                            data-noprefetch=""
                            data-lang="fr"
                            className="font-semibold uppercase text-sm "
                          >
                            fr
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.agap2.fr/en/"
                            data-router-disabled=""
                            data-noprefetch=""
                            data-lang="en"
                            className="font-semibold uppercase text-sm  line-through"
                          >
                            en
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </header> */}
            </div>

            <video
              muted=""
              autoPlay=""
              loop=""
              playsInline=""
              className="absolute inset-0 object-cover w-full h-full z-0 hidden md:block"
            >
              <source
                src="https://www.agap2.fr/app/uploads/2020/10/agap-animate-yannis.mp4"
                type="video/mp4"
              />
              Votre navigateur ne supporte pas cette vidéo.
            </video>

            <video
              muted=""
              autoPlay=""
              loop=""
              playsInline=""
              className="absolute inset-0 object-cover w-full h-full z-0 md:hidden"
            >
              <source
                src="https://www.agap2.fr/app/uploads/2020/10/agap-mobile-yannis.mp4"
                type="video/mp4"
              />
              Votre navigateur ne supporte pas cette vidéo.
            </video>

            <div className="home-cover__content relative flex flex-col md:justify-center w-full h-full mx-auto px-5 pt-24 md:pt-0 z-10">
              <h1 className="font-black flex flex-wrap items-start w-full">
                <div
                  className="w-max-content md:w-1/2 text-4xl md:text-5xl xl:text-6xl text-yellow md:text-right pr-6 md:pr-12 js-tosplit"
                  // style=""
                >
                  <div
                    className="line"
                    // style="display: block; text-align: right; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word"
                    >
                      The
                    </div>
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word"
                    >
                      world
                    </div>
                  </div>
                  <div
                    className="line"
                    // style="display: block; text-align: right; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word"
                    >
                      needs...
                    </div>
                  </div>
                </div>
                <div
                  className="home-cover__you absolute md:relative md:right-0 md:top-0 md:-mt-4 lg:-mt-8 md:ml-auto pl-12 md:pr-10 lg:pr-24 xl:pr-40 md:pl-12 w-auto text-5xl md:text-6xl xl:text-9xl text-yellow js-tosplit"
                  data-cartapus="visible"
                  // style=""
                >
                  <div
                    className="line"
                    // style="display: block; text-align: start; position: relative;"
                  >
                    <div
                      // style="position:relative;display:inline-block;"
                      className="word"
                    >
                      you
                    </div>
                  </div>
                </div>
              </h1>

              <div className="home-cover__btn w-1/2 hidden md:flex justify-end pr-12 mt-12">
                <a
                  href="https://www.agap2.fr/carriere/offres-demploi/"
                  className="button relative flex items-center button--white button--big"
                >
                  <div className="button__text flex-1 backface-hidden transition-transform duration-500 ease-out-quad transform mr-12">
                    join us
                  </div>

                  <div className="button__plus backface-hidden border border-solid flex items-center justify-center h-16 w-16 absolute right-0">
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

            <div className="home-cover__label bottom-0 bg-white text-blue z-1 font-bold text-xl px-6 py-2">
              THINK<span>2</span>MORROW
            </div>
          </div>

          <div className="w-full h-full bg-yellow" id="part2">
            <header
              id="header_part2"
              className="header fixed flex items-center w-full opacity-0 invisible rg:opacity-100 rg:visible z-20"
              // style="--header-bg-color: var(--color-transparent); --header-text-color: var(--color-brown);"
              data-text-color="brown"
              style={{
                backgroundColor: "var(--color-transparent)",
                color: "var(--color-brown)",
              }}
            >
              <div className="header__container flex items-center justify-between w-full">
                <div className="flex items-center h-full">
                  <a
                    href="https://www.agap2.fr"
                    className="header__logo flex items-center justify-center h-full container-main-l rg:px-8 bg-white mr-2 sm:mr-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="logo"
                      viewBox="0 0 177.49 55.03"
                    >
                      <path
                        fill="#ffcd00"
                        d="M147.32,42.32v-6.7L161,23c3.84-3.47,5.79-5.54,5.79-8.22,0-3.9-2.74-5.6-6.76-5.6-2.14,0-5.55.43-11.09,2.26l-2.14-8.47A45.34,45.34,0,0,1,161.64,0c10.6,0,15.3,6.15,15.3,13.28,0,6.15-4.14,10.77-9.63,15.7l-5.42,4.5h15.6v8.84Z"
                      ></path>
                      <path
                        className="logo-letter"
                        fill="#0226AA"
                        d="M32.48,10.33v29H22.54v-2A12.94,12.94,0,0,1,14,40.23c-7.14,0-14-5.54-14-15.83C.25,15.08,5.67,8.87,14.81,8.87c5.6,0,8.71.43,17.67,1.46M9.57,24.58c0,4.45,2.74,7.49,6.64,7.49a9.66,9.66,0,0,0,6.33-2.55V17.16c-2-.19-3.83-.31-6-.31-4.82,0-7,3.23-7,7.73"
                      ></path>
                      <path
                        className="logo-letter"
                        fill="#0226AA"
                        d="M104.52,10.33v29H94.59v-2a13,13,0,0,1-8.53,2.92c-7.13,0-14-5.54-14-15.83.24-9.32,5.67-15.53,14.8-15.53,5.61,0,8.72.43,17.67,1.46M81.61,24.58c0,4.45,2.74,7.49,6.64,7.49a9.69,9.69,0,0,0,6.34-2.55V17.16c-2-.19-3.84-.31-6-.31-4.81,0-7,3.23-7,7.73"
                      ></path>
                      <path
                        className="logo-letter"
                        fill="#0226AA"
                        d="M50.9,8.87c-9.2,0-14.63,6.22-14.81,15.53,0,9,5.74,14.39,12.49,15.27.44,0,1.14.1,2,.14h2.22c2.26-.1,4.73-.57,5.93-2a16,16,0,0,1-.23,3.09c0,.16,0,.32-.08.47a10.15,10.15,0,0,1-.34,1.23l0,.08a3.54,3.54,0,0,1-.49,1c-1.24,2.08-3.52,3.19-6.94,3.19a55.31,55.31,0,0,1-9-1.22l-1.4,7.55A38.39,38.39,0,0,0,51,55C62.6,55,68.57,48.7,68.57,38.9V10.34c-6.52-.67-10-1.47-17.67-1.47m7.74,22.41a39.59,39.59,0,0,1-6.34.43c-3.9,0-6.64-3.11-6.64-7.13,0-4.5,2.13-7.73,7-7.73,2.14,0,4,.12,6,.3Z"
                      ></path>
                      <path
                        className="logo-letter"
                        fill="#0226AA"
                        d="M126.73,8.87a129.76,129.76,0,0,0-17.61,1.46V53H119V37.45s1.88,2.28,8.65,2.34c7.36-.24,13.9-5.74,13.9-15.39-.31-9.31-5.6-15.53-14.81-15.53m-1.34,22.84a41.55,41.55,0,0,1-6.4-.43V17.16c2.08-.19,3.84-.3,6-.3,4.88,0,7,3.22,7,7.73,0,4-2.74,7.12-6.64,7.12"
                      ></path>
                    </svg>
                  </a>

                  <div className="flex items-stretch categories__wrap pointer-events-none transition-opacity duration-1000 ease-out-quad opacity-0 js-departments">
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b active border-l rounded-l-full"
                      data-slug="industrie"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 23.9 23.9"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M6.26,14.81a2.83,2.83,0,1,0,5.66,0,.62.62,0,0,1,.62-.62.61.61,0,0,1,.61.62,4.07,4.07,0,1,1-4.06-4.06h0a.61.61,0,0,1,.62.61.62.62,0,0,1-.62.62h0A2.83,2.83,0,0,0,6.26,14.81ZM1.33,16.92l.89.16a7.6,7.6,0,0,0,.42,1l-.53.74a1.59,1.59,0,0,0,.18,2l.76.76a1.59,1.59,0,0,0,2,.18l.74-.52a7.24,7.24,0,0,0,1,.41l.16.89A1.58,1.58,0,0,0,8.55,23.9H9.63a1.59,1.59,0,0,0,1.57-1.32l.16-.89a6.57,6.57,0,0,0,1-.42l.74.53a1.6,1.6,0,0,0,2-.18l.78-.76a1.59,1.59,0,0,0,.17-2l-.52-.74a8.65,8.65,0,0,0,.42-1l.89-.16a.61.61,0,0,0,.52-.69.63.63,0,0,0-.67-.53h-.06l-1.27.22a.61.61,0,0,0-.49.45,6.19,6.19,0,0,1-.6,1.43.63.63,0,0,0,0,.66l.74,1.06A.35.35,0,0,1,15,20l-.76.76a.35.35,0,0,1-.46,0l-1.05-.74a.63.63,0,0,0-.67,0,6.19,6.19,0,0,1-1.43.6.61.61,0,0,0-.45.49L10,22.37a.36.36,0,0,1-.35.3H8.55a.37.37,0,0,1-.36-.3L8,21.1a.6.6,0,0,0-.44-.49A6.26,6.26,0,0,1,6.09,20a.61.61,0,0,0-.66,0l-1,.74a.36.36,0,0,1-.47,0L3.15,20a.36.36,0,0,1,0-.46l.74-1.05a.63.63,0,0,0,0-.67,5.94,5.94,0,0,1-.6-1.42.6.6,0,0,0-.49-.44l-1.27-.22a.37.37,0,0,1-.29-.37V14.27a.36.36,0,0,1,.3-.35L2.8,13.7a.6.6,0,0,0,.49-.45,6.19,6.19,0,0,1,.6-1.43.61.61,0,0,0,0-.66L3.12,10.1a.35.35,0,0,1,0-.46l.76-.76a.35.35,0,0,1,.46,0l1,.74a.63.63,0,0,0,.67,0A5.94,5.94,0,0,1,7.52,9,.63.63,0,0,0,8,8.52l.22-1.27a.61.61,0,0,0-.51-.71A.62.62,0,0,0,7,7,.07.07,0,0,1,7,7l-.14.9a8.09,8.09,0,0,0-1,.42l-.74-.52a1.59,1.59,0,0,0-2,.17l-.76.76a1.6,1.6,0,0,0-.19,2.05l.52.74a8.09,8.09,0,0,0-.42,1l-.89.15A1.6,1.6,0,0,0,0,14.27v1.08a1.59,1.59,0,0,0,1.32,1.57Zm22.57-10v.85a1.37,1.37,0,0,1-1.15,1.36l-.62.11a4.84,4.84,0,0,1-.28.66l.37.53a1.38,1.38,0,0,1-.15,1.77l-.6.6a1.38,1.38,0,0,1-1.78.15l-.52-.36-.66.27-.11.62A1.39,1.39,0,0,1,17,14.57h-.84a1.39,1.39,0,0,1-1.37-1.14l-.11-.63a6.5,6.5,0,0,1-.66-.27l-.52.36a1.39,1.39,0,0,1-1.78-.15l-.6-.6A1.39,1.39,0,0,1,11,10.36l.37-.52a4.84,4.84,0,0,1-.28-.66l-.61-.1A1.37,1.37,0,0,1,9.33,7.72V6.87A1.39,1.39,0,0,1,10.47,5.5l.63-.11a6.5,6.5,0,0,1,.27-.66L11,4.21a1.38,1.38,0,0,1,.15-1.78l.59-.58a1.37,1.37,0,0,1,1.77-.16l.53.37a4.88,4.88,0,0,1,.66-.29l.11-.63A1.38,1.38,0,0,1,16.18,0H17A1.39,1.39,0,0,1,18.4,1.15l.11.62a6.21,6.21,0,0,1,.66.28l.52-.37a1.37,1.37,0,0,1,1.77.16l.59.6a1.38,1.38,0,0,1,.16,1.77l-.37.52q.15.33.27.66l.63.11A1.39,1.39,0,0,1,23.9,6.87Zm-1.23,0a.16.16,0,0,0-.13-.15l-1-.18a.6.6,0,0,1-.49-.44A4.27,4.27,0,0,0,20.59,5a.61.61,0,0,1,0-.66l.59-.84a.17.17,0,0,0,0-.2l-.6-.6a.17.17,0,0,0-.2,0l-.83.59a.61.61,0,0,1-.66,0,5,5,0,0,0-1.1-.46.61.61,0,0,1-.45-.49l-.17-1A.16.16,0,0,0,17,1.22h-.85a.16.16,0,0,0-.15.13l-.17,1a.64.64,0,0,1-.45.5,4.24,4.24,0,0,0-1.1.45.61.61,0,0,1-.66,0l-.84-.58a.15.15,0,0,0-.2,0l-.6.6a.15.15,0,0,0,0,.2l.58.83a.63.63,0,0,1,0,.67,4.65,4.65,0,0,0-.46,1.1.6.6,0,0,1-.49.44l-1,.18a.14.14,0,0,0-.12.15v.85a.16.16,0,0,0,.12.15l1,.17a.62.62,0,0,1,.5.45,4.55,4.55,0,0,0,.45,1.1.61.61,0,0,1,0,.66l-.58.83a.14.14,0,0,0,0,.2l.6.6a.15.15,0,0,0,.2,0l.83-.58a.61.61,0,0,1,.66,0,5.21,5.21,0,0,0,1.09.45.6.6,0,0,1,.44.49l.18,1a.15.15,0,0,0,.15.13H17a.15.15,0,0,0,.15-.13l.18-1a.6.6,0,0,1,.45-.49,5,5,0,0,0,1.1-.46.61.61,0,0,1,.66,0l.83.59a.17.17,0,0,0,.2,0l.6-.6a.15.15,0,0,0,0-.2l-.58-.83a.65.65,0,0,1,0-.66,4.35,4.35,0,0,0,.46-1.09.63.63,0,0,1,.49-.45l1-.18a.15.15,0,0,0,.13-.15Zm-3.16.42a2.91,2.91,0,1,1-2.9-2.9h0a2.9,2.9,0,0,1,2.9,2.9Zm-1.23,0A1.68,1.68,0,1,0,16.61,9h0A1.68,1.68,0,0,0,18.28,7.29Z"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm md:text-base">industrie</p>
                    </div>
                    <div
                      className="px-3 sm:px-4 py-2 flex items-center cursor-pointer border-t border-b border-r rounded-r-full"
                      data-slug="it"
                    >
                      <div className="hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24.73 21.64"
                        >
                          <path
                            fill="#2a2a2a"
                            d="M23.7,0H1A1,1,0,0,0,0,1V16.49a1,1,0,0,0,1,1H9L8,20.61H5.67v1H19.58v-1H17l-1-3.09H23.7a1,1,0,0,0,1-1V1A1,1,0,0,0,23.7,0ZM16,20.61H9.12l1-3.09H15Zm7.73-4.12H1V1H23.7Z"
                          ></path>
                          <path
                            fill="#2a2a2a"
                            d="M3.09,15.46H21.64a1,1,0,0,0,1-1V3.09a1,1,0,0,0-1-1H3.09a1,1,0,0,0-1,1V14.43A1,1,0,0,0,3.09,15.46Zm0-12.37H21.64V14.43H3.09Z"
                          ></path>
                          <line
                            x1="14.08"
                            y1="5.64"
                            x2="11.08"
                            y2="11.64"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></line>
                          <path
                            d="M15.38,7l3,1.81-3,1.72"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></path>
                          <path
                            d="M9.34,7l-3,1.81,3,1.72"
                            // style="fill:none;stroke:#2a2a2a"
                            className="is-stroke"
                          ></path>
                        </svg>
                      </div>

                      <p className="text-sm md:text-base">IT</p>
                    </div>
                  </div>
                </div>

                <div className="container-main-r rg:hidden">
                  <div className="hamburger ml-auto w-6">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <nav className="header__menu px-4 rg:px-3 lg:px-4 xl:px-8 flex items-center hidden rg:flex">
                  <ul className="flex rg:mr-6 lg:mr-10 xl:mr-32">
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/agap2/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        agap2
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/metiers/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Métiers
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/esprit/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Esprit
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1 submenu">
                      <div className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4">
                        Carrière
                        <div className="points flex items-stretch ml-1">
                          <div className="bg-blue points__pt mr-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt mx-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt ml-px transform backface-hidden"></div>
                        </div>
                      </div>

                      <div className="header__submenu absolute top-full left-0 bg-white text-base flex-col items-start py-6 pl-6 pr-12 hidden">
                        <a
                          href="https://www.agap2.fr/carriere/devenir-consultant/"
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Devenir Consultant en ingénierie
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/devenir-ingenieur-d-affaires/"
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Devenir Ingénieur d’affaires
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/parcours-agapiens/"
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Parcours agapiens
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/formation/"
                          className="text-body mb-4 whitespace-no-wrap transform backface-hidden"
                        >
                          Formation
                        </a>
                      </div>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/blog/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/categorie/presse/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Presse
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1">
                      <a
                        href="https://www.agap2.fr/contact/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="header__menu__el font-semibold relative text-lg rg:text-base lg:text-lg mx-1 border rounded-l-full rounded-r-full overflow-hidden">
                      <a
                        href="https://www.agap2.fr/carriere/offres-demploi/"
                        className="flex items-end pt-2 pb-3 rg:px-3 lg:px-4"
                      >
                        Offres d’emploi
                      </a>
                    </li>
                  </ul>

                  <ul className="lang-switcher leading-none">
                    <li>
                      <a
                        href="https://www.agap2.fr"
                        data-router-disabled=""
                        data-noprefetch=""
                        data-lang="fr"
                        className="font-semibold uppercase text-sm "
                      >
                        fr
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.agap2.fr/en/"
                        data-router-disabled=""
                        data-noprefetch=""
                        data-lang="en"
                        className="font-semibold uppercase text-sm  line-through"
                      >
                        en
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>

            <div className="js-menu-mobile menu-mobile fixed top-0 left-0 inset-0 bg-blue z-1000 pointer-events-none select-none rg:hidden">
              {/* <header
                id="header_mobile_2"
                className="hidden header fixed flex flex-wrap w-full"
                // style="background-color: var(--color-transparent);"
              >
                <div className="header__container flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <a
                      href="https://www.agap2.fr"
                      className="header__logo flex items-center justify-center h-full container-main-l rg:px-8 mr-2 sm:mr-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="129"
                        height="40.001"
                        viewBox="0 0 129 40.001"
                      >
                        <g id="logo" transform="translate(-55.971 -44.738)">
                          <g id="Groupe_1" data-name="Groupe 1">
                            <path
                              id="Tracé_1"
                              data-name="Tracé 1"
                              d="M163.048,75.5V70.629l9.921-9.206c2.791-2.522,4.207-4.027,4.207-5.974,0-2.834-1.991-4.073-4.916-4.073a26.381,26.381,0,0,0-8.059,1.64l-1.553-6.153a32.981,32.981,0,0,1,10.807-2.124c7.707,0,11.117,4.468,11.117,9.649,0,4.47-3.011,7.833-7,11.418l-3.94,3.273h11.338V75.5Z"
                              fill="#ffcd00"
                            ></path>
                            <path
                              id="Tracé_2"
                              data-name="Tracé 2"
                              d="M79.578,52.251V73.318h-7.22V71.858a9.458,9.458,0,0,1-6.2,2.125c-5.184,0-10.188-4.029-10.188-11.505.179-6.773,4.118-11.289,10.762-11.289,4.074,0,6.334.312,12.845,1.063M62.925,62.608c0,3.232,1.993,5.445,4.826,5.445a7.042,7.042,0,0,0,4.607-1.859V57.21c-1.462-.135-2.791-.223-4.339-.223-3.5,0-5.094,2.347-5.094,5.62"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_3"
                              data-name="Tracé 3"
                              d="M131.937,52.251V73.318h-7.218V71.858a9.467,9.467,0,0,1-6.2,2.125c-5.182,0-10.187-4.029-10.187-11.505.177-6.773,4.12-11.289,10.76-11.289,4.074,0,6.334.312,12.845,1.063M115.284,62.608c0,3.232,1.993,5.445,4.827,5.445a7.047,7.047,0,0,0,4.608-1.859V57.21c-1.462-.135-2.792-.223-4.341-.223-3.5,0-5.094,2.347-5.094,5.62"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_4"
                              data-name="Tracé 4"
                              d="M92.966,51.19c-6.689,0-10.629,4.516-10.763,11.288,0,6.542,4.171,10.458,9.076,11.093.324.036.828.079,1.438.1.562,0,1.093,0,1.618-.006,1.643-.076,3.434-.413,4.305-1.422a11.879,11.879,0,0,1-.161,2.246c-.018.115-.039.228-.062.341a6.9,6.9,0,0,1-.249.891l-.023.062a2.713,2.713,0,0,1-.358.7c-.9,1.516-2.56,2.32-5.042,2.32a40.332,40.332,0,0,1-6.512-.885l-1.017,5.487a27.944,27.944,0,0,0,7.794,1.329c8.458,0,12.8-4.6,12.8-11.728V52.252c-4.738-.487-7.263-1.063-12.842-1.063m5.625,16.288a29.08,29.08,0,0,1-4.608.309,4.871,4.871,0,0,1-4.826-5.18c0-3.273,1.549-5.619,5.093-5.619,1.549,0,2.88.088,4.341.222Z"
                              fill="#fff"
                            ></path>
                            <path
                              id="Tracé_5"
                              data-name="Tracé 5"
                              d="M148.081,51.188a93.75,93.75,0,0,0-12.8,1.064V83.277h7.176V71.958s1.362,1.659,6.286,1.7c5.351-.17,10.1-4.167,10.1-11.181-.223-6.772-4.073-11.289-10.763-11.289m-.973,16.6a29.551,29.551,0,0,1-4.651-.309V57.21c1.507-.134,2.789-.222,4.384-.222,3.545,0,5.094,2.346,5.094,5.619a4.872,4.872,0,0,1-4.827,5.18"
                              fill="#fff"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div className="container-main-r">
                    <div className="js-menu-mobile-hamburger hamburger hamburger--white active ml-auto w-6 rg:hidden">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

                <nav className="menu-mobile__nav w-full overflow-y-auto">
                  <ul className="flex flex-col overflow-x-hidden">
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/agap2/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        agap2
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/metiers/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Métiers
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/esprit/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Esprit
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group submenu">
                      <div className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500 break-all">
                        Carrière
                        <div className="points flex items-stretch ml-1">
                          <div className="bg-blue points__pt mr-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt mx-px transform backface-hidden"></div>
                          <div className="bg-blue points__pt ml-px transform backface-hidden"></div>
                        </div>
                      </div>

                      <div className="menu-mobile__submenu absolute flex flex-col text-white transition-all duration-500 overflow-hidden py-8">
                        <a
                          href="https://www.agap2.fr/carriere/devenir-consultant/"
                          className="text-lg mb-4 last:mb-0"
                        >
                          Devenir Consultant en ingénierie
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/devenir-ingenieur-d-affaires/"
                          className="text-lg mb-4 last:mb-0"
                        >
                          Devenir Ingénieur d’affaires
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/parcours-agapiens/"
                          className="text-lg mb-4 last:mb-0"
                        >
                          Parcours agapiens
                        </a>
                        <a
                          href="https://www.agap2.fr/carriere/formation/"
                          className="text-lg mb-4 last:mb-0"
                        >
                          Formation
                        </a>
                      </div>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/blog/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/categorie/presse/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Presse
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/contact/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <a
                        href="https://www.agap2.fr/carriere/offres-demploi/"
                        className="menu-mobile__link absolute top-0 left-0 mt-10 pl-6 transition-all duration-500"
                      >
                        Offres d’emploi
                      </a>
                    </li>
                    <li className="menu-mobile__item relative font-semibold w-7/12 h-20 pl-6 border-t ml-auto backface-hidden first:border-0 border-white text-white text-2-5xl group">
                      <ul className="lang-switcher leading-none">
                        <li>
                          <a
                            href="https://www.agap2.fr"
                            data-router-disabled=""
                            data-noprefetch=""
                            data-lang="fr"
                            className="font-semibold uppercase text-sm "
                          >
                            fr
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.agap2.fr/en/"
                            data-router-disabled=""
                            data-noprefetch=""
                            data-lang="en"
                            className="font-semibold uppercase text-sm  line-through"
                          >
                            en
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </header> */}
            </div>

            <div className="home-cover__content relative flex flex-col md:justify-center w-full h-full mx-auto px-5 pt-24 md:pt-0 z-10">
              <h1 className="font-black flex flex-wrap items-start w-full">
                <div
                  className="w-max-content md:w-1/2 text-4xl md:text-5xl xl:text-6xl text-blue md:text-right pr-6 md:pr-12 js-tosplit"
                  data-cartapus="visible"
                  // style=""
                >
                  <div
                    className="line"
                  >
                    <div
                      className="word"
                    >
                      The
                    </div>
                    <div
                      className="word"
                    >
                      world
                    </div>
                  </div>
                  <div
                    className="line"
                  >
                    <div
                      className="word"
                    >
                      needs...
                    </div>
                  </div>
                </div>
                <div
                  className="home-cover__you absolute md:relative md:right-0 md:top-0 md:-mt-4 lg:-mt-8 md:ml-auto pl-12 md:pr-10 lg:pr-24 xl:pr-40 md:pl-12 w-auto text-5xl md:text-6xl xl:text-9xl text-yellow js-tosplit"
                  data-cartapus="visible"
                >
                  <div
                    className="line"
                  >
                    <div
                      className="word"
                    >
                      you
                    </div>
                  </div>
                </div>
              </h1>

              <div className="home-cover__btn w-1/2 hidden md:flex justify-end pr-12 mt-12">
                <a
                  href="https://www.agap2.fr/carriere/offres-demploi/"
                  className="button relative flex items-center button--brown button--big"
                >
                  <div className="button__text flex-1 backface-hidden transition-transform duration-500 ease-out-quad transform mr-12">
                    join us
                  </div>

                  <div className="button__plus backface-hidden border border-solid flex items-center justify-center h-16 w-16 absolute right-0">
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

            <div className="home-cover__label bottom-0 bg-white text-blue z-1 font-bold text-xl px-6 py-2">
              THINK<span>2</span>MORROW
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
