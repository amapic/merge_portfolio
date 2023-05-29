#define MAX_OCTAVES 8

float speed = .5;
float scale = 10.;
float offset= .0;
float multiplier = 1.;
float octaves = 1.;
float lacunarity = 2.;
float persistence = .5;

uniform float uTime;

float octaveNoise (vec3 p) {
  float total = 0.;
  float frequency = 1.;
  float amplitude = 1.;
  float value = 0.;
  for (int i = 0; i < MAX_OCTAVES; ++i) {
    if (float(i) >= octaves) break;
    value += noise3(p * frequency) * amplitude;
    total += amplitude;
    amplitude *= persistence;
    frequency *= lacunarity;
  }
  return value / total;
}

void main ( )
{
    float iTime=uTime;
  vec2 p = gl_FragCoord.xy / iResolution.xx;
  float w = offset + multiplier * octaveNoise(vec3 (scale*p, speed*iTime));
  vec3 color = vec3 ( w );
  gl_FragColor = vec4( color, 1.0 );
}
