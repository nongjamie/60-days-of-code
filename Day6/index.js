$( () => {

  let turn = 7;
  let isGameFinish = false;

  // List of the words.
  const arrayOfWord = [ 'probability' , 'distribution' , 'software' , 'binomial' , 'discrete' , 'counting' ];

  // Select the word randomly.
  const selectWord = arrayOfWord[ Math.floor( Math.random()*arrayOfWord.length ) ];

  // Array of the key answer.
  let keyAnswer = selectWord.split('');

  // Array of the player answer.
  let playerAnswer = ('_').repeat(selectWord.length).split('');

  // Find the letter, Is it in the key answer?
  const findLetter = (letter) => {
    if( !isGameFinish ) {
      return keyAnswer.includes( letter );
    }
  };

  // Fill the letter into the player answer.
  const fillLetter = (letter) => {
    if( !isGameFinish ) {
      for( let i = 0 ; i < selectWord.length ; i++ ){
        if( keyAnswer[i] == letter )
          playerAnswer[i] = letter;
      }
    }
  };

  // Is player win?
  const isWin = () => {
    if( !isGameFinish )
      return ( keyAnswer.join('') === playerAnswer.join('') );
  };

  // Update the turn section.
  const displayTurn = () => {
    if( !isGameFinish ) {
      if( turn >= 0 )
        $('#num-turn').html(turn + '');
      else
        isGameFinish = 1;
    }
  };

  // Update the word section.
  const displayWord = () => {
    if( !isGameFinish ) {
      let tempWord = '';
      for( let i = 0 ; i < selectWord.length ; i++ )
        tempWord = tempWord + playerAnswer[i] + ' ';
      $('#player-guess-display').html(tempWord+'');
      if( isWin() ) {
        isGameFinish = true;
        turn = -1;
        console.log('Game is finish');
      }
      $('#status-image').attr('src', '../Day6/image/Day6-image.00'+(8-turn)+'.jpeg' );
    }
  };

  // Intialize the image and word.
  displayWord();

  // Receive the letter from the user and check it.
  $(document).on( 'keydown' , () => {
    let letter = String.fromCharCode( event.keyCode ).toLowerCase();
    if( !isGameFinish ) {
      if( findLetter( letter ) ) fillLetter( letter );
      else turn--;
      displayTurn();
      displayWord();
      $('#input-field').val('');
    }
  } );

} );
