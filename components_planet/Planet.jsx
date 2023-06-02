/* eslint-disable */
// @ts-ignore
import React, { Suspense, useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";

import { useSphere } from "@react-three/cannon";
import * as three from "three";

import { animated } from "@react-spring/three";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import TextPlanet from "./TextPlanet";

import { debounce } from "lodash";
import { usePlanetStore } from "../pages/planet";

import { useRouter } from 'next/router'

// export function useBasePath(){
//   const { basePath } = useRouter();
//   return basePath;
// }

export default function Planet({ compteur, image,imageData, ...args }) {

  const colorMap = [usePlanetStore,
    useLoader(TextureLoader, "/planet/earth.jpg"),
    useLoader(TextureLoader, "/planet/mars.jpg"),
    useLoader(TextureLoader, "/planet/mercure.jpg"),
    useLoader(TextureLoader, "/planet/neptune.jpg"),
    useLoader(TextureLoader, "/planet/moon.jpg"),
    useLoader(TextureLoader, "/planet/jupiter.jpg"),
    useLoader(TextureLoader, "/planet/venus.jpg"),
    useLoader(TextureLoader, "/planet/uranus.jpg"),
  ];

  // console.log(useRouter())

  // const colorMap = [useLoader(TextureLoader, "@/planet/earth.jpg")]

  

  const nbMapPlanet = useRef(colorMap[Math.ceil(7 * Math.random())]);


  const { planet, updateData } = usePlanetStore((state) => state);

  if (image.name == "Kepler-107 e") {
    // console.log(image);
  }


  const [sphereX, setSphereX] = useState(0);
  const [semi_major_axis, setSemi_major_axis] = useState(image.semi_major_axis);


  const [hoveredd, hover] = useState(false);

  const clickedd = useRef(false);

  if (planet) {
    if (planet.name == image.name) {
      clickedd.current = true;
    } else {
      clickedd.current = false;
    }

  }

  useEffect(() => {
    var timer = setTimeout(function () {
      if (hover) {
        hover(false);
      }
    }, 500);
  }, []);

  const [sphereRef, sphereApi] = useSphere(() => ({
    type: "Dynamic",
    mass: 0,
    position: [1, 0, 0],
  }));

  const [cardRef, cardApi] = useSphere(() => ({
    type: "Dynamic",
    mass: 0,
    position: [1, 0, 0],
  }));

  useFrame(() => {
    if (image.semi_major_axis > semi_major_axis) {
      setSemi_major_axis(semi_major_axis + 0.05);
    }

    setSphereX((sphereX) => sphereX + 0.02);
    sphereApi.position.set(
      semi_major_axis * Math.cos((sphereX * 2 * Math.PI) / image.period),
      0,
      semi_major_axis * Math.sin((sphereX * 2 * Math.PI) / image.period)
    );

    sphereApi.rotation.set(0, sphereX, 0);
    cardApi.position.set(
      semi_major_axis * Math.cos((sphereX * 2 * Math.PI) / image.period),
      0,
      semi_major_axis * Math.sin((sphereX * 2 * Math.PI) / image.period)
    );
  });

  const debouncedHandleMouseLeave = debounce(() => hover(false), 500);

  return (
    <>
      <animated.mesh ref={cardRef}>
        <TextPlanet
          {...args}
          hoveredd={hoveredd}
          clickedd={clickedd.current}
          text={imageData.text}
          mass={imageData.mass}
          rayon={imageData.rayon}
          semi_major_axis_orig={imageData.semi_major_axis_orig}
          period_orig={imageData.period_orig}
          image={imageData}
          star={false}
        />
      </animated.mesh>
      <animated.mesh
        ref={sphereRef}
        {...args}
        onClick={() => {
          clickedd.current = true;
          updateData(image);
        }}
        onPointerOver={() => {
          debouncedHandleMouseLeave.cancel();
          hover(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(x) => {
          document.body.style.cursor = "auto";
          debouncedHandleMouseLeave();
        }}
      >
        <sphereGeometry args={[image.radius, 32, 32]} />
        <meshStandardMaterial
          map={nbMapPlanet.current}
          // map={image.Mmap}
          // toneMapped={false}
          // transparent={true}
          // opacity={1}
          // color={[128, 128, 128]}
          // emissiveIntensity={0.1}
        />
      </animated.mesh>
    
    </>
  );
}
