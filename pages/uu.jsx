import { PlaneGeometry } from "three";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Shaders, Node, GLSL } from "gl-react";
import * as THREE from "three";
// import { shaderMaterial } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef,useMemo } from "react";
import {
  Canvas,
  useLoader,
  useFrame,
  extend,
  useThree,
} from "@react-three/fiber";
import {
  Stats,
  OrbitControls,
  Effects as EffectsComposer,
  Text,
  Text3D,
} from "@react-three/drei";
import { lerp } from "three/src/math/MathUtils";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useControls } from "leva";
import MyShaderPass from "component_landingpage/shaderpass";

import PostFX from "component_landingpage/PostFX";

function Effect(progress) {
  const { gl, scene, camera, size } = useThree();
  const renderer = new PostFX(gl);
  // let progress=1;
  return useFrame((_, delta) => {
    // deltaSomme += delta;
    renderer.render(scene, camera, delta,progress);
  }, 1);
}

extend(MyShaderPass);

function Home() {
  const intensity = 0.1;
  const radius = 0.9;
  const luminanceThreshold = 1;
  const luminanceSmoothing = 1;

  const options = useMemo(() => {
    return {
      progress: { value: 0, min: 0, max: 1, step: 0.01 },
    }
  }, [])

  const pA = useControls('Progress', options)
  // const pB = useControls('Polyhedron B', options)

  return (
    <div
      style={{
        background: "black",
        height: "100vh",
        width: "100vw",
        position: "fixed",
      }}
    >
      <Canvas
        gl={{ antialias: false }}
        camera={{
          near: 0.1,
          far: 20000,
          zoom: 1,
          position: [0, 0, 1000],
          maxPolarAngle: 0.85,
        }}
      >
        <Effect progress={pA.progress} />
        {/* <EffectComposer>
        <MyShaderPass />
        </EffectComposer> */}
        <axesHelper />
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={45} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Cuube />
        <OrbitControls
          // maxPolarAngle={0.85}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
}

export function Cuube() {
  const ref = useRef();
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  // useFrame(({ clock }) => {
  //   mouseTarget.current.x = lerp(mouse.current.x, 0, 0.5);
  //   mouseTarget.current.y = lerp(mouse.current.y, 0, 0.5);
  //   ref.current.rotation.x += -mouseTarget.current.x * 0.001;
  //   ref.current.rotation.y += -mouseTarget.current.y * 0.001;
  // });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      mouse.current.x = event.movementY - 0.5;
      mouse.current.y = event.movementX - 0.5;
    });
  });

  const image = useLoader(THREE.TextureLoader, "spa.jpg");

  const mask = useLoader(THREE.TextureLoader, "mask5.jpg");

  return (
    <group ref={ref}>
      <Text
        scale={[3, 3, 3]}
        anchorX="center" // default
        anchorY="middle" // default
        color="red"
        toneMapped={false}
        position={[0, 0, 4]}
        font="https://fonts.cdnfonts.com/css/monaco"
      >
        AAAAAAAAAAA
      </Text>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[20, 30, 1, 1]} />
        <meshStandardMaterial map={image} transparent />
      </mesh>

      <mesh position={[0, 0, 2]}>
        <planeGeometry args={[20, 30, 1, 1]} />
        <meshStandardMaterial alphaMap={mask} map={image} transparent />
      </mesh>

      <mesh position={[0, 0, 4]}>
        <planeGeometry args={[20, 30, 1, 1]} />
        <meshStandardMaterial alphaMap={mask} map={image} transparent />
      </mesh>

      <mesh position={[0, 0, 6]}>
        <planeGeometry args={[20, 30, 1, 1]} />
        <meshStandardMaterial alphaMap={mask} map={image} transparent />
      </mesh>

      <mesh position={[0, 0, 8]}>
        <planeGeometry args={[20, 30, 1, 1]} />
        <meshStandardMaterial alphaMap={mask} map={image} transparent />
      </mesh>

      <mesh position={[0, 0, 10]}>
        <planeGeometry args={[20, 30, 1, 1]} />
        <meshStandardMaterial alphaMap={mask} map={image} transparent />
      </mesh>
    </group>
    //   </Float>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
