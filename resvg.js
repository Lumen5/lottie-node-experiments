const { promises } = require('fs')
const { join } = require('path')
const { render } = require('@resvg/resvg-js');

async function main() {
    const svg = await promises.readFile(join(__dirname, './test.svg'))
    const svgString = svg.toString('utf-8')
    const pngData = render(svgString)
  
    await promises.writeFile(join(__dirname, './o-resvg.png'), pngData)
  }
  
  main()

