#version 120 // glsl version 1.2 for OpenGL 2.1
uniform sampler2D texture;
uniform vec2 resolution;

void main() {
    vec4 sum = vec4(0.0);
    for(int x = -2; x <= 2; x++){
        for(int y = -2; y <= 2; y++){
            vec2 offset = vec2(float(x), float(y)) / resolution;
            sum += texture2D(texture, gl_TexCoord[0].xy + offset);
        }
    }
    gl_FragColor = sum / 25.0;
}
