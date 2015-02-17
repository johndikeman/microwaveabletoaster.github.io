var menu_state=
{

	create: function()
	{
		this.game.add.sprite(0,200,'title')
		this.game.add.button(100,600,'button_start',this.moveOn) 
	},

	moveOn: function()
	{
		this.game.state.start('play')
	},		
}