let sideLength,
    canvas,
    rectHeight,
    rectWidth,
    circleRadius,
    triHeight;
    

document.addEventListener('DOMContentLoaded', () => {
    sideLength = document.getElementById('side-length-input');
    canvas = document.getElementById('canvas');
    rectHeight = document.getElementById("rectangle-height-input"),
    rectWidth = document.getElementById("rectangle-width-input"), 
    circleRadius = document.getElementById("radius-input"),
    triHeight = document.getElementById("triangle-height-input");
    // p tags for text
    shapeName = document.getElementById("shape-name"),
    shapeHeight = document.getElementById("shape-height"),
    shapeWidth = document.getElementById("shape-width"),
    shapeRadius = document.getElementById("shape-radius"), 
    shapeArea = document.getElementById("shape-area"),
    shapePerimeter = document.getElementById("shape-perimeter");
});

class Shape {
  constructor(type, shapeName, height, width, radius, area, perimeter) {
        this.shape = document.createElement('div');
        this.shape.className = type;
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.shape.addEventListener("dblclick", this.removeShape.bind(this));       
        this.shape.addEventListener("click", this.describe.bind(this));        
         
  }

    describe(){
        let shapeNameText = document.createElement('span'),
        shapeHeightText = document.createElement('span'),
        shapeWidthText = document.createElement('span'),
        shapeRadiusText = document.createElement('span'),
        shapeAreaText = document.createElement('span'),
        shapePerimeterText = document.createElement('span');

        shapeNameText.innerHTML = " " + this.shape.className;
        shapeHeightText.innerHTML = " " + this.height;
        shapeWidthText.innerHTML = " " + this.width;
        shapeRadiusText.innerHTML = " " + this.radius;
        shapeAreaText.innerHTML = " " + this.area;
        shapePerimeterText.innerHTML = " " + this.perimeter;

        shapeName.appendChild(shapeNameText);
        shapeHeight.appendChild(shapeHeightText);
        shapeWidth.appendChild(shapeWidthText);
        shapeRadius.appendChild(shapeRadiusText);
        shapeArea.appendChild(shapeAreaText);
        shapePerimeter.appendChild(shapePerimeterText);
        
    }  

    getRandomPosition() {
        let availW = canvas.offsetWidth  - 60,
        availH = canvas.offsetHeight  - 60,
        randomY = Math.round(Math.random() * availH) + 'px',
        randomX = Math.round(Math.random() * availW) + 'px';
        this.shape.style.left = randomX;
        this.shape.style.top = randomY;
    }

    draw() {
        canvas.appendChild(this.shape);
        console.log('im a: ' + this.shape.className);
        this.getRandomPosition();
        this.describe();
    }

    removeShape(){
        this.shape.remove();
    }
}

class Square extends Shape {
    constructor() {
        super('square');
        this.height = sideLength.value + 'px';
        this.width = sideLength.value + 'px';
        this.shape.style.width = sideLength.value + 'px';
        this.shape.style.height = sideLength.value + 'px';
        this.radius = "NA";
        this.area = sideLength.value * 2;
        this.perimeter = sideLength.value * 4; 
        this.draw();
    }
}

class Rectangle extends Shape {
    constructor() {
        super('rectangle');
        this.shape.style.height = rectHeight.value + "px";
        this.shape.style.width = rectWidth.value  + "px";
        this.height = rectHeight.value;
        this.width = rectWidth.value;
        this.radius = "NA";
        this.area = rectHeight.value * rectWidth.value;
        this.perimeter = 2 * (rectHeight.value + rectWidth.value);
        this.draw();
    }
}

class Circle extends Shape {
    constructor() {
        super('circle');
        this.shape.style.height = circleRadius.value + "px";
        this.shape.style.width = circleRadius.value + "px";
        this.height = "NA";
        this.width = "NA";
        this.radius = Math.round(circleRadius.value /2);
        this.area = "NA";
        this.perimeter = "NA";
        this.draw();
    }
}

class Triangle extends Shape {
    constructor() {
        super('triangle');
        this.shape.style.borderRight = triHeight.value + "px solid transparent",
        this.shape.style.borderBottom = triHeight.value + "px solid yellow",
        this.shape.style.borderTop = triHeight.value + "px solid transparent",
        this.area = 0.5 * 45 * triHeight.value;  
        this.draw();
    }
}

const makeSquare = () => {
    new Square();
}    

const makeRectangle = () => {
    new Rectangle();
} 

const makeCircle = () => {
    new Circle();
} 

const makeTriangle = () => {
    new Triangle();
} 
