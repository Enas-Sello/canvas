let myCanvas = document.getElementById('myCanvas');
let context = myCanvas.getContext('2d');
let x = 100, y = 80;
context.rect(0, 0, 400, 320);
context.stroke();

context.beginPath();
context.moveTo(0,0);
context.strokeStyle = '#6fb68a';

let intervalID = setInterval(()=>{
    context.lineTo(x,y);
    x += 100;
    y += 80;
    context.stroke();
    if(x > 500){
        alert('Animation End');
        clearInterval(intervalID);
    }
}, 2000)
