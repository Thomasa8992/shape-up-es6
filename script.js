//inputs
let rectHeight = document.getElementById("rectangle-height-input"),
rectWidth = document.getElementById("rectangle-width-input"),
sideLengths = document.getElementById("side-length-input"), 
circleRadius = document.getElementById("radius-input"),
triHeight = document.getElementById("triangle-height-input"),
// buttons 
rectBtn = document.getElementById("rect-btn"),
squareBtn = document.getElementById("square-btn"),
circleBtn = document.getElementById("circle-btn"),
triBtn = document.getElementById("triangle-btn"),
// bottom panel p tags
shapeName = document.getElementById("shape-name"),
shapeHeight = document.getElementById("shape-height"),
shapeWidth = document.getElementById("shape-width"),
shapeRadius = document.getElementById("shape-radius"), 
shapeArea = document.getElementById("shape-area"),
shapePerimeter = document.getElementById("shape-perimeter");

document.addEventListener("DOMContentLoaded", () => {
    square.drawSquare();
    rectangle.drawRectangle();
    circle.drawCircle();
    triangle.drawTriangle();
    // square.describe();
    // circle.describe();
    // rectangle.describe();
    // triangle.describe();
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
    let shapeNameText = document.createElement('span'),
    shapeHeightText = document.createElement('span');
    shapeNameText.innerHTML = " " + this.shapeName;
    if (this.shapeName === "Square"){
      this.height = sideLengths.value;
      this.width = sideLengths.value;
      this.radius = "NA";
      this.area = "NA";
      this.perimeter = sideLengths.value * 4; 
      shapeName.appendChild(shapeNameText);
      shapeHeight.appendChild(shapeHeightText);
      
       
    } else if (this.shapeName === "Rectangle"){
      shapeName.appendChild(shapeNameText);      
    }
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
      describeSquare();
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
      describeRectangle()
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
        super("cirlce");
  }
}

class Triangle extends Shapes {
  constructor(height) {
        super("Triangle");
  }
}

class Rectangle extends Shapes {
  constructor(width, length) {
        super("Rectangle");
  }
}

class Square extends Shapes {
    constructor(sideLengths) {
      super("Square");
      
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

function describeSquare() {
      square.describe();
}

function describeRectangle() {
      rectangle.describe();
}