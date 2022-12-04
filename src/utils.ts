// export const lerp = (v1: number, v2: number, t: number): number =>
//     v1 * (1 - t) + v2 * t;

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
