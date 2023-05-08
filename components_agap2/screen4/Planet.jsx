import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useRef, forwardRef, useEffect, useCallback } from "react";
import * as THREE from "three";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SphereGeometry } from "three";
gsap.registerPlugin(ScrollTrigger);

const Planete = (props, ref) => {
  const { nodes } = useLoader(GLTFLoader, "/agap2/low_poly_earth.gltf");

  var ColorYellow="#ffcd00"

  var ColorBlue="#0226aa"

  const refLoc = useRef(null);

  const oldScrollY = useRef(0);
  const rotationSpeed = useRef(0.005);

  useEffect(() => {

    // if (window) {
    //   ColorYellow = getComputedStyle(
    //     document.documentElement
    //   ).getPropertyValue("--color-yellow");
  
    //   ColorBlue = getComputedStyle(document.documentElement).getPropertyValue(
    //     "--color-blue"
    //   );
    // }
    
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  const controlDirection = (e) => {
    rotationSpeed.current = 0.3;
  };

  // var cumulDelta = useRef(0);
  useFrame(({ clock }) => {
    if (rotationSpeed.current >= 0.005) {
      rotationSpeed.current -= 0.005;
    } else {
      rotationSpeed.current = 0.005;
    }
    if (refLoc.current) {
      refLoc.current.rotation.y += rotationSpeed.current;
    }

    // console.log(rotationSpeed.current);
    // cumulDelta += delta;
    // let measure = new THREE.Vector3();
    // let box = ref.children[0].getSize(measure);
    // if (Math.trunc(clock.getElapsedTime()) % 5 == 0) {
    // console.log(clock.getElapsedTime());
    // let measure = new THREE.Vector3();

    // let box = ref.children[0].getSize(measure);
    // refLoc.current.children[0].children[0].geometry.computeBoundingBox();

    // refLoc.current.children[0].children[0].geometry.boundingBox.getSize(
    //   measure
    // );

    // console.log(measure);
    // }
  });

  return (
    <group ref={refLoc}>
      <group ref={ref}>
        {/* <mesh scale={[0.01, 0.01, 0.01]} geometry={nodes.mesh_0.geometry}>
          <meshStandardMaterial color="#ff1" opacity={0.5} />
        </mesh> */}
        <mesh scale={[0.01, 0.01, 0.01]} geometry={nodes.mesh_0_1.geometry}>
          <meshStandardMaterial color={ColorYellow} opacity={1} />
        </mesh>
        <mesh scale={[0.01, 0.01, 0.01]}>
          <meshStandardMaterial color={ColorBlue} opacity={1} />
          <sphereGeometry args={[0.96, 32, 16]} />
        </mesh>
      </group>
      {/* <mesh>
        <meshStandardMaterial color="#ff0" opacity={1} />
        <sphereGeometry args={[15, 32, 16]} />
      </mesh> */}
    </group>
  );
};

const PlaneteBis = forwardRef(Planete); //erreur si forward ref mis directement au début de <Planete />

const CanvasPlanete = () => {
  // let ColorYellow = window
  //   .getComputedStyle(document.documentElement)
  //   .getPropertyValue("--color-yellow");

  // console.log(ColorYellow);
  const ref = useCallback((node) => {
    if (node === null) {
      // DOM node referenced by ref has been unmounted
    } else {
      // DOM node referenced by ref has changed and exists
      let ctx = gsap.context(() => {
        var scrollSunTl = gsap.timeline();
        // console.log("color", node.children[0].material.color);
        ScrollTrigger.create({
          trigger: "#main",
          // endTrigger: ".screen6",
          start: "top top", // which means "when the top of the trigger hits 40px above the bottom of the viewport
          end: "bottom-=10% bottom",
          // end: "+=200",
          toggleActions: "play pause resume reset",
          // markers: true,
          scrub: 3,
          animation: scrollSunTl,
          // pin: "#canvas",
        });

        scrollSunTl.to(node.scale, {
          x: 150,
          y: 150,
          z: 150,
        });

        // scrollSunTl.to(node.rotation, {
        //   x: 0,
        //   y: (3 * Math.PI) / 4,
        //   z: 0,
        // });

        scrollSunTl.to(
          node.children[1].material.color,
          {
            r: 255 / 255,
            g: 205 / 255,
            b: 0 / 255,
          },
          "-=0.9"
        );
      });
      return () => ctx.revert();
    }
  }, []); // adjust deps

  return (
    <div
      id="main"
      style={{
        height: "300vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        id="canvas"
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "absolute",
          left: "0vh",
          width: "30vw",
          zIndex: "50",
        }}
      >
        <Canvas>
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={45} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

          <PlaneteBis ref={ref} />
        </Canvas>
      </div>
    </div>
  );
};

export default CanvasPlanete;
