var lose_state={
	create: function()
	{
		this.game.add.sprite(200,200,'loser')
		var style = { font: "60px Arial", fill: "#ffffff"};
		this.game.add.text(200, 300, "score: "+play_state.score, style);

		this.game.add.button(100,400,'button_retry',this.retry)
		this.game.add.button(100,600,'button_menu',this.menu)
	},

	retry: function()
	{
		this.game.state.start('load');
	},

	menu: function()
	{
		this.game.state.start('load');
	}
}