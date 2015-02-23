var theater = new TheaterJS();
theater
	.on('say:end',function(){
		$('#mainBody')
			.css('visibility','visible')
			.addClass('animated fadeIn');
		})

	.describe("john", { speed: .7, accuracy: .8, invincibility: 4 }, "#title")
	.write("john:lil brother softworks.", 750)

