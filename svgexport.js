var svgexport = require('svgexport');

svgexport.render({
    input : './test.svg',
    output: 'o-svgexport.png',
}, (e) => console.log(e));