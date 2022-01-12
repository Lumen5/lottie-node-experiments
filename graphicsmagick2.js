var fs = require('fs');
var gm = require('gm').subClass({imageMagick: true});

gm('./test.svg').write('./o-graphicsmagick2.png', function(err) {
    if (!err) console.log('done');
});
