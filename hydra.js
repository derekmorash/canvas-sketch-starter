const canvasSketch = require("canvas-sketch");
const Hydra = require("hydra-synth");

// Utility Functions
function random(min, max) {
  let rand = Math.random();
  if (typeof min === "undefined") {
    return rand;
  } else if (typeof max === "undefined") {
    if (min instanceof Array) {
      return min[Math.floor(rand * min.length)];
    } else {
      return rand * min;
    }
  } else {
    if (min > max) {
      const tmp = min;
      min = max;
      max = tmp;
    }

    return rand * (max - min) + min;
  }
}

function map(current, in_min, in_max, out_min, out_max) {
  return (current - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// canvas-sketch setup
const settings = {
  context: "webgl",
  dimensions: [1080, 1080],
  // dimensions: [1920, 1080],
  // dimensions: [2048, 2048],
  // Standard A4 paper size
  // dimensions: 'A4',
  // pixelsPerInch: 300,
  animate: true,
  fps: 30,
  duration: 30, // how long an export will run (cmd + shift + s)
};

const sketch = (initialProps) => {
  console.log(initialProps);

  // Init hydra and attach it to the canvas that canvas-sketch creates for us
  const hydra = new Hydra({
    canvas: initialProps.canvas,
    autoLoop: false,
    detectAudio: false,
    makeGlobal: true,
  });
  console.log(hydra);

  // Your sketch
  osc(80, 2, 2)
    .modulateRotate(osc(5, 1))
    .out()

  return ({ context, width, height, deltaTime }) => {
    // deltaTime is the time elapsed since the last frame
    // Tell hydra to update
    // Adjust the multiplier to change the speed of your sketch
    hydra.tick(deltaTime*100);
  };
};

canvasSketch(sketch, settings);
