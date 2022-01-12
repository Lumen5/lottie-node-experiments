const { promises: fs } = require('fs');
const render = require('svg-render');

(async () => {
  const outputBuffer = await render({
    buffer: await fs.readFile('./test.svg'),
  });

  await fs.writeFile('./o-svgrender.png', outputBuffer);
})();