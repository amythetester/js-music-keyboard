$(document).ready( function() {
  $('body').keydown(function(event) {
    const eventKey = event.key.toLowerCase();
    const audioKey = `${eventKey}Audio`;
    const audio = document.getElementById(audioKey);
    audio.play();
  });
});





