document.addEventListener("DOMContentLoaded", function(){
class Shapes {
  constructor(shapeName, height, width, radius, area, perimeter) {
        this.shapeName = shapeName;
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.area = area;
        this.perimeter = perimeter;
  }
  
  shapeNames() {
      console.log(this.shapeName);
  }
}

class Circle extends Shapes {
  constructor(radius) {
        super("cirlce", "NA","NA", 4 ,"NA","NA");
  }
}

class Square extends Shapes {
    constructor() {
      super();
  }
}

class Rectangle extends Shapes {
  constructor() {
        super("cirlce", "NA","NA","NA","NA");
  }
}

class Triangle extends Shapes {
  constructor(brand) {
        super(2, brand);
  }
}

var circle1 = new Circle();
console.log(circle1);
circle1.shapeNames();
});