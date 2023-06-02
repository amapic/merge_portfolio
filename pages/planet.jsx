import React, {
  Suspense,
  useRef,
  useEffect,
  useState,
  createContext,
} from "react";

// import Player from "../components_planet/audio";

import { Canvas, extend } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

import { isMobile } from "react-device-detect";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

import PanelGauche, { PanelPlanete } from "../components_planet/PanneauMobile";



import {
  Stats,
  OrbitControls,
  Effects as EffectsComposer,
  Text,
  Text3D,
} from "@react-three/drei";

import { Debug, Physics, usePlane, useSphere } from "@react-three/cannon";

import { UnrealBloomPass, WaterPass } from "three-stdlib";
import { useControls } from "leva";
import { Effects, Stars } from "@react-three/drei";

import Scene from "../components_planet/Scene";

import Carousel from "../components_planet/Carousel";

import Navv from "../components_planet/Nav";


extend({ UnrealBloomPass });

import { create } from "zustand";

import TransitionProvider, {
  TransitionLayout,
  FadeInOut,
  AnimateInOut,
  CuubeCanvas,
} from "../context";

export const AppContext = createContext();

import { Html, useProgress } from '@react-three/drei'


const App = () => {
  // const cam = useRef();
  const [nActive2, setUsers] = useState(0);

  const [_isMobile, setMobile] = useState(true);

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  const dispatchUserEvent = (payload) => {
    setUsers(payload);
  };

  function useDeviceDetect() {
    const [isTouchDevice, setIsTouchDevice] = React.useState(false);
    React.useEffect(() => {
      if (!window.matchMedia) return;
      setIsTouchDevice(window.matchMedia("(pointer:coarse)").matches);
    }, []);

    return isTouchDevice;
  }


  const {
    nActive,
    droite,
    gauche,
    gachette,
    onClickGauche,
    onClickDroite,
    updateGachette,
    stopDroite,
    stopGauche,
  } = useDeplacementStore((state) => state);

  const intensity = 0.1;
  const radius = 0.9;
  const luminanceThreshold = 1;
  const luminanceSmoothing = 1;

  const [isPlaying, setIsPlaying] = useState(false);

  // const values = useContext(MyContext);

  // useEffect(() => {
  //   isPlaying ? audio.play() : audio.pause();
  // }, [isPlaying]);

  useEffect(() => {
    // if (window.innerWidth <= 768) {
    //   FOV = 50
    //   FAR = 1200
    //   // 769px - 1080px screen width camera
    // } else if (window.innerWidth >= 769 && window.innerWidth <= 1080) {
    //   FOV = 50
    //   FAR = 1475
    //   // > 1080px screen width res camera
    // } else {
    //   FOV = 40
    //   FAR = 1000
    // }
  }, []);

  return (
    <>
      <CuubeCanvas />
      {/* <Canvas> */}
      <TransitionProvider>
        <TransitionLayout>
          <FadeInOut>
          
            {/* {true ? ( */}
            <>
              {/* <Player /> */}
              <div
                style={{
                  height: "100vh",
                  width: "100vw",
                  backgroundColor: "#252934",
                }}
              >
                <PanelGauche />

                <Carousel />
                <Navv />
                

                <Canvas
                  gl={{ antialias: false }}
                  camera={{
                    near: 0.1,
                    far: 50,
                    zoom: 1,
                    position: [4, 4, 4],
                    maxPolarAngle: 0.85,
                  }}
                  onCreated={({ gl, camera }) => {
                    gl.setClearColor("#252934", 0);
                    camera.lookAt(0, 0, 0);

                    camera.position.set(10, 3, 10);
                  }}
                >
                  <EffectComposer>
                    <Bloom
                      luminanceThreshold={luminanceThreshold}
                      luminanceSmoothing={luminanceSmoothing}
                      // height={300},
                      mipmapBlur={true}
                      intensity={intensity}
                      radius={radius}
                    />
                  </EffectComposer>
                  
                  <OrbitControls
                    // maxPolarAngle={0.85}
                    maxDistance={20}
                  />
                  <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                  />

                  <Physics allowSleep={false} gravity={[0, 0, 0]}>
                    <Scene />
                  </Physics>
                </Canvas>
              </div>
              <div
                style={{
                  position: "fixed",
                  bottom: "10vh",
                  left: "10vh",
                  height: "20vh",
                  width: "20vh",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  cursor: "pointer",
                  display: _isMobile ? "none" : "block",
                }}
                onClick={() => {
                  if (nActive > 0) {
                    onClickGauche();
                  }
                }}
              >
                <Canvas
                  orthographic
                  camera={{
                    near: 0.1,
                    far: 10,
                    zoom: 25,
                    position: [0.2, 0, 0],
                  }}
                >
                  <EffectComposer>
                    <Bloom
                      luminanceThreshold={luminanceThreshold}
                      luminanceSmoothing={luminanceSmoothing}
                      // height={300},
                      mipmapBlur={true}
                      intensity={intensity}
                      radius={radius}
                    />
                  </EffectComposer>
                  <Carre
                    flecheGauche={true}
                    flecheDroite={false}
                    position={[0, -2, -2]}
                  />
                  <Fleche
                    flecheGauche={true}
                    flecheDroite={false}
                    position={[0, -1.5, -1.5]}
                    rotation={[0, 0, 0]}
                  />
                </Canvas>
              </div>
              <div
                style={{
                  position: "fixed",
                  bottom: "10vh",
                  right: "10vh",
                  height: "20vh",
                  width: "20vh",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  cursor: "pointer",
                  display: _isMobile ? "none" : "block",
                }}
                onClick={() => {
                  if (nActive < 5) {
                    onClickDroite();
                  }
                }}
              >
                <Canvas
                  orthographic
                  camera={{
                    near: 0.1,
                    far: 10,
                    zoom: 25,
                    position: [0.2, 0, 0],
                  }}
                >
                  <EffectComposer>
                    <Bloom
                      luminanceThreshold={luminanceThreshold}
                      luminanceSmoothing={luminanceSmoothing}
                      // height={300},
                      mipmapBlur={true}
                      intensity={intensity}
                      radius={radius}
                    />
                  </EffectComposer>
                  <Carre
                    flecheDroite={true}
                    flecheGauche={false}
                    position={[0, -2, -2]}
                  />
                  <Fleche
                    flecheDroite={true}
                    flecheGauche={false}
                    position={[0, 1.5, 1.5]}
                    rotation={[Math.PI, 0, 0]}
                  />

                </Canvas>
              </div>
            </>
          </FadeInOut>
        </TransitionLayout>
      </TransitionProvider>
    </>
  );
};

