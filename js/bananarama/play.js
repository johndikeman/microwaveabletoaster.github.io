var play_state={
		
	create: function()
	{
		this.target=this.game.add.sprite(200,200,'target')
		
		this.game.time.events.loop(500,this.can_fire,this)
		this.game.time.events.loop(2000,this.make_monkey,this)
		this.game.time.events.loop(500,this.change_dir,this)

		this.banner_group=this.game.add.group()
		this.banner_group.createMultiple(150,'banana')

		this.monkey_group=this.game.add.group()
		this.monkey_group.createMultiple(20,'monkey')
		
		this.can_fire=false
		this.ticker=1
		this.score=0
		this.banana_count=1

		this.exploder=[[0,-200],[100,100],[200,0],[100,-100],[-200,0],[-100,-100],[-100,100],[0,200]]

		var style = { font: "30px Arial", fill: "#ffffff" };
		this.label_score = this.game.add.text(20, 20, "score: 0", style);
		this.label_banana = this.game.add.text(200,20, "bananas: 1",style)

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
	},

	update: function()
	{
		if (this.game.input.pointer1.isDown || this.game.input.mousePointer.isDown)
		{
			this.set_target()
			if(this.can_fire)
			{
				this.banana_rama()	
				this.can_fire=false
			}	
		}

		this.game.physics.arcade.collide(this.banner_group,this.monkey_group,this.collision,null,this)
		this.label_banana.text='bananas: '+this.banana_count

		if(this.banana_count<=0 && this.banner_group.countLiving()==0)
		{
			this.game.state.start('lose')
		}
	},

	banana_rama: function()
	{
		banny=this.banner_group.getFirstDead()

		this.game.physics.enable(banny, Phaser.Physics.ARCADE);

		banny.checkWorldBounds=true
		banny.outOfBoundsKill=true

		banny.reset(290,800)

		this.game.physics.arcade.moveToObject(banny,this.target,800)
		this.banana_count-=1
	},

	set_target: function()
	{
		this.target.reset(game.input.x,game.input.y)
	},

	can_fire: function()
	{
		this.can_fire=true
	},

	make_monkey: function()
	{
		mon=this.monkey_group.getFirstDead()

		this.game.physics.enable(mon,Phaser.Physics.ARCADE)
		
		mon.checkWorldBounds=true
		mon.outOfBoundsKill=true

		mon.animations.add('main')
		mon.animations.play('main',6,true)
		mon.reset(Math.random()*580,Math.random()*100)

		this.ticker*= -1
	},

	change_dir: function()
	{
		this.monkey_group.forEachAlive(this.move_around,this)
	},

	move_around: function(monkee)
	{
		this.game.physics.enable(monkee, Phaser.Physics.ARCADE);
		monkee.body.velocity.y= Math.random()*600
		monkee.body.velocity.x= (Math.random()*200)*this.ticker
	},

	collision: function(monkey,nanner)
	{
		monkey.kill()
		nanner.kill()
		
		this.score+=1
		this.label_score.text="score: "+this.score

		this.banana_count+=2
	}
}

