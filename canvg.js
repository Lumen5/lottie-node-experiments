const fs = require('fs/promises');
const { DOMParser } = require('xmldom');
const canvas = require('canvas');
const fetch = require('node-fetch');
const { Canvg, presets } =  require('canvg');

const preset = presets.node({
    DOMParser,
    canvas,
    fetch,
    ignoreAnimation: false
});

const input = './test.svg';
const output = './o-canvg.png';

(async function() {
    const svg = await fs.readFile(input, 'utf8');
    const canvas = preset.createCanvas(48, 27);
    const ctx = canvas.getContext('2d');
    const v = Canvg.fromString(ctx, svg, preset);
    await v.render();
    const png = canvas.toBuffer();
    await fs.writeFile(output, png);
})();