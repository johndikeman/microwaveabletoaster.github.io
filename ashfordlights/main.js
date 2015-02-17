window.onload = function() {
    var ctx = new (window.AudioContext||window.webkitAudioContext)();
    var audio = document.querySelector('audio');
    var output = document.getElementById("output");
    
    var audioSrc = ctx.createMediaElementSource(audio);
    var analyser = ctx.createAnalyser();
    var filter = ctx.createBiquadFilter();
    filter.type = 'highshelf';
    filter.frequency.value = 7000;
    filter.gain.value = 50;

    // we have to connect the MediaElementSource with the analyser 
    audioSrc.connect(filter);
    filter.connect(analyser);
    audioSrc.connect(ctx.destination);
    // analyser.connect(ctx.destination);

    // frequencyBinCount tells you how many values you'll receive from the analyser
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // we're ready to receive some data!
    // loop

    var div = document.getElementById("pulse");


    function renderFrame() {
        total = count = 0;
        requestAnimationFrame(renderFrame);

        // update data in frequencyData
        analyser.getByteFrequencyData(frequencyData);
        // render frame based on values in frequencyData
        //output.innerHTML = Array.apply([], frequencyData).join(",");

        for(var a=0;a<frequencyData.length;a++){
            if(frequencyData[a]!=0)
                count+=1; total += frequencyData[a]
        }

        avrg = total/count;
        div.style.width = div.style.height = Math.floor(avrg);
        div.style.borderRadius = ''+Math.floor(Math.floor(avrg)/2)+'px';
        div.style.marginLeft = div.style.marginTop = -1*(Math.floor(avrg)/2)


    }

    renderFrame();



};

