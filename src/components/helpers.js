export const getRandomInt = (max) => Math.random() * (max - 1) + 1;

export const calc = (x, y, num = 2) => [x - window.innerWidth / num, y - window.innerHeight / num]
export const trans = (x, y) => `translate3d(${x / 10}px, ${y / 5}px, 0)`