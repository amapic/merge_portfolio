import { Html, Head, Main, NextScript } from "next/document";
// import { AnimatePresence, motion } from "framer-motion";
// import { truncate } from "lodash";
import React, { useState, createContext, useCallback } from "react";
import gsap from "gsap";
import TransitionProvider, {
  TransitionLayout,
  FadeInOut,
  AnimateInOut,
} from "./../context";
export default function Document() {
  return (
    // <TransitionProvider>
      // <TransitionLayout>
        // <FadeInOut>
          <Html lang="en">
            <Head />

            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        // </FadeInOut>
      // </TransitionLayout>
    // </TransitionProvider>
  );
}

// export { TransitionContext, TransitionProvider }
