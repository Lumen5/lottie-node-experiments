const sharp = require('sharp');

sharp('./test.svg')
    .png()
    .toFile('o-sharp.png')
    .then(function(info) {
        console.log(info)
    })
    .catch(function(err) {
        console.log(err)
    })