function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return `the location is ${this.x}, ${this.y}`
}

function Shape() {
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}
