#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float uTime;
uniform sampler2D uTexture;
uniform float ratio;
uniform vec2 resolution;

varying vec2 vUv;

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Value noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(random(i + vec2(0.0, 0.0)), random(i + vec2(1.0, 0.0)), u.x), mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x), u.y);
}

mat2 rotate2d(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

float lines(in vec2 pos, float b) {
    float scale = 10.0;
    pos *= scale;
    return smoothstep(0.0, .5 + b * .5, abs((sin(pos.x * 3.1415) + b * 2.0)) * (.7 + .5 * cos(uTime  )));
}

vec2 sineWave( vec2 p ){
    float pi = 3.14159;
    float A = 0.15;
    float w = 10.0 * pi;
    float t = 30.0*pi/180.0;
    float y = sin( w*p.x + t) * A; 
    return vec2(p.x, p.y+y);
}

void main() {
    // vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 st = vec2(vUv.x  ,vUv.y  );
    st.y *= resolution.y / resolution.x;

    vec2 pos = st.yx * vec2(10.1, 3.);

    float pattern = pos.x;

    // st = sineWave(vUv);

    // Add noise
    pos = rotate2d(noise(pos ) + 10. * cos(uTime )) * pos * cos(uTime );

    // Draw lines
    pattern = 1. *  lines(pos, .5);

    // gl_FragColor = vec4(texture2D(uTexture, st ).r + pattern, texture2D(uTexture, st ).g + pattern,  texture2D(uTexture, st ).b + pattern, 1.0);

        gl_FragColor = vec4(vec3(pattern), 1.0);

}