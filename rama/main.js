var width=window.innerWidth * window.devicePixelRatio;
var height=window.innerHeight * window.devicePixelRatio;


var game = new Phaser.Game(580,860, Phaser.AUTO, "game_div");
//game.scale.setExactFit()

game.state.add('load',load_state);
game.state.add('menu',menu_state);
game.state.add('play',play_state);
game.state.add('lose',lose_state);

game.state.start('load');