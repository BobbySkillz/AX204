console.log("PEN PINEAPPLE APPLE APPLE PEN")

//Declare the Variables
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {Preload: preload, create: create, update: update});
var scrore = 0;

function preload(){
	game.load.image('sky', 'assests/sky.png');
	game.load.image('ground', 'assests/platform.png')
}

function create(){
	//Give game Physic Engine
	game.physics.starSystem(Phaser.Physics.ARCADE);
	//add the sky
	game.add.sprite(0, 0, 'sky');

	//Physics group
	platform = game.add.physicsGroup();
	platform.enableBody = true;

	//Ground
	var ground = platform.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	//Ledges
	var ground = platform.create(0, game.world.height - 64, 'ground');
	ground.body.immovable = true;
	var ground = platform.create(0, game.world.height - 64, 'ground');
	ground.body.immovable = true;
}

function update(){

}