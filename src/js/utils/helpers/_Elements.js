let clicked = false

export function setVariable(newValue) {
  clicked = newValue
  console.log(clicked)
}

export function getVariable() {
  // console.log(clicked)

  return clicked
}

export default clicked

export const filterElements = [
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'blur',
    scale: 'px',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 200,
    value: 100,
    step: 1,
    filter: 'brightness',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 200,
    value: 100,
    step: 1,
    filter: 'contrast',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'grayscale',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 360,
    value: 0,
    step: 1,
    filter: 'hue-rotate',
    scale: 'deg',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'invert',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 100,
    step: 1,
    filter: 'opacity',
    scale: '%',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 1,
    max: 100,
    value: 1,
    step: 1,
    filter: 'saturate',
    scale: '',
    id: 'applyFilter',
  },
  {
    type: 'range',
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    filter: 'sepia',
    scale: '%',
    id: 'applyFilter',
  },
]
