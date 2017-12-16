$(() => {

  $('#red-button, #two-answer').on('click', (arguments) => {
    alert('Correct!');
  });

  $('#two-button').on('mouseover' , (arguments) => {
    const randomnum1 = Math.random()*100;
    const randomnum2 = Math.random()*100;
    const config = {
      left: randomnum1 + '%',
      top: randomnum2 + '%',
      position: 'absolute'
    }

    $('#two-button').css(config);
  });

});
