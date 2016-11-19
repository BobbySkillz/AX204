console.log("gghjghjg");

var canvas;
var ctx;

var x = 300;
var y = 300;
var r = 20;

var mx = 0;
var my = 0;

var goodX;
var goodY;
var badX;
var badY;
var spriteWidth = 50;
var spriteHeight = 50;
//Boolean = True or False
var goodCollision = false;
var badCollision = false;
//width and Height
var Width = 600;
var Height = 600;
var score = 0;

//draw our Cicles
function circle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28)
	ctx.closePath();
	ctx.fillStyle = "linen";
	ctx.fill();
}

//wipes Our Canvas
function clear() {
	ctx.clearRect(0, 0, Width, Height)
}

//Import Images as sprites
function drawGood() {
	ctx = document.getElementById('myCanvas').getContext('2d');
	var star = new Image();
	star.src= "http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwMDU4NTc3NDIy.jpg";
	ctx.drawImage(star, goodX, goodY, 50, 50);
}

function drawBad() {
	ctx = document.getElementById('myCanvas').getContext('2d');
	var bomb = new Image();
	bomb.src= "http://static4.businessinsider.com/image/56c640526e97c625048b822a-480/donald-trump.jpg";
	ctx.drawImage(bomb, badX, badY, 50, 50);
}

// Intiatlise our animation
function init() {
	ctx = document.getElementById('myCanvas').getContext("2d");
	//put our sprites into random positions
	badX = Math.floor(Math.random() * 550);
	//wait for user to press keyboard (event)
	window.onkeydown = keydownControl;
	//Redraw our canvas every 10 ms
	return setInterval(draw, 10);
}

//Draw function
function draw() {
	clear();
	circle(x, y, r);
	drawGood();
	drawBad();
//Tell our player sprite to bounce off the walls
if (x + mx > Width - r || x + mx < r) {
	mx = -mx
} else if (y + my > Height - r || y + my < r) {
	my = -my
}
//Move our spirit
x += mx; //means the same as x = x + mx
y += my;

//Is there a collision? What happens if there is?
collisionCheck();
collisionHandle();
}

//create my collision check and handler
function collisionHandle() {
if ( (x >= badX) && (x <= badX + spriteWidth) && (y >= badY) && (y <= badY + spriteHeight) ) {
	badCollision = true;
} else {
	badCollision = false;
}
}

function collisionCheck() {
	if (badCollision == true) {
		badX = Math.floor(Math.random() * 550);
		badX = Math.floor(Math.random() * 550);
		score -= 1;
		document.getElementById("score").innerHTML = score;
	}
	if (goodCollision == true) {
		goodX = Math.floor(Math.random() * 550);
		goodX = Math.floor(Math.random() * 550);
		score -= 1;
		document.getElementById("score").innerHTML = score;
	}	
}


// Create a function that chages mx and my depending on what key it pressed
function keydownControl(e) {
	if (e, keyCode == 37) {
		mx = -4;
		my = 0;
	} else if (e.keyCode == 38) {
		mx = 0;
		my = -4;
	} else if (e.keyCode == 39) {
		mx = 4;
		my = 0;
	} else if (e.keyCode == 40) {
		mx = 4;
		my = 0;
	}
}

// Call our entry point
init();








