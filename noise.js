$(document).ready( function() {
  $('body').keydown(function(event) {
    const audioKey = `${event.key}Audio`
    const audio = document.getElementById(audioKey);
    audio.play();
  });
});





