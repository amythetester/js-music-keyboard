$(document).ready( function() {

  // allows user to use keyboard to create audible notes
  $('body').keydown(function(event) {
    const eventKey = event.key.toLowerCase();
    const audioKey = `${eventKey}Audio`;
    const audio = document.getElementById(audioKey);
    audio.play();
  });

  // allows user to click on notes to create audible notes
  $('button.note.a').click(function() {
    const audio = document.getElementById('aAudio');
    audio.play();
  });

  $('button.note.b').click(function() {
    const audio = document.getElementById('bAudio');
    audio.play();
  });

  $('button.note.c').click(function() {
    const audio = document.getElementById('cAudio');
    audio.play();
  });

  $('button.note.d').click(function() {
    const audio = document.getElementById('dAudio');
    audio.play();
  });

  $('button.note.e').click(function() {
    const audio = document.getElementById('eAudio');
    audio.play();
  });

  $('button.note.f').click(function() {
    const audio = document.getElementById('fAudio');
    audio.play();
  });

  $('button.note.g').click(function() {
    const audio = document.getElementById('gAudio');
    audio.play();
  });
});







