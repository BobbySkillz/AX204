console.log("PEN PINEAPPLE APPLE APPLE PEN")

//Declare the Variables
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var scrore = 0;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);

}

function create(){
	//Give game Physic Engine
	game.physics.startSystem(Phaser.Physics.ARCADE);
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

		//Player
	player = game.add.sprite(32, game.world.height - 150, 'dude');
		//animate the sprite
		player.animation.add('left', [0,1,2,3], 10, true);
		player.animation.add('left', [5,6,7,8], 10, true);
		game.physics.arcade.enable(player);
		// physics properties
		player.body.bounce.y = 0.3;
		player.body.gravity.y = 333;
		player.body.colliderWorldBounds = true;
}



function update(){

}