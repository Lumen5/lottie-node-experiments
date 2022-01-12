const fs = require("fs");
// require('jsdom-global')(undefined, {
//     runScripts: "dangerously",
//     resources: "usable", 
// });
const xmlserializer = require('xmlserializer');
const {CanvasRenderingContext2D, createCanvas, Image, loadImage} = require('canvas');

class Path2D {
    constructor(d) {
        console.log('path2d called');
    }
}

const _clip = CanvasRenderingContext2D.prototype.clip
Object.defineProperty(CanvasRenderingContext2D.prototype, 'clip', {
  value(p) {
    console.log('clip called', p);
    // if(p instanceof Path2D) {
    //   return p.draw(this, 'fill')
    // }
    return _clip.call(this)
  },
})

// const {parseSVG, makeAbsolute} = require('svg-path-parser');

// const MAX_SIZE = 2048

// function createPathSVG(d, lineWidth, lineCap, lineJoin, strokeColor, fillColor) {
//   const tpl = `
//     <svg width="${MAX_SIZE}" height="${MAX_SIZE}" xmlns="http://www.w3.org/2000/svg">
//       <path d="${d}" 
//         stroke="${strokeColor || 'black'}" 
//         fill="${fillColor || 'transparent'}"
//         stroke-width="${lineWidth || 1}"
//         stroke-linecap="${lineCap || 'butt'}"
//         stroke-linejoin="${lineJoin || 'miter'}"
//       ></path>
//     </svg>
//   `

//   const img = new Image()
//   img.src = Buffer.from(tpl, 'utf8')

//   return img
// }

// class Path2D {
//   constructor(d) {
//     this.footprint = []
//     this.commands = []
//     if(d instanceof Path2D) {
//       this.addPath(d)
//     } else if(typeof d === 'string') {
//       // svg path
//       const commands = makeAbsolute(parseSVG(d))
//       if(commands[0] && commands[0].code === 'M') {
//         this.footprint.push([commands[0].x, commands[0].y])
//       }
//       this.commands.push(['path', d])
//     }
//   }
//   addPath(path) {
//     this.footprint.push(...path.footprint)
//     this.commands.push(...path.commands)
//   }
//   closePath() {
//     const point = this.footprint[0]
//     if(point) {
//       this.moveTo(...point)
//     }
//   }
//   moveTo(x, y) {
//     this.footprint.push([x, y])
//     this.commands.push(['moveTo', x, y])
//   }
//   lineTo(x, y) {
//     this.footprint.push([x, y])
//     this.commands.push(['lineTo', x, y])
//   }
//   bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
//     this.footprint.push([x, y])
//     this.commands.push(['bezierCurveTo', cp1x, cp1y, cp2x, cp2y, x, y])
//   }
//   quadraticCurveTo(cpx, cpy, x, y) {
//     this.footprint.push([x, y])
//     this.commands.push('quadraticCurveTo', cpx, cpy, x, y)
//   }
//   arc(x, y, ...rest) {
//     this.footprint.push([x, y])
//     this.commands.push('arc', x, y, ...rest)
//   }
//   arcTo(x1, y1, x2, y2, radius) {
//     this.commands.push('artTo', x1, y1, x2, y2, radius)
//   }
//   ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
//     this.footprint.push([x, y])
//     this.commands.push('ellipse', x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
//   }
//   rect(x, y, width, height) {
//     this.footprint.push([x, y])
//     this.commands.push('rect', x, y, width, height)
//   }
//   draw(context, type = 'stroke') {
//     const {lineWidth, lineCap, lineJoin, strokeStyle, fillStyle} = context
//     context.save()
//     context.beginPath()
//     this.commands.forEach((command) => {
//       const [cmd, ...args] = command
//       if(cmd === 'path') {
//         const svg = createPathSVG(...args, lineWidth, lineCap, lineJoin, strokeStyle, type === 'stroke' ? null : fillStyle)
//         context.drawImage(svg, 0, 0)
//       } else {
//         context[cmd](...args)
//         context[type]()
//       }
//     })
//     context.restore()
//   }
// }

