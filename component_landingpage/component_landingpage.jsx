import Script from "next/script";
import { Shaders, Node, GLSL } from "gl-react";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Canvas, useLoader, useFrame, extend } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const WaveShaderMaterial2 = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
    uOffset: new THREE.Vector2(0.0, 0.0),
  },
  // Vertex Shader
  `
  uniform sampler2D uTexture;
  uniform vec2 uOffset;
  // varying vec2 uv;
  
  #define M_PI 3.1415926535897932384626433832795
  
  vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
     position.x = position.x + (sin(uv.y * M_PI) * offset.x);
     position.y = position.y + (sin(uv.x * M_PI) * offset.y);
     return position;
  }
  
  void main() {
    // vec2 vUv = uv;
     vec3 newPosition = deformationCurve(position, uv, uOffset);
     gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
  }
      `,
  // Fragment Shader
  `
       
        uniform sampler2D uTexture;
        uniform vec2 uOffset;
        // varying vec2 uv;
    

        vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
          float r = texture2D(textureImage,uv + offset).r;
          vec2 gb = texture2D(textureImage,uv).gb;
          return vec3(r,gb);
        }
    
        void main() {
          // vec2 vUv = uv;
          // vec3 color = rgbShift(uTexture,uv,uOffset);
          gl_FragColor = vec4(vec3(1.,1.,1.),1.);
        }
      `
);

extend({ WaveShaderMaterial2 });

function Ahah({ TriggerFunc,CurrentFunc }) {
  const current2 = useRef(0);
  const target = useRef(0);
  const ease = useRef(0.075);
  // const material = useRef();
  const trigger = useRef(false);

  useFrame(({ clock }) => {
    if (trigger.current) {
      function lerp(start, end, t) {
        return start * (1 - t) + end * t;
      }
      current2.current = lerp(current2.current, target.current, ease.current);
    }

    CurrentFunc(current2.current);
  });

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        if (trigger.current == false) {
          trigger.current = true;
          setTimeout((trigger.current = true), 3000);
        }
      });
    }
  }, []);

  return <></>;
}

export function Home({ Component, pageProps }) {
  const image = useLoader(
    THREE.TextureLoader,
    "https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
  );

  // const material = new WaveShaderMaterial2({
  //   color: new THREE.Color("hotpink"),
  // });
  // material.uTime = 1;
  // material.uTexture = image;
  const ref = useRef();

  const material = useRef(0);

  function TriggerFunc(aa) {
    trigger.current = aa;
    console.log("rrrr")
  }

  function CurrentFunc(aa) {
    trigger.current = aa;
    material.current.material.uniforms.uOffset.value=new THREE.Vector2(0.0,aa)
  }

  return (
    <div
      style={{
        background: "black",
        height: "200vh",
        width: "100vw",
        position: "absolute",
      }}
    >
      <span
        style={{
          background: "white",
          height: "10vh",
          width: "10vw",
          position: "fixed",
        }}
      >
        {material.current
          ? material.current.material.uniforms.uOffset.value.y
          : ""}
      </span>
      <div
        style={{
          background: "black",
          height: "50vh",
          width: "100vw",
          position: "fixed",
          top: "10vh",
        }}
      >
        <Canvas
          gl={{ antialias: false }}
          camera={{
            near: 0.1,
            far: 50,
            zoom: 1,
            position: [4, 4, 4],
            maxPolarAngle: 0.85,
          }}
          ref={ref}
        >
          <Ahah CurrentFunc={CurrentFunc} TriggerFunc={TriggerFunc} />
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={45} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <mesh ref={material}>
            <planeGeometry args={[3, 4, 16, 16]} />
            <waveShaderMaterial2
              key={WaveShaderMaterial2.key}
              uColor={"hotpink"}
              uTime={0.0}
              uTexture={image}
              uoffset={0.0}
            />
            {/* <THREE.MeshStandardMaterial color={white} /> */}

            {/* <meshStandardMaterial
            // emissiveIntensity={4}
            color={[255, 255, 0]}
            toneMapped={false}
          /> */}
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

export default Home;
