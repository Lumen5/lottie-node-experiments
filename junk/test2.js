const fs = require('fs')
const path = require('path')

require('jsdom-global')(undefined, {
  runScripts: "dangerously",
  resources: "usable", 
});
const { createCanvas, loadImage, CanvasRenderingContext2D, rsvgVersion } = require('canvas')
console.log(rsvgVersion);

window.CanvasRenderingContext2D = CanvasRenderingContext2D;
global.CanvasRenderingContext2D = CanvasRenderingContext2D;

// require('canvas-5-polyfill')
// require('path2d-polyfill');

const ratio = 1;
const width = 48 * ratio;
const height = 27 * ratio;
// const width = 48;
// const height = 48;
const canvas = createCanvas(width, height)
const ctx = canvas.getContext('2d')

// ctx.fillStyle = 'rgb(255,255,255)';
// ctx.fillRect(0, 0, width, height);

// ctx.fillStyle = 'rgb(41,72,226)';
// ctx.fillRect(0, 0, width, height);

// let p = new Path2D('M10 10 h 10 v 10 h -10 Z');
// ctx.fill(p);

// const p = new Path2D('m 30 8 l 0 12 a 1 1 0 0 0 8 0 l 0 -12 a 1 1 0 0 0 -8 0 z');
// const p = new Path2D();
// p.rect(10, 5, 10, 10);
// ctx.clip(p);

// ctx.fillStyle = 'rgb(174,73,119)';
// ctx.fillRect(0, 0, width, height);

// const d = canvas.toDataURL();
// console.log(d);

loadImage(path.join(__dirname, 'test.svg'))
  .then(image => {
    ctx.drawImage(image, 0, 0);
    canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'image-src-svg.png')))
  })
  .catch(e => console.error(e))
// canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'image-src-svg.png')));