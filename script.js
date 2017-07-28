let rectHeight = document.getElementById("rectangle-height-input"),
rectWidth = document.getElementById("rectangle-width-input"),
sideLengths = document.getElementById("side-length-input"), 
circleRadius = document.getElementById("radius-input"),
triHeight = document.getElementById("triangle-height-input")
rectBtn = document.getElementById("rect-btn"),
squareBtn = document.getElementById("square-btn"),
circleBtn = document.getElementById("circle-btn"),
triBtn = document.getElementById("triangle-btn"),
canvas = document.getElementById("canvas");

document.addEventListener("DOMContentLoaded", () => {
    square.drawSquare();
    rectangle.drawRectangle();
    circle.drawCircle();
    triangle.drawTriangle();
    square.describe();
  });
class Shapes {
  constructor(shapeName, height, width, radius, area, perimeter) {
        this.shapeName = shapeName;
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.area = area;
        this.perimeter = perimeter;
  }
  
  describe() {

  }
  drawSquare() {
    squareBtn.addEventListener("click", function(){
      // console.log(squareBtn);
      // console.log(sideLengths.value);
       let square = document.createElement("div");     
      square.className = "created-square";
      square.style.height = sideLengths.value + "px",
      square.style.width =  sideLengths.value + "px";
      console.log("squarebtn clicked");
      getRandomPosition(square);     
    });
  }

  drawRectangle() {
    rectBtn.addEventListener("click", function(){
      // console.log(squareBtn);
      // console.log(sideLengths.value);
      let rect = document.createElement("div");   
      rect.className = "created-rect";
      rect.style.height = rectHeight.value + "px",
      rect.style.width = rectWidth.value  + "px";
      console.log("rectbtn clicked"); 
      getRandomPosition(rect);   
    });
  }

  drawCircle() {
      circleBtn.addEventListener("click", function(){
      // console.log(squareBtn);
      // console.log(sideLengths.value);
      let circle = document.createElement("div");
      canvas.appendChild(circle);      
      circle.className = "created-circle";
      circle.style.height = circleRadius.value + "px",
      circle.style.width = circleRadius.value + "px",
      console.log("circlebtn clicked");   
      getRandomPosition(circle)   
    });
  }

  drawTriangle() {
      triBtn.addEventListener("click", function(){
      // console.log(squareBtn);
      // console.log(sideLengths.value);
      let triangle = document.createElement("div");
      canvas.appendChild(triangle);      
      triangle.className = "created-triangle";
      triangle.style.borderRight = triHeight.value + "px solid transparent",
      triangle.style.borderBottom = triHeight.value + "px solid yellow",
      triangle.style.borderTop = triHeight.value + "px solid transparent",  
      console.log("tribtn clicked");      
      getRandomPosition(triangle);
    });
  }
}



class Circle extends Shapes { 
  constructor(radius) {
        super("cirlce", "NA","NA", 4 ,"NA","NA");
  }
}

class Triangle extends Shapes {
  constructor(height) {
        super("Triangle", "NA","NA","NA","NA");
  }
}

class Rectangle extends Shapes {
  constructor(width, length) {
        super("Rectangle", "NA","NA","NA","NA");
  }
}

class Square extends Shapes {
    constructor(sideLength) {
      super("Square", "NA","NA","NA","NA");
  }
}

let circle = new Circle();
let square = new Square();
let rectangle = new Rectangle();
let triangle = new Triangle();




function getRandomPosition(elem) {
	  var availW = canvas.offsetWidth  - 60;
    var availH = canvas.offsetHeight  - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';
    elem.style.left = randomX;
    elem.style.top = randomY;
    canvas.appendChild(elem);
}