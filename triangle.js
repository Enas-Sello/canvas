let triangle = document.getElementById('triangle');
let context = triangle.getContext('2d');

let x1 =300 , y1= 80, x2 = x1, y2 = 300, x3 = 50, y3 = y2;

context.beginPath();
context.moveTo(x1,y1);
context.lineTo(x2, y2);
context.lineTo(x3, y3);
context.lineTo(x1,y1);
context.fillStyle = "#6fb68a";
context.fill();