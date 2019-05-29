$(document).ready( function() {
  $('body').keydown(function(event) {
    const aAudio = document.getElementById("aAudio");
    const bAudio = document.getElementById("bAudio");
    const cAudio = document.getElementById("cAudio");
    const dAudio = document.getElementById("dAudio");
    const eAudio = document.getElementById("eAudio");
    const fAudio = document.getElementById("fAudio");
    const gAudio = document.getElementById("gAudio");

    switch(event.key) {
      case 'a': 
        aAudio.play();
        break;
      case 'b':
        bAudio.play();
        break;
      case 'c':        
        cAudio.play();
        break;
      case 'd':        
        dAudio.play();
        break;
      case 'e':        
        eAudio.play();
        break;
      case 'f':        
        fAudio.play();
        break;
      case 'g':        
        gAudio.play();
    }
  });
});





