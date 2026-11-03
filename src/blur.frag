#version 120 // glsl version 1.2 for OpenGL 2.1
uniform sampler2D texture;

void main() {
    // Fragment shader should output into gl_FragColor an RGBA:
    gl_FragColor = texture2D(texture, gl_TexCoord[0].xy);
}
