export const myConst = 15;
export let myLet = 15;
export var myVar = 15;

export let x: object;
export let y: Promise<string>;
export let z: Promise<object>;

export const satisfies = {
    a: 1,
    b: "2",
} satisfies Record<string, string | number>;
