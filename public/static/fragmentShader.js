const fragmentShader = `

// uniform sampler2D uTexture;
// uniform float uAlpha;
// uniform vec2 uOffset;
// varying vec2 vUv;

// void main(){
//     gl_FragColor = vec4(255.,255.,255.,255.);
// }

#define MARKER_RADIUS 12.5
#define THICCNESS 10.0

#define Thickness 0.001

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec2 uOffset;
uniform float uTime;
uniform float ratio;
uniform vec2 resolution;
uniform float hover;

varying vec2 vUv;

#define pi 3.14159265

vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
  float r = texture2D(textureImage, uv + offset).r;
  vec2 gb = texture2D(textureImage, uv).gb;
  return vec3(r, gb);
}

float drawPoint(vec2 p, vec2 uv) {
  return distance(p, uv) < 0.01 ? 1. : 0.;
}

float drawCircle(vec2 p, float d, vec2 uv) {
  return (distance(p, uv) <= d && distance(p, uv) >= d - 0.01) ? 1. : 0.;
}

float circle(in vec2 _st, in float _radius) {
  vec2 dist = _st - vec2(0.5);
  return 1. - smoothstep(_radius - (_radius * 0.01), _radius + (_radius * 0.01), dot(dist, dist) * 4.0);
}

float drawLine3(vec2 p1, vec2 p2, vec2 uv, float a) {
  float r = 0.;
  float one_px = 1. / resolution.x; //not really one px

    // get dist between points
  float d = distance(p1, p2);

    // get dist between current pixel and p1
  float duv = distance(p1, uv);

    //if point is on line, according to dist, it should match current uv 
  r = 0.1 - floor(.1 - (a * one_px) + distance(mix(p1, p2, clamp(duv / d, 0., 1.)), uv));

  return r;
}

// float drawLine2 (vec2 p1, vec2 p2, vec2 uv, float a)
// {
//     float r = 0.;
//     float one_px = 1. / resolution.x; //not really one px

//     // get dist between points
//     float d = distance(p1, p2);

//     // get dist between current pixel and p1
//     float duv = distance(p1, uv);

//     //if point is on line, according to dist, it should match current uv 
//     r = 0.1-floor(.1-(a*one_px)+distance (mix(p1, p2, clamp(duv/d, 0., 1.)),  uv));

//     return r;
// }

float drawLine(vec2 p1, vec2 p2) {
  vec2 uv = vec2(vUv.x, vUv.y);

  float a = abs(distance(p1, uv));
  float b = abs(distance(p2, uv));
  float c = abs(distance(p1, p2));

  if(a >= c || b >= c)
    return 0.0;

  float p = (a + b + c) * 0.5;

  // median to (p1, p2) vector
  float h = 2. / c * sqrt(p * (p - a) * (p - b) * (p - c));

  return mix(1.0, 0.0, smoothstep(0.5 * Thickness, 1.5 * Thickness, h));
}

// void main()

// {

//   // out vec4 fragColor, in vec2 fragCoord
//     gl_FragColor = vec4(0.0);

//     vec2 p1 = vec2(0.3, 0.2);
//     vec2 p2 = vec2(0.1, 0.1);

//     if (length(gl_FragCoord.xy - p1) < MARKER_RADIUS) {
//         gl_FragColor += vec4(1.0, 0.0, 0.0, 1.0);
//     }

//     if (length(gl_FragCoord.xy - p2) < MARKER_RADIUS) {
//         gl_FragColor += vec4(1.0, 0.0, 0.0, 1.0);
//     }

//     vec2 p3 = gl_FragCoord.xy;
//     vec2 p12 = p2 - p1;
//     vec2 p13 = p3 - p1;

//     float d = dot(p12, p13) / length(p12); // = length(p13) * cos(angle)
//     vec2 p4 = p1 + normalize(p12) * d;
//     if (length(p4 - p3) < THICCNESS/* * sin01(iTime * 4.0 + length(p4 - p1)* 0.02)*/
//           && length(p4 - p1) <= length(p12)
//           && length(p4 - p2) <= length(p12)) {
//         gl_FragColor += vec4(0.0, 1.0, 0.0, 1.0);
//     }
// }

void main() {

  // vec2 st = gl_FragCoord.xy;

  // vec2 st = gl_FragCoord.xy * ratio;

  float time= uTime * 25.;

  if (hover == 1.){
    time = time * 2.;
  }

  vec2 uv = vec2(vUv.x * ratio, vUv.y);

  vec2 center = vec2(resolution.x / 2., resolution.y / 2.);

  center = vec2(0.5, .5);

  vec2 PointSurCercle = vec2(center.x * (1. / ratio) + 0.2 * cos(time), center.y + 0.2 * sin(time));

  vec2 p6 = vec2(0.5 + sin(time), .5 + cos(time));

  vec2 p7 = vec2(0.5 + sin(pi + time), .5 + cos(pi + time));

  // float lines = drawLine(center, p6) + drawLine(center, p7);

  float lines = drawPoint(center, uv);

  float circles = drawCircle(vec2(0.5 * (ratio),.5), 0.1, uv);

  float aa = drawPoint(center, uv) + drawPoint(p6, uv);

  float bb = drawPoint(p6, uv);

  float rayonExterne = 2.;

  // vec2 p7 = vec2(0.5 + sin(pi + uTime* 100.), .5  + cos(pi +  time));

  for(int i = 0; i < 25; ++i) {
    float i_float = float(i);

    lines += drawLine(vec2(0.5 + 0.1 * (1. / ratio) * sin(2. * pi * (i_float / 25.) + time), 0.5 + .1 * cos(2. * pi * (i_float / 25.) + time)), vec2(0.5 +  (1./ratio) *   rayonExterne *  sin(2. * pi * (i_float / 25.) + time), .5 +  rayonExterne * cos(2. * pi * (i_float / 25.) + time)));

  }

  // vec3 color = rgbShift(uTexture, vUv, uOffset);

  // vec3 color = vec3(circle(st,0.1));

  // gl_FragColor = vec4(texture2D(uTexture, uv ).r - (lines + circles), texture2D(uTexture, uv ).g - (lines + circles), texture2D(uTexture, uv ).b, 1.);

  gl_FragColor = vec4( 1.,1.,0., 1.0 );
}
`;

export default fragmentShader;