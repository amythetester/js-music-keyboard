$(document).ready( function() {

  // allows user to use keyboard to create audible notes
  $('body').keydown(function(event) {
    const eventKey = event.key.toLowerCase();
    const audioKey = `${eventKey}Audio`;
    const audio = document.getElementById(audioKey);
    audio.play();
  });

  // click note helper function
  const clickedButton = function clickedButton(note) {
    $(`button.note.${note}`).click(function() {
      const audio = document.getElementById(`${note}Audio`);
      audio.play();
    });
  }

  clickedButton('a');
  clickedButton('b');
  clickedButton('c');
  clickedButton('d');
  clickedButton('e');
  clickedButton('f');
  clickedButton('g');
});







