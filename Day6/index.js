$( () => {

  let turn = 7;
  let gameFinish = 0;

  const arrayOfWord = [ 'probability' , 'distribution' , 'software' , 'binomial' , 'discrete' , 'counting' ];

  const selectWord = arrayOfWord[ Math.floor( Math.random()*arrayOfWord.length ) ];
  let keyAnswer = [];
  for( let i = 0 ; i < selectWord.length ; i++ ) {
    keyAnswer[i] = selectWord.charAt(i);
  }

  let playerAnswer = [];
  for( let i = 0 ; i < selectWord.length ; i++ ) {
    playerAnswer[i] = '_';
  }

  const findLetter = (letter) => {
    for( let i = 0 ; i < selectWord.length ; i++ ) {
      if( keyAnswer[i] === letter ) {
        return 1;
      }
    }
    return 0;
  };

  const fillLetter = (letter) => {
    if( gameFinish == 0 ) {
      for( let i = 0 ; i < selectWord.length ; i++ ){
        if( keyAnswer[i] == letter ) {
          playerAnswer[i] = letter;
        }
      }
    }
  };

  const isWin = () => {
    for( let i = 0 ; i < selectWord.length ; i++ ) {
      if( playerAnswer[i] === '_' ) {
        return 0;
      }
    }
    return 1;
  };

  const displayTurn = () => {
    if( gameFinish == 0 ) {
      if( turn >= 0 ) {
        $('#num-turn').html(turn + '');
      }
      else {
        gameFinish = 1;
      }
    }
  };

  const displayWord = () => {
    if( gameFinish == 0 ) {
      let tempWord = '';
      for( let i = 0 ; i < selectWord.length ; i++ ) {
        tempWord = tempWord + playerAnswer[i] + ' ';
      }
      $('#player-guess-display').html(tempWord+'');
      if( isWin() === 1 ) {
        gameFinish = 1;
        turn = 9;
        console.log('game is finish');
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

  displayWord();

  $('#a').on( 'click' , () => {
    if( findLetter('a') && (turn != 0) ) {
      fillLetter('a');
      displayWord();
      $('#a').attr('disabled');
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#b').on( 'click' , () => {
    if( findLetter('b') && (turn != 0) ) {
      fillLetter('b');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#c').on( 'click' , () => {
    if( findLetter('c') && (turn != 0) ) {
      fillLetter('c');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#d').on( 'click' , () => {
    if( findLetter('d') && (turn != 0) ) {
      fillLetter('d');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#e').on( 'click' , () => {
    if( findLetter('e') && (turn != 0) ) {
      fillLetter('e');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#f').on( 'click' , () => {
    if( findLetter('f') && (turn != 0) ) {
      fillLetter('f');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#g').on( 'click' , () => {
    if( findLetter('g') && (turn != 0) ) {
      fillLetter('g');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#h').on( 'click' , () => {
    if( findLetter('h') && (turn != 0) ) {
      fillLetter('h');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#i').on( 'click' , () => {
    if( findLetter('i') && (turn != 0) ) {
      fillLetter('i');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#j').on( 'click' , () => {
    if( findLetter('j') && (turn != 0) ) {
      fillLetter('j');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#k').on( 'click' , () => {
    if( findLetter('k') && (turn != 0) ) {
      fillLetter('k');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#l').on( 'click' , () => {
    if( findLetter('l') && (turn != 0) ) {
      fillLetter('l');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#m').on( 'click' , () => {
    if( findLetter('m') && (turn != 0) ) {
      fillLetter('m');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#n').on( 'click' , () => {
    if( findLetter('n') && (turn != 0) ) {
      fillLetter('n');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#o').on( 'click' , () => {
    if( findLetter('o') && (turn != 0) ) {
      fillLetter('o');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#p').on( 'click' , () => {
    if( findLetter('p') && (turn != 0) ) {
      fillLetter('p');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#q').on( 'click' , () => {
    if( findLetter('q') && (turn != 0) ) {
      fillLetter('q');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#r').on( 'click' , () => {
    if( findLetter('r') && (turn != 0) ) {
      fillLetter('r');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#s').on( 'click' , () => {
    if( findLetter('s') && (turn != 0) ) {
      fillLetter('s');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#t').on( 'click' , () => {
    if( findLetter('t') && (turn != 0) ) {
      fillLetter('t');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#u').on( 'click' , () => {
    if( findLetter('u') && (turn != 0) ) {
      fillLetter('u');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#v').on( 'click' , () => {
    if( findLetter('v') && (turn != 0) ) {
      fillLetter('v');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#w').on( 'click' , () => {
    if( findLetter('w') && (turn != 0) ) {
      fillLetter('w');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#x').on( 'click' , () => {
    if( findLetter('x') && (turn != 0) ) {
      fillLetter('x');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#y').on( 'click' , () => {
    if( findLetter('y') && (turn != 0) ) {
      fillLetter('y');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

  $('#z').on( 'click' , () => {
    if( findLetter('z') && (turn != 0) ) {
      fillLetter('z');
      displayWord();
    }
    else {
      turn--;
      displayTurn();
      displayWord();
    }
  } );

} );