export function Carre({ position, flecheGauche, flecheDroite }) {
  const width = 4;
  const height = 4;
  const ref = useRef();
  const ref2 = useRef();
  const points = [];
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(0, 0, width));
  points.push(new THREE.Vector3(0, height, width));
  points.push(new THREE.Vector3(0, height, 0));
  points.push(new THREE.Vector3(0, 0, 0));

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.geometry.setFromPoints(points);
    }
  });

  const {
    nActive,
    droite,
    gauche,
    gachette,
    onClickGauche,
    onClickDroite,
    updateGachette,
    stopDroite,
    stopGauche,
  } = useDeplacementStore((state) => state);

  return (
    <mesh ref={ref2} position={position}>
      <line ref={ref}>
        <bufferGeometry />
        <lineBasicMaterial color={[127, 0, 127]} toneMapped={false} />
      </line>
    </mesh>
  );
}

function Fleche({ position, flecheGauche, flecheDroite, rotation }) {
  const width = 3;
  const height = 3;
  const ref = useRef();
  const ref2 = useRef();
  const points = [];
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(0, height, 0));
  points.push(new THREE.Vector3(0, height / 2, width));
  points.push(new THREE.Vector3(0, 0, 0));

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.geometry.setFromPoints(points);
    }
  });

  return (
    <mesh ref={ref2} position={position} rotation={rotation}>
      <line ref={ref}>
        <bufferGeometry />
        <lineBasicMaterial color={[127, 0, 127]} toneMapped={false} />
      </line>
    </mesh>
  );
}

export const useDeplacementStore = create((set) => ({
  nActive: 2,
  gachette: false,
  droite: false,
  gauche: false,
  onClickGauche: () =>
    set((state) => ({
      gachette: true,
      droite: true,
    })),
  onClickDroite: () =>
    set((state) => ({
      gachette: true,
      gauche: true,
    })),
  updateGachette: () => set((state) => ({ gachette: false })),
  stopDroite: () => set((state) => ({ gauche: false, droite: false })),
  stopGauche: () => set((state) => ({ droite: false, gauche: false })),
  nActiveUp: () => set((state) => ({ nActive: state.nActive + 1 })),
  nActiveDown: () => set((state) => ({ nActive: state.nActive - 1 })),
}));

export const usePlanetStore = create((set) => ({
  planet: { name: "" },
  updateData: (planet) =>
    set((state) => ({
      planet: planet,
    })),
}));

export default App;