// const _stroke = CanvasRenderingContext2D.prototype.stroke
// Object.defineProperty(CanvasRenderingContext2D.prototype, 'stroke', {
//   value(p) {
//     if(p instanceof Path2D) {
//       return p.draw(this, 'stroke')
//     }
//     return _stroke.call(this)
//   },
// })

// const _fill = CanvasRenderingContext2D.prototype.fill
// Object.defineProperty(CanvasRenderingContext2D.prototype, 'fill', {
//   value(p) {
//     if(p instanceof Path2D) {
//       return p.draw(this, 'fill')
//     }
//     return _fill.call(this)
//   },
// })

const serializedSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="48" height="27" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_2"><rect width="1920" height="1080" x="0" y="0"/></clipPath><filter id="__lottie_element_6" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"/></feComponentTransfer></filter><mask id="__lottie_element_5" mask-type="alpha"><g filter="url(#__lottie_element_6)"><rect width="1920" height="1080" x="0" y="0" fill="#ffffff" opacity="0"/><g transform="matrix(0.015529580414295197,0.9998794198036194,-0.9998794198036194,0.015529580414295197,1484.68212890625,414.59979248046875)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,0)" fill-opacity="1" d=" M271.4110107421875,4.491000175476074 C271.4110107421875,4.491000175476074 -12.949999809265137,271.1390075683594 -12.949999809265137,271.1390075683594 C-89.06300354003906,342.510986328125 -208.6230010986328,338.6669921875 -279.9949951171875,262.5539855957031 C-279.9949951171875,262.5539855957031 -279.9960021972656,262.5539855957031 -279.9960021972656,262.5539855957031 C-351.3680114746094,186.4409942626953 -347.52398681640625,66.88099670410156 -271.4110107421875,-4.491000175476074 C-271.4110107421875,-4.491000175476074 12.949999809265137,-271.1390075683594 12.949999809265137,-271.1390075683594 C89.06300354003906,-342.510986328125 208.6230010986328,-338.6669921875 279.9949951171875,-262.5539855957031 C279.9949951171875,-262.5539855957031 279.9960021972656,-262.5539855957031 279.9960021972656,-262.5539855957031 C351.3680114746094,-186.4409942626953 347.52398681640625,-66.88099670410156 271.4110107421875,4.491000175476074z"/></g></g></g></mask><filter id="__lottie_element_13" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"/></feComponentTransfer></filter><mask id="__lottie_element_12" mask-type="alpha"><g filter="url(#__lottie_element_13)"><rect width="1920" height="1080" x="0" y="0" fill="#ffffff" opacity="0"/><g transform="matrix(0.015529580414295197,0.9998794198036194,-0.9998794198036194,0.015529580414295197,1484.68212890625,414.59979248046875)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,0)" fill-opacity="1" d=" M271.4110107421875,4.491000175476074 C271.4110107421875,4.491000175476074 -12.949999809265137,271.1390075683594 -12.949999809265137,271.1390075683594 C-89.06300354003906,342.510986328125 -208.6230010986328,338.6669921875 -279.9949951171875,262.5539855957031 C-279.9949951171875,262.5539855957031 -279.9960021972656,262.5539855957031 -279.9960021972656,262.5539855957031 C-351.3680114746094,186.4409942626953 -347.52398681640625,66.88099670410156 -271.4110107421875,-4.491000175476074 C-271.4110107421875,-4.491000175476074 12.949999809265137,-271.1390075683594 12.949999809265137,-271.1390075683594 C89.06300354003906,-342.510986328125 208.6230010986328,-338.6669921875 279.9949951171875,-262.5539855957031 C279.9949951171875,-262.5539855957031 279.9960021972656,-262.5539855957031 279.9960021972656,-262.5539855957031 C351.3680114746094,-186.4409942626953 347.52398681640625,-66.88099670410156 271.4110107421875,4.491000175476074z"/></g></g></g></mask></defs><g clip-path="url(#__lottie_element_2)"><g mask="url(#__lottie_element_12)" style="display: block;"><g transform="matrix(1,0,0,1,960,532)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(41,72,226)" fill-opacity="1" d=" M960,548 C960,548 -960,548 -960,548 C-960,548 -960,-548 -960,-548 C-960,-548 960,-548 960,-548 C960,-548 960,548 960,548z"/></g></g></g><g mask="url(#__lottie_element_5)" style="display: block;"><g transform="matrix(0.9995700120925903,0.029322374612092972,-0.029322374612092972,0.9995700120925903,1473.4227294921875,684.684326171875)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(174,73,119)" fill-opacity="1" d=" M271.4110107421875,4.491000175476074 C271.4110107421875,4.491000175476074 -12.949999809265137,271.1390075683594 -12.949999809265137,271.1390075683594 C-89.06300354003906,342.510986328125 -208.6230010986328,338.6669921875 -279.9949951171875,262.5539855957031 C-279.9949951171875,262.5539855957031 -279.9960021972656,262.5539855957031 -279.9960021972656,262.5539855957031 C-351.3680114746094,186.4409942626953 -347.52398681640625,66.88099670410156 -271.4110107421875,-4.491000175476074 C-271.4110107421875,-4.491000175476074 12.949999809265137,-271.1390075683594 12.949999809265137,-271.1390075683594 C89.06300354003906,-342.510986328125 208.6230010986328,-338.6669921875 279.9949951171875,-262.5539855957031 C279.9949951171875,-262.5539855957031 279.9960021972656,-262.5539855957031 279.9960021972656,-262.5539855957031 C351.3680114746094,-186.4409942626953 347.52398681640625,-66.88099670410156 271.4110107421875,4.491000175476074z"/></g></g></g></g></svg>';
const svg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIwIDEwODAiIHdpZHRoPSI0OCIgaGVpZ2h0PSIyNyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgc3R5bGU9IndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7IGNvbnRlbnQtdmlzaWJpbGl0eTogdmlzaWJsZTsiPjxkZWZzPjxjbGlwUGF0aCBpZD0iX19sb3R0aWVfZWxlbWVudF8yIj48cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4PSIwIiB5PSIwIi8+PC9jbGlwUGF0aD48ZmlsdGVyIGlkPSJfX2xvdHRpZV9lbGVtZW50XzYiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZmVDb21wb25lbnRUcmFuc2ZlciBpbj0iU291cmNlR3JhcGhpYyI+PGZlRnVuY0EgdHlwZT0idGFibGUiIHRhYmxlVmFsdWVzPSIxLjAgMC4wIi8+PC9mZUNvbXBvbmVudFRyYW5zZmVyPjwvZmlsdGVyPjxtYXNrIGlkPSJfX2xvdHRpZV9lbGVtZW50XzUiIG1hc2stdHlwZT0iYWxwaGEiPjxnIGZpbHRlcj0idXJsKCNfX2xvdHRpZV9lbGVtZW50XzYpIj48cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4PSIwIiB5PSIwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwIi8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMTU1Mjk1ODA0MTQyOTUxOTcsMC45OTk4Nzk0MTk4MDM2MTk0LC0wLjk5OTg3OTQxOTgwMzYxOTQsMC4wMTU1Mjk1ODA0MTQyOTUxOTcsMTQ4NC42ODIxMjg5MDYyNSw0MTQuNTk5NzkyNDgwNDY4NzUpIiBvcGFjaXR5PSIxIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7Ij48ZyBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiPjxwYXRoIGZpbGw9InJnYigyNTUsMjU1LDApIiBmaWxsLW9wYWNpdHk9IjEiIGQ9IiBNMjcxLjQxMTAxMDc0MjE4NzUsNC40OTEwMDAxNzU0NzYwNzQgQzI3MS40MTEwMTA3NDIxODc1LDQuNDkxMDAwMTc1NDc2MDc0IC0xMi45NDk5OTk4MDkyNjUxMzcsMjcxLjEzOTAwNzU2ODM1OTQgLTEyLjk0OTk5OTgwOTI2NTEzNywyNzEuMTM5MDA3NTY4MzU5NCBDLTg5LjA2MzAwMzU0MDAzOTA2LDM0Mi41MTA5ODYzMjgxMjUgLTIwOC42MjMwMDEwOTg2MzI4LDMzOC42NjY5OTIxODc1IC0yNzkuOTk0OTk1MTE3MTg3NSwyNjIuNTUzOTg1NTk1NzAzMSBDLTI3OS45OTQ5OTUxMTcxODc1LDI2Mi41NTM5ODU1OTU3MDMxIC0yNzkuOTk2MDAyMTk3MjY1NiwyNjIuNTUzOTg1NTk1NzAzMSAtMjc5Ljk5NjAwMjE5NzI2NTYsMjYyLjU1Mzk4NTU5NTcwMzEgQy0zNTEuMzY4MDExNDc0NjA5NCwxODYuNDQwOTk0MjYyNjk1MyAtMzQ3LjUyMzk4NjgxNjQwNjI1LDY2Ljg4MDk5NjcwNDEwMTU2IC0yNzEuNDExMDEwNzQyMTg3NSwtNC40OTEwMDAxNzU0NzYwNzQgQy0yNzEuNDExMDEwNzQyMTg3NSwtNC40OTEwMDAxNzU0NzYwNzQgMTIuOTQ5OTk5ODA5MjY1MTM3LC0yNzEuMTM5MDA3NTY4MzU5NCAxMi45NDk5OTk4MDkyNjUxMzcsLTI3MS4xMzkwMDc1NjgzNTk0IEM4OS4wNjMwMDM1NDAwMzkwNiwtMzQyLjUxMDk4NjMyODEyNSAyMDguNjIzMDAxMDk4NjMyOCwtMzM4LjY2Njk5MjE4NzUgMjc5Ljk5NDk5NTExNzE4NzUsLTI2Mi41NTM5ODU1OTU3MDMxIEMyNzkuOTk0OTk1MTE3MTg3NSwtMjYyLjU1Mzk4NTU5NTcwMzEgMjc5Ljk5NjAwMjE5NzI2NTYsLTI2Mi41NTM5ODU1OTU3MDMxIDI3OS45OTYwMDIxOTcyNjU2LC0yNjIuNTUzOTg1NTk1NzAzMSBDMzUxLjM2ODAxMTQ3NDYwOTQsLTE4Ni40NDA5OTQyNjI2OTUzIDM0Ny41MjM5ODY4MTY0MDYyNSwtNjYuODgwOTk2NzA0MTAxNTYgMjcxLjQxMTAxMDc0MjE4NzUsNC40OTEwMDAxNzU0NzYwNzR6Ii8+PC9nPjwvZz48L2c+PC9tYXNrPjxmaWx0ZXIgaWQ9Il9fbG90dGllX2VsZW1lbnRfMTMiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZmVDb21wb25lbnRUcmFuc2ZlciBpbj0iU291cmNlR3JhcGhpYyI+PGZlRnVuY0EgdHlwZT0idGFibGUiIHRhYmxlVmFsdWVzPSIxLjAgMC4wIi8+PC9mZUNvbXBvbmVudFRyYW5zZmVyPjwvZmlsdGVyPjxtYXNrIGlkPSJfX2xvdHRpZV9lbGVtZW50XzEyIiBtYXNrLXR5cGU9ImFscGhhIj48ZyBmaWx0ZXI9InVybCgjX19sb3R0aWVfZWxlbWVudF8xMykiPjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIHg9IjAiIHk9IjAiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAiLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAxNTUyOTU4MDQxNDI5NTE5NywwLjk5OTg3OTQxOTgwMzYxOTQsLTAuOTk5ODc5NDE5ODAzNjE5NCwwLjAxNTUyOTU4MDQxNDI5NTE5NywxNDg0LjY4MjEyODkwNjI1LDQxNC41OTk3OTI0ODA0Njg3NSkiIG9wYWNpdHk9IjEiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsiPjxnIG9wYWNpdHk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwwKSI+PHBhdGggZmlsbD0icmdiKDI1NSwyNTUsMCkiIGZpbGwtb3BhY2l0eT0iMSIgZD0iIE0yNzEuNDExMDEwNzQyMTg3NSw0LjQ5MTAwMDE3NTQ3NjA3NCBDMjcxLjQxMTAxMDc0MjE4NzUsNC40OTEwMDAxNzU0NzYwNzQgLTEyLjk0OTk5OTgwOTI2NTEzNywyNzEuMTM5MDA3NTY4MzU5NCAtMTIuOTQ5OTk5ODA5MjY1MTM3LDI3MS4xMzkwMDc1NjgzNTk0IEMtODkuMDYzMDAzNTQwMDM5MDYsMzQyLjUxMDk4NjMyODEyNSAtMjA4LjYyMzAwMTA5ODYzMjgsMzM4LjY2Njk5MjE4NzUgLTI3OS45OTQ5OTUxMTcxODc1LDI2Mi41NTM5ODU1OTU3MDMxIEMtMjc5Ljk5NDk5NTExNzE4NzUsMjYyLjU1Mzk4NTU5NTcwMzEgLTI3OS45OTYwMDIxOTcyNjU2LDI2Mi41NTM5ODU1OTU3MDMxIC0yNzkuOTk2MDAyMTk3MjY1NiwyNjIuNTUzOTg1NTk1NzAzMSBDLTM1MS4zNjgwMTE0NzQ2MDk0LDE4Ni40NDA5OTQyNjI2OTUzIC0zNDcuNTIzOTg2ODE2NDA2MjUsNjYuODgwOTk2NzA0MTAxNTYgLTI3MS40MTEwMTA3NDIxODc1LC00LjQ5MTAwMDE3NTQ3NjA3NCBDLTI3MS40MTEwMTA3NDIxODc1LC00LjQ5MTAwMDE3NTQ3NjA3NCAxMi45NDk5OTk4MDkyNjUxMzcsLTI3MS4xMzkwMDc1NjgzNTk0IDEyLjk0OTk5OTgwOTI2NTEzNywtMjcxLjEzOTAwNzU2ODM1OTQgQzg5LjA2MzAwMzU0MDAzOTA2LC0zNDIuNTEwOTg2MzI4MTI1IDIwOC42MjMwMDEwOTg2MzI4LC0zMzguNjY2OTkyMTg3NSAyNzkuOTk0OTk1MTE3MTg3NSwtMjYyLjU1Mzk4NTU5NTcwMzEgQzI3OS45OTQ5OTUxMTcxODc1LC0yNjIuNTUzOTg1NTk1NzAzMSAyNzkuOTk2MDAyMTk3MjY1NiwtMjYyLjU1Mzk4NTU5NTcwMzEgMjc5Ljk5NjAwMjE5NzI2NTYsLTI2Mi41NTM5ODU1OTU3MDMxIEMzNTEuMzY4MDExNDc0NjA5NCwtMTg2LjQ0MDk5NDI2MjY5NTMgMzQ3LjUyMzk4NjgxNjQwNjI1LC02Ni44ODA5OTY3MDQxMDE1NiAyNzEuNDExMDEwNzQyMTg3NSw0LjQ5MTAwMDE3NTQ3NjA3NHoiLz48L2c+PC9nPjwvZz48L21hc2s+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCNfX2xvdHRpZV9lbGVtZW50XzIpIj48ZyBtYXNrPSJ1cmwoI19fbG90dGllX2VsZW1lbnRfMTIpIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7Ij48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDk2MCw1MzIpIiBvcGFjaXR5PSIxIj48ZyBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiPjxwYXRoIGZpbGw9InJnYig0MSw3MiwyMjYpIiBmaWxsLW9wYWNpdHk9IjEiIGQ9IiBNOTYwLDU0OCBDOTYwLDU0OCAtOTYwLDU0OCAtOTYwLDU0OCBDLTk2MCw1NDggLTk2MCwtNTQ4IC05NjAsLTU0OCBDLTk2MCwtNTQ4IDk2MCwtNTQ4IDk2MCwtNTQ4IEM5NjAsLTU0OCA5NjAsNTQ4IDk2MCw1NDh6Ii8+PC9nPjwvZz48L2c+PGcgbWFzaz0idXJsKCNfX2xvdHRpZV9lbGVtZW50XzUpIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7Ij48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjk5OTU3MDAxMjA5MjU5MDMsMC4wMjkzMjIzNzQ2MTIwOTI5NzIsLTAuMDI5MzIyMzc0NjEyMDkyOTcyLDAuOTk5NTcwMDEyMDkyNTkwMywxNDczLjQyMjcyOTQ5MjE4NzUsNjg0LjY4NDMyNjE3MTg3NSkiIG9wYWNpdHk9IjEiPjxnIG9wYWNpdHk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwwKSI+PHBhdGggZmlsbD0icmdiKDE3NCw3MywxMTkpIiBmaWxsLW9wYWNpdHk9IjEiIGQ9IiBNMjcxLjQxMTAxMDc0MjE4NzUsNC40OTEwMDAxNzU0NzYwNzQgQzI3MS40MTEwMTA3NDIxODc1LDQuNDkxMDAwMTc1NDc2MDc0IC0xMi45NDk5OTk4MDkyNjUxMzcsMjcxLjEzOTAwNzU2ODM1OTQgLTEyLjk0OTk5OTgwOTI2NTEzNywyNzEuMTM5MDA3NTY4MzU5NCBDLTg5LjA2MzAwMzU0MDAzOTA2LDM0Mi41MTA5ODYzMjgxMjUgLTIwOC42MjMwMDEwOTg2MzI4LDMzOC42NjY5OTIxODc1IC0yNzkuOTk0OTk1MTE3MTg3NSwyNjIuNTUzOTg1NTk1NzAzMSBDLTI3OS45OTQ5OTUxMTcxODc1LDI2Mi41NTM5ODU1OTU3MDMxIC0yNzkuOTk2MDAyMTk3MjY1NiwyNjIuNTUzOTg1NTk1NzAzMSAtMjc5Ljk5NjAwMjE5NzI2NTYsMjYyLjU1Mzk4NTU5NTcwMzEgQy0zNTEuMzY4MDExNDc0NjA5NCwxODYuNDQwOTk0MjYyNjk1MyAtMzQ3LjUyMzk4NjgxNjQwNjI1LDY2Ljg4MDk5NjcwNDEwMTU2IC0yNzEuNDExMDEwNzQyMTg3NSwtNC40OTEwMDAxNzU0NzYwNzQgQy0yNzEuNDExMDEwNzQyMTg3NSwtNC40OTEwMDAxNzU0NzYwNzQgMTIuOTQ5OTk5ODA5MjY1MTM3LC0yNzEuMTM5MDA3NTY4MzU5NCAxMi45NDk5OTk4MDkyNjUxMzcsLTI3MS4xMzkwMDc1NjgzNTk0IEM4OS4wNjMwMDM1NDAwMzkwNiwtMzQyLjUxMDk4NjMyODEyNSAyMDguNjIzMDAxMDk4NjMyOCwtMzM4LjY2Njk5MjE4NzUgMjc5Ljk5NDk5NTExNzE4NzUsLTI2Mi41NTM5ODU1OTU3MDMxIEMyNzkuOTk0OTk1MTE3MTg3NSwtMjYyLjU1Mzk4NTU5NTcwMzEgMjc5Ljk5NjAwMjE5NzI2NTYsLTI2Mi41NTM5ODU1OTU3MDMxIDI3OS45OTYwMDIxOTcyNjU2LC0yNjIuNTUzOTg1NTk1NzAzMSBDMzUxLjM2ODAxMTQ3NDYwOTQsLTE4Ni40NDA5OTQyNjI2OTUzIDM0Ny41MjM5ODY4MTY0MDYyNSwtNjYuODgwOTk2NzA0MTAxNTYgMjcxLjQxMTAxMDc0MjE4NzUsNC40OTEwMDAxNzU0NzYwNzR6Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==';
const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAbCAYAAAA6aQxyAAAAAXNSR0IArs4c6QAAAmxJREFUWEft119IU1EcB/DvT4MliQ2J7MFtWZFzrnpJoqA/a9b+BP15MaK0f/RYD75EEGTRv5fooXrrpQwftCBizbuK/mAUbWPoKnctQmcrJDIxKjFqv7iRYrO7e0awk9B5vOd3Lt/P+d3D4VKVt58xhQf9B/xN94gCYL5LRGqauQwgG4GbcnmltA4wqElVLEczw9q9r9cQ+AIAhwhEFiCaUKw1egGrfUlHmqlNBCEFwEzb1ZClJdsOiyKkAKYVcunTm7Yho09EBCEFwPheoSoVfUYAbd4IIQVAwKZuxXpDBGCEkAIAcD+hWF2iAK3Ov+7h0t5C66XMgy0LACY6orZbjuWCqPcFV0fYeYWA8rF10gBaAAYfUhXb6VwQW723zsRhb/wnAL9CNCYU69lcEIs8fUPfqMCsrZHagbHQTn55oi3kPiyKWOmNP38P88+bWjrARVHU4gliZG8+HtzdIIJweWIDAzSrTDpgAzqwguLjmaNcdfGksmtfNsQB/7X62+may9LPQB3dwRL0TMoaSTvOnwrt3K+H2OzpCPaQzScVsBZhuCmiu9FdvCD0gYrqzrXv+DixaI838OgxFi+f+CzvZ6AEn3CQtPso+3iH0i/DmPF2lE0pE42Wd/N8UxjVlsxVeQc48QrbSDHK/9t8K9eiC5V/XJN3wDI8w0Z6IARIowDN7McL2HTr8w6oRBINFDAEDKMYLexBCnOy1uYdoKXZS9cxD290g6UwG628HoOYaQiVArCjF1twD8U0Mimgirm4ym6MYLpheKkXWQk+YxXFsBBJmPAVgzCjk+0Ii/3Lj+OkdEBoawWLpjzgBwVa98JvL2XeAAAAAElFTkSuQmCC';

// const div = document.createElement('div');
// div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="48" height="27" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;transform:translate3d(0px, 0px, 0px);content-visibility:visible"></svg>';
// const dom = div.firstChild;
// const serializedDom = xmlserializer.serializeToString(dom);
// console.log(serializedDom);

const width = 48;
const height = 27;
const canvas = createCanvas(width, height);
// const canvas = document.createElement('canvas');
// canvas.width = width;
// canvas.height = height;
const ctx = canvas.getContext('2d');
// const gl = canvas.getContext('webgl');

// loadImage(svg).then((image) => {
//     ctx.drawImage(image, 0, 0);
//     const dataurl = canvas.toDataURL('image/jpeg');
//     console.log(dataurl);
// });

const image = new Image(width, height);
image.onload = () => {
    ctx.drawImage(image, 0, 0);
    // const dataurl = canvas.toDataURL('image/png');
    // console.log(dataurl);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./image-src-svg.png", buffer);
}
image.src = png;

// loadImage(svg).then(image => {
//     ctx.drawImage(image, 0, 0);
//     console.log('<img src="' + canvas.toDataURL() + '" />');
// })
// .catch(e => console.log(e));
// const prefix = 'data:image/svg+xml;charset=UTF-8';
// let src = '<?xml version="1.0" ?><svg baseProfile="tiny" height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M8,19H5V9h3V19z M19,19h-3v-5.342c0-1.392-0.496-2.085-1.479-2.085c-0.779,0-1.273,0.388-1.521,1.165C13,14,13,19,13,19h-3   c0,0,0.04-9,0-10h2.368l0.183,2h0.062c0.615-1,1.598-1.678,2.946-1.678c1.025,0,1.854,0.285,2.487,1.001   C18.683,11.04,19,12.002,19,13.353V19z"/></g><g><ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5"/></g></svg>';
// src = prefix + ',' + encodeURIComponent(`<?xml version="1.0" ?><svg  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.2" viewBox="0 0 1920 1080" width="48px" height="27px" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_2"><rect width="1920" height="1080" x="0" y="0"/></clipPath><filter id="__lottie_element_6" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"/></feComponentTransfer></filter><mask id="__lottie_element_5" mask-type="alpha"><g filter="url(#__lottie_element_6)"><rect width="1920" height="1080" x="0" y="0" fill="#ffffff" opacity="0"/><g transform="matrix(0.015529580414295197,0.9998794198036194,-0.9998794198036194,0.015529580414295197,1484.68212890625,414.59979248046875)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,0)" fill-opacity="1" d=" M271.4110107421875,4.491000175476074 C271.4110107421875,4.491000175476074 -12.949999809265137,271.1390075683594 -12.949999809265137,271.1390075683594 C-89.06300354003906,342.510986328125 -208.6230010986328,338.6669921875 -279.9949951171875,262.5539855957031 C-279.9949951171875,262.5539855957031 -279.9960021972656,262.5539855957031 -279.9960021972656,262.5539855957031 C-351.3680114746094,186.4409942626953 -347.52398681640625,66.88099670410156 -271.4110107421875,-4.491000175476074 C-271.4110107421875,-4.491000175476074 12.949999809265137,-271.1390075683594 12.949999809265137,-271.1390075683594 C89.06300354003906,-342.510986328125 208.6230010986328,-338.6669921875 279.9949951171875,-262.5539855957031 C279.9949951171875,-262.5539855957031 279.9960021972656,-262.5539855957031 279.9960021972656,-262.5539855957031 C351.3680114746094,-186.4409942626953 347.52398681640625,-66.88099670410156 271.4110107421875,4.491000175476074z"/></g></g></g></mask><filter id="__lottie_element_13" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"/></feComponentTransfer></filter><mask id="__lottie_element_12" mask-type="alpha"><g filter="url(#__lottie_element_13)"><rect width="1920" height="1080" x="0" y="0" fill="#ffffff" opacity="0"/><g transform="matrix(0.015529580414295197,0.9998794198036194,-0.9998794198036194,0.015529580414295197,1484.68212890625,414.59979248046875)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,0)" fill-opacity="1" d=" M271.4110107421875,4.491000175476074 C271.4110107421875,4.491000175476074 -12.949999809265137,271.1390075683594 -12.949999809265137,271.1390075683594 C-89.06300354003906,342.510986328125 -208.6230010986328,338.6669921875 -279.9949951171875,262.5539855957031 C-279.9949951171875,262.5539855957031 -279.9960021972656,262.5539855957031 -279.9960021972656,262.5539855957031 C-351.3680114746094,186.4409942626953 -347.52398681640625,66.88099670410156 -271.4110107421875,-4.491000175476074 C-271.4110107421875,-4.491000175476074 12.949999809265137,-271.1390075683594 12.949999809265137,-271.1390075683594 C89.06300354003906,-342.510986328125 208.6230010986328,-338.6669921875 279.9949951171875,-262.5539855957031 C279.9949951171875,-262.5539855957031 279.9960021972656,-262.5539855957031 279.9960021972656,-262.5539855957031 C351.3680114746094,-186.4409942626953 347.52398681640625,-66.88099670410156 271.4110107421875,4.491000175476074z"/></g></g></g></mask></defs><g clip-path="url(#__lottie_element_2)"><g mask="url(#__lottie_element_12)" style="display: block;"><g transform="matrix(1,0,0,1,960,532)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(41,72,226)" fill-opacity="1" d=" M960,548 C960,548 -960,548 -960,548 C-960,548 -960,-548 -960,-548 C-960,-548 960,-548 960,-548 C960,-548 960,548 960,548z"/></g></g></g><g mask="url(#__lottie_element_5)" style="display: block;"><g transform="matrix(0.9995700120925903,0.029322374612092972,-0.029322374612092972,0.9995700120925903,1473.4227294921875,684.684326171875)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(174,73,119)" fill-opacity="1" d=" M271.4110107421875,4.491000175476074 C271.4110107421875,4.491000175476074 -12.949999809265137,271.1390075683594 -12.949999809265137,271.1390075683594 C-89.06300354003906,342.510986328125 -208.6230010986328,338.6669921875 -279.9949951171875,262.5539855957031 C-279.9949951171875,262.5539855957031 -279.9960021972656,262.5539855957031 -279.9960021972656,262.5539855957031 C-351.3680114746094,186.4409942626953 -347.52398681640625,66.88099670410156 -271.4110107421875,-4.491000175476074 C-271.4110107421875,-4.491000175476074 12.949999809265137,-271.1390075683594 12.949999809265137,-271.1390075683594 C89.06300354003906,-342.510986328125 208.6230010986328,-338.6669921875 279.9949951171875,-262.5539855957031 C279.9949951171875,-262.5539855957031 279.9960021972656,-262.5539855957031 279.9960021972656,-262.5539855957031 C351.3680114746094,-186.4409942626953 347.52398681640625,-66.88099670410156 271.4110107421875,4.491000175476074z"/></g></g></g></g></svg>`);
// image.src = svg;
// image.src = Buffer.from(serializedSvg, 'utf8');

// console.log('done');