$(() => {

  $('#red-button, #two-answer').on('click', (arguments) => {
    alert('Correct!');
  });

  $('#two-button').on('mouseover' , (arguments) => {
    let randomnum1 = Math.random()*100;
    let randomnum2 = Math.random()*100;
    $('#two-button').css('left', randomnum1 + '%');
    $('#two-button').css('top', randomnum2 + '%');
    $('#two-button').css('position', 'absolute');
  });

});
