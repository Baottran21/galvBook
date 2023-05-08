const canvas = document.querySelector('canvas');
const pA = canvas.getContext('2d');

let locX = 250;
let locY = 250;
let baseX = Math.floor(Math.random()*475);
let baseY = Math.floor(Math.random()*475);
pA.fillStyle = 'blue';
pA.fillRect(locX, locY, 20, 20);
pA.strokeRect(baseX, baseY, 50, 50)

