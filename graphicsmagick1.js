var fs = require('fs');
var gm = require('gm').subClass({imageMagick: false});

gm('./test.svg').write('./o-graphicsmagick1.png', function(err) {
    if (!err) console.log('done');
});
