/// <reference types="react-scripts" />
declare module 'babel-plugin-glsl/macro';
declare namespace JSX {
    interface IntrinsicElements {
        waveShaderMaterial: any;
    }
}
declare module '*.glb' {
    const src: string;
    export default src;
}
declare module '*.gltf' {
    const src: string;
    export default src;
}
