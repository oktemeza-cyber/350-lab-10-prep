#version 120 // glsl version 1.2 for OpenGL 2.1
uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
const float radius = 10.0;

void main(void) {
    // Fragment shader should output into gl_FragColor an RGBA:
    float u = gl_FragCoord.x / resolution.x;
    float v = gl_FragCoord.y / resolution.y;
    gl_FragColor = vec4(u, v, (abs(time)), sin(time));

    float d = length(gl_FragCoord.xy - mouse);
    if (d < radius){
        gl_FragColor = vec4(1.0, 1.0, 1.0, sin(time));
    }
}

