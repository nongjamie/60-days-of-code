$( () => {

  let turn = 7;
  let isGameFinish = false;

  // Lsit of the words.
  const arrayOfWord = [ 'probability' , 'distribution' , 'software' , 'binomial' , 'discrete' , 'counting' ];

  // Select the word randomly.
  const selectWord = arrayOfWord[ Math.floor( Math.random()*arrayOfWord.length ) ];

  // Array of the key answer.
  let keyAnswer = [];
  for( let i = 0 ; i < selectWord.length ; i++ ) {
    keyAnswer[i] = selectWord.charAt(i);
  }

  // Array of the player answer.
  let playerAnswer = [];
  for( let i = 0 ; i < selectWord.length ; i++ ) {
    playerAnswer[i] = '_';
  }

  // Find the letter, Is it in the key answer?
  const findLetter = (letter) => {
    if( !isGameFinish ) {
      for( let i = 0 ; i < selectWord.length ; i++ ) {
        if( keyAnswer[i] === letter ) {
          return true;
        }
      }
      return false;
    }
  };

  // Fill the letter into the player answer.
  const fillLetter = (letter) => {
    if( !isGameFinish ) {
      for( let i = 0 ; i < selectWord.length ; i++ ){
        if( keyAnswer[i] == letter ) {
          playerAnswer[i] = letter;
        }
      }
    }
  };

  // Is player win?
  const isWin = () => {
    if( !isGameFinish ) {
      for( let i = 0 ; i < selectWord.length ; i++ ) {
        if( playerAnswer[i] === '_' ) {
          return false;
        }
      }
      return true;
    }
  };

  // Update the turn section.
  const displayTurn = () => {
    if( !isGameFinish ) {
      if( turn >= 0 ) {
        $('#num-turn').html(turn + '');
      }
      else {
        isGameFinish = 1;
      }
    }
  };

  // Update the word section.
  const displayWord = () => {
    if( !isGameFinish ) {
      let tempWord = '';
      for( let i = 0 ; i < selectWord.length ; i++ ) {
        tempWord = tempWord + playerAnswer[i] + ' ';
      }
      $('#player-guess-display').html(tempWord+'');
      if( isWin() ) {
        isGameFinish = true;
        turn = 9;
        console.log('Game is finish');
      }
      switch( turn ) {
        case 7:
          $('#status-image').attr('src', '../Day6/image/Day6-image.001.jpeg');
          break;
        case 6:
          $('#status-image').attr('src', '../Day6/image/Day6-image.002.jpeg');
          break;
        case 5:
          $('#status-image').attr('src', '../Day6/image/Day6-image.003.jpeg');
          break;
        case 4:
          $('#status-image').attr('src', '../Day6/image/Day6-image.004.jpeg');
          break;
        case 3:
          $('#status-image').attr('src', '../Day6/image/Day6-image.005.jpeg');
          break;
        case 2:
          $('#status-image').attr('src', '../Day6/image/Day6-image.006.jpeg');
          break;
        case 1:
          $('#status-image').attr('src', '../Day6/image/Day6-image.007.jpeg');
          break;
        case 0:
          $('#status-image').attr('src', '../Day6/image/Day6-image.008.jpeg');
          break;
        default:
          $('#status-image').attr('src', '../Day6/image/Day6-image.009.jpeg');
          break;
      }
    }
  };

  // Intialize the image and word.
  displayWord();

  // Receive the letter from the user and check it.
  $('#input-field').on( 'input' , () => {
    if( !isGameFinish ) {
      let playerInput = $('#input-field').val();
      if( findLetter( playerInput ) ) {
        fillLetter( playerInput );
      }
      else {
        turn--;
      }
      displayTurn();
      displayWord();
      $('#input-field').val('');
    }
  } );

} );
