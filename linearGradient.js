let myCanvas = document.getElementById('myCanvas');
let context = myCanvas.getContext('2d');

context.rect(0, 0, 400, 320);
context.stroke();

context.beginPath();
context.moveTo(90, 245);
context.lineTo(90, 75);
context.lineTo(300, 75);
context.lineTo(300, 245);

// context.rect(90, 75, 210, 170);
context.stroke();

grd = context.createLinearGradient(0, 300, 0, 0);
grd.addColorStop(0, 'white');
grd.addColorStop(.45, 'green');
grd.addColorStop(.45, 'white');
grd.addColorStop(1, 'cyan');

// grd.addColorStop(.4, 'white');
// context.beginPath();
context.fillStyle = grd;
context.fillRect(20, 20, 360, 280);
context.stroke();

// grd2 = context.createLinearGradient(0, 280, 0, 0)
// grd2.addColorStop(1, 'green');
// grd2.addColorStop(0, 'white');
// context.fillStyle = grd2;
// context.fillRect(20, 150, 360, 150);




//     context.beginPath();
//     context.moveTo(100,100);
//     context.lineTo(450,50);
//     context.lineTo(350,300)
//     context.stroke()//context.fill()
//     context.lineWidth=3
//    // context.beginPath()
//     context.moveTo(0,0)
//     context.lineTo(20,150)
//     context.stroke()
//     context.fill()

//x-y-radius-startAngle-EndAngle,anti---false
    // context.arc(300,150,50,0,2*Math.PI,true)
    // context.stroke()


//     context.rect(190,50,200,100)
//     context.fillStyle="red"
//     context.stroke()
//     context.fill()
//     context.fillStyle="yellow"

//     context.fillRect(250,50,200,100)
// //

    // context.font="26pt Georgia"
    // context.fillStyle="pink"
    // context.fillText('this is canvas demo',50,110)
    // context.strokeText('this is canvas demo',50,110)

// context.fillStyle="yellow"
// context.fillRect(0,0,80,80)

// context.translate(110,30)
// context.fillStyle="red"
// context.fillRect(0,0,80,80)
// context.save()

// context.setTransform(1,0,0,1,0,0)
// context.fillStyle="yellow"
// context.fillRect(0,0,80,80)

// context.restore()
// //context.fillStyle="green"
// context.fillRect(20,20,80,80)