var theater = new TheaterJS();
theater
	.on('say:end',function(){
		$('#mainBody')
			.css('visibility','visible')
			.addClass('animated fadeIn');
		})

	.describe("john", { speed: .9, accuracy: .6, invincibility: 4 }, "#title")
	.write("john:lil brother softworks.", 1000)

