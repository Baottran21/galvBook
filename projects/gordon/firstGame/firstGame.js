const canvas = document.querySelector('canvas');
const pA = canvas.getContext('2d');

let locX = 250;
let locY = 250;
pA.fillStyle = 'blue';
pA.fillRect(locX, locY, 20, 20);
pA.strokeRect(50, 50, 50, 50)

