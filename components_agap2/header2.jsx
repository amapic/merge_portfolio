// ImageBitmapRenderingContext;
import { useEffect, useLayoutEffect } from "react";

export default function Header() {
  useEffect(() => {
    const para = document.querySelector(".header__menu__el");

  });
  return (
    <header
      className="header fixed flex items-center w-full z-1000 rg:z-90"
      //   style="--header-bg-color:var(--color-white); --header-text-color:var(--color-brown);"
      data-text-color="brown"
      id="header_oprou"
      style={{
        height: "10vh",
        zIndex: "11",
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.9 23.9">
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
  );
}
