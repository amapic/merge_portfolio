//@flow
import React, { Component, useEffect } from "react";
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";

import dynamic from "next/dynamic";

const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`
  precision highp float;
  varying vec2 uv;
  uniform float blue;
  void main() {
    gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
  }`,
  },
});
class HelloBlue extends React.Component {
  render() {
    const { blue } = this.props;
    return <Node shader={shaders.helloBlue} uniforms={{ blue }} />;
  }
}

function Example() {
  useEffect(() => {
    if (window) {
      console.log("no ssr");
    } else {
      console.log("ssr");
    }
  },[]);

  return (
    <Surface width={300} height={300}>
      <HelloBlue blue={0.5} />
    </Surface>
  );
}

export default dynamic(() => Promise.resolve(Example), {
  ssr: false,
});
