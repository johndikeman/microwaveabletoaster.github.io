window.onload = function() {
  var ctx = new (window.AudioContext||window.webkitAudioContext)();
  var audio = document.querySelector('audio');
  var output = document.getElementById("output");
  var audioSrc = ctx.createMediaElementSource(audio);
  var analyser = ctx.createAnalyser();
  // we have to connect the MediaElementSource with the analyser 
  audioSrc.connect(analyser);
  // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
 
  // frequencyBinCount tells you how many values you'll receive from the analyser
  var frequencyData = new Uint8Array(analyser.frequencyBinCount);
 
  // we're ready to receive some data!
  // loop

  function init(){
    for(var a=0;a<frequencyData.length;a++){ 
      console.log(a);
      var div = document.createElement('span');
      div.innerHTML = a;
      document.getElementsByTagName('body')[0].appendChild(div);
    }
  }

  function renderFrame() {
     requestAnimationFrame(renderFrame);

     // update data in frequencyData
     analyser.getByteFrequencyData(frequencyData);
     // render frame based on values in frequencyData
     //output.innerHTML = Array.apply([], frequencyData).join(",");
  }
  analyser.connect(ctx.destination);
  init();
  renderFrame();


  
};

