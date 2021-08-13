function areaSquare(side) {
  return side * side;
}

function areaRectangle(length, height) {
  return length * height;
}

function areaCircle(radius) {
  return 3.14 * radius * radius;
}

module.exports = {
  areaSquare: areaSquare,
  areaRectangle: areaRectangle,
  areaCircle: areaCircle,
};
