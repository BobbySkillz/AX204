console.log("working");

var c = document.getElementById("myCanvas1");
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(75,0);
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.strokeStyle = "red";
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.fillRect = "cyan";
ctx2.fill();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.arc(100,100,80,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "tomato";
ctx3.fill();

var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext('2d');
ctx4.beginPath();
ctx4.strokeStyle = "blue";
ctx4.moveTo(0,0);
ctx4.lineTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(0,150);
ctx4.lineTo(0,0);
ctx4.moveTo(300,0);
ctx4.lineTo(150,0);
ctx4.lineTo(150,300);
ctx4.lineTo(0,300);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "blue";
ctx4.fill();

var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext('2d');
ctx5.beginPath();
ctx5.strokeStyle = "blue";
ctx5.moveTo(0,0);
ctx5.lineTo(300,300);
ctx5.lineTo(300,150);
ctx5.lineTo(0,150);
ctx5.lineTo(0,0);
ctx5.moveTo(300,0);
ctx5.lineTo(150,0);
ctx5.lineTo(150,300);
ctx5.lineTo(0,300);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "blue";
ctx5.fill();


var c6 = document.getElementById("myCanvas6");
var ctx6 = c6.getContext('2d');
//sky and land
ctx6.fillStyle = "green";
ctx6.fillRect(0, 350, 800, 150);
ctx6.fillStyle = "cyan";
ctx6.fillRect(0, 0, 800, 350);
//sun
ctx6.beginPath();
ctx6.arc(100, 100, 50, 0, 6.28)
ctx6.closePath();
ctx6.stroke();
ctx6.fillStyle = "orange";
ctx6.fill();
//left apartment
ctx6.fillStyle = "grey";
ctx6.fillRect(100, 250, 200, 100);
ctx6.clearRect(130, 310, 20, 20);
ctx6.clearRect(170, 310, 20, 20);
ctx6.clearRect(210, 310, 20, 20);
ctx6.clearRect(250, 310, 20, 20);
ctx6.clearRect(130, 270, 20, 20);
ctx6.clearRect(170, 270, 20, 20);
ctx6.clearRect(210, 270, 20, 20);
ctx6.clearRect(250, 270, 20, 20);

ctx6.beginPath()
ctx6.moveTo(300, 500);
ctx6.lineTo(350, 350);
ctx6.lineTo(400, 350);
ctx6.lineTo(450, 500);
ctx6.fillStyle = "grey"
ctx6.fill()
ctx6.stroke();
ctx6.closePath();
// Line in road
ctx6.moveTo(375, 500);
ctx6.strokeStyle = 'white'
ctx6.lineTo(375, 350);
ctx6.stroke();














