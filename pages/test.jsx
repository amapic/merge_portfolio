// import { getStaticProps } from 'next/static'
import Script from "next/script";

import * as THREE from "three";

// export const getStaticProps = async () => {
//   // Fetch data from an external API or database
//   const data = [];

//   // Pass the fetched data to the props
//   return {
//     props: {
//       data,
//     },
//   };
// };

export function Home({ Component, pageProps }) {
  return (
    <div id="achanger">
      

      <main>
        {/* css à importer */}
        <a
        className="link"
        href="https://www.linkedin.com/in/amaurypichat/"
        //   style="
        //   height: 10vh;
        //   width: 10vh;
        //   top: 0vh;
        //   left: 0vh;
        //   z-Index: 1000;
        // "
      >
        <img
          //     style="
          //   height: 100%;
          // "
          src="github.png"
          className="cursor-pointer mx-2 img_rgb_effect aaa"
        />
      </a>
      

        <div className="scrollable">
          <div className="container">
            <div className="image-container">
              <h1 className="text-gris">
                <a href="/siteWeb1/index.html">Exemple de site web classique</a>
              </h1>
              <img className="img" src="blackgit.png" alt="" />
            </div>
            <div className="image-container">
              <h1 className="text-blanc">
                <a href="/agap2/agap2.html">
                  Reproduction de la front page d'AGAP2.fr
                </a>
              </h1>
              {/* <img className="img" src="./images/2nb.jpg" alt="" /> */}
            </div>
            <div className="image-container">
              <h1 className="text-blanc">
                <a href="/planet/index.html">
                  Exemple d'utilisation de Three.js
                </a>
              </h1>
              {/* <img className="img" src="./images/1bis.jpg" alt="" /> */}
            </div>
            {/* <!-- <div className="image-container">
                    <h1 className="text-gris">ROSE</h1>
                    <img src="./images/4.jpeg" alt="">
                </div> --> */}
          </div>
        </div>
      </main>

      {/* <Component {...pageProps} /> */}
      <Script
        //   type="text/javascript"
        type="module"
        // strategy="lazyOnload"
        src="canvas.js"
      >
        {/* onLoad={() => { 
          console.log('Script has loaded');
        }} */}
      </Script>
    </div>
  );
}

// const Home = ({ data }) => {
//     return (
//         <div>
//             <h1>Home</h1>
//             {/* <ul>
//                 {data.map(item => (
//                     <li key={item.id}>{item.title}</li>
//                 ))}
//             </ul> */}
//         </div>
//     )
// }

export default Home;
