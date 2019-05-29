$(document).ready( function() {

  // allows user to use keyboard to create audible notes
  $('body').keydown(function(event) {
    const eventKey = event.key.toLowerCase();
    const audioKey = `${eventKey}Audio`;
    const audio = document.getElementById(audioKey);
    audio.play();
  });

  // click note helper function
  const clickButton = function clickButton(note) {
    $(`button.note.${note}`).click(function() {
      const audio = document.getElementById(`${note}Audio`);
      audio.play();
    });
  }
  
  clickButton('a');
  clickButton('b');
  clickButton('c');
  clickButton('d');
  clickButton('e');
  clickButton('f');
  clickButton('g');
});







