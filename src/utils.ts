// export const lerp = (v1: number, v2: number, t: number): number =>
//     v1 * (1 - t) + v2 * t;
const { max, min, sin, cos, PI, random, floor } = Math;

export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

export const getMousePos = (e: MouseEvent | any) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.clientX || e.clientY) {
        posx = e.clientX;
        posy = e.clientY;
    }
    return { x: posx, y: posy };
};

export const mapInterval = (
    in1Start: number,
    in1End: number,
    in2Start: number,
    in2End: number,
    value: number
) =>
    ((value - in1Start) * (in2End - in2Start)) / (in1End - in1Start) + in2Start;

export const clamp = (low: number, high: number, v: number): number =>
    max(low, min(v, high));

export const mod = (a: number, b: number) => {
    return ((a % b) + b) % b;
};
