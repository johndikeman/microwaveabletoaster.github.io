var load_state={
	preload: function()
	{
		this.game.stage.backgroundColor="#ff3016";

		this.game.load.image('banana','assets/banana.png');

		this.game.load.image('button_start','assets/startbutton.png',400,100);

		this.game.load.image('button_menu',"assets/menu_button.png")

		this.game.load.image('button_retry','assets/retry_button.png')

		this.game.load.image('title','assets/bananarama.png');

		this.game.load.image('target','assets/target.png');

		this.game.load.image('loser','assets/loser.png')

		this.game.load.spritesheet('monkey','assets/monkeysheet.png',47*2,46*2,2)   
	},

	create: function()
	{
		this.game.state.start('menu');
	}
}