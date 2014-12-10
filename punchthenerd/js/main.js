var game = new Phaser.Game(700,700,Phaser.CANVAS,'gameContainer');
var score = 0;

var title = {
	preload: function ()
	{
		game.load.image('cenaTile','assets/johncena.png',13,24);
		game.load.image('particle','assets/particle.png');
		game.load.image('title','assets/title.png');
		game.load.image('play','assets/play.png');
		game.load.spritesheet('punch','assets/PUNCH.png',300,153);
		game.load.image('floortile','assets/floortile.png');
		game.load.image('ex','assets/ex.png');
		game.load.image('hawk','assets/hawkin.png');
		game.load.image('tyson','assets/neil.png');
		game.load.image('cage','assets/cage.png');
		game.load.image('retry','assets/retry.png');
	},

	
	create: function()
	{
		game.add.tileSprite(0,0,700,700,'cenaTile');
		game.add.sprite(100,300,'cage');
		this.cena = game.add.sprite(450,10,'punch',0);
		this.cena.animations.add('punch');
		this.cena.animations.play('punch',5,true);

		game.add.button(250,500,'play',this.startGame);
		
		this.titl = game.add.sprite(0,0,'title');


	},

	startGame: function()
	{
		console.log('clicked');
		game.state.start('play');
	}	
}

var game_play = {
	create: function()
	{
		this.timeTick = 30;
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.speed = 500;
		game.add.tileSprite(0,0,700,700,'floortile');
		game.add.button(350,0,'ex',this.goBack);
		game.time.events.loop(2000,this.punch,this)

		
		this.cena = game.add.sprite(100,100,'punch',1);
		game.physics.enable(this.cena,Phaser.Physics.ARCADE);

		this.nerd_group = game.add.group();
		this.nerd_group.createMultiple(5,'hawk');
		this.nerd_group.createMultiple(5,'tyson');
		
		this.game.time.events.loop(250,this.changeDir,this);
		this.game.time.events.loop(2000,this.makeNew,this);
		this.game.time.events.loop(1000,this.timeHandler,this)
		this.canPunch = true;
		this.cena.animations.add('punch');

		this.timeContainer = document.getElementById('timeContainer');
		this.timeContainer.innerHTML  = 'TIME: '+this.timeTick;
		this.scoreContainer = document.getElementById('scoreContainer');
		this.scoreContainer.innerHTML = 'SCORE: 0'
		document.getElementById('finalScore').innerHTML = '';
	},

	update: function()
	{
		this.cena.body.velocity.y = 0;
		this.cena.body.velocity.x = 0;
		
		//desktop controls
		if(game.input.keyboard.isDown(80))
			if(this.canPunch)
			{
				this.cena.animations.play('punch',10,false);
				game.physics.arcade.overlap(this.cena,this.nerd_group,this.processCollide,null,this);
				this.canPunch = false;
			}

		if(game.input.keyboard.isDown(87))
			this.cena.body.velocity.y = this.speed*-1;
		if(game.input.keyboard.isDown(83))
			this.cena.body.velocity.y = this.speed;
		if(game.input.keyboard.isDown(65))
			this.cena.body.velocity.x = this.speed*-1;
		if(game.input.keyboard.isDown(68))
			this.cena.body.velocity.x = this.speed;
		//mobile controls will go here???

		if(this.timeTick==0)
		{
			game.state.start('ogre');
		}

	},

	makeNew: function()
	{
		heya = this.nerd_group.getRandom();
		if(!heya.alive)
		{
			heya.reset(Math.random()*700,Math.random()*700);
			heya.checkWorldBounds=true;
			heya.outOfBoundsKill=true;
		}
	},

	goBack: function()
	{
		game.state.start('title');
	},

	changeDir: function()
	{
		this.nerd_group.forEachExists(this.moveAround);
	},

	moveAround: function(guy)
	{
		this.game.physics.enable(guy, Phaser.Physics.ARCADE);
		guy.body.velocity.y = Math.random()* (1000 + 1000) - 1000;
		guy.body.velocity.x = Math.random()* (1000 + 1000) - 1000;
	},
	processCollide: function(cena,nerd)
	{
		console.log('hit');
		nerd.kill();
		score+=1;
		this.scoreContainer.innerHTML = 'SCORE: '+score;

	},

	punch: function()
	{
		this.canPunch = true;
	},

	timeHandler: function()
	{
		this.timeTick-=1;
		this.timeContainer.innerHTML = "TIME: "+this.timeTick;
	}
}

var gameOver = {
	create: function()
	{
		game.add.tileSprite(0,0,700,700,'cenaTile');		
		game.add.button(250,500,'retry',this.retry);
		document.getElementById('scoreContainer').innerHTML = '';
		document.getElementById('timeContainer').innerHTML = '';
		document.getElementById('finalScore').innerHTML = 'GAME OVER!\nSCORE: '+score;
	},
	retry: function()
	{
		game.state.start('play');
	}
}

game.state.add('ogre',gameOver);
game.state.add('title',title);
game.state.add('play',game_play);
game.state.start('title');