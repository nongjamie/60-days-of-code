$( () => {

  let score = 0;
  let newTurn = true;
  let lastClick;
  let emoji = [ '💩' , '🐝' , '🍙' , '🐒' , '🌚' ];

  const shuffle = ( myArray ) => {
    for( let i = myArray.length-1 ; i >= 0 ; i-- ) {
      let randomIndex = Math.floor( Math.random()*(i+1) );
      let temp = myArray[randomIndex];
      myArray[randomIndex] = myArray[i];
      myArray[i] = temp;
    }
    return myArray;
  };

  const buttonOpen = ( click ) => {
    $( '#'+click ).attr( 'class' , 'btn');
    $( '#'+click ).html( emoji[click] );
  };

  const buttonClose = ( click ) => {
    let showValue = parseInt( click )+1;
    $( '#'+click ).attr( 'class' , 'btn btn-primary');
    $( '#'+click ).html( showValue );
  };

  const initialized = () => {
    $.merge(emoji, emoji);
    shuffle( emoji );
    for( let i = 0 ; i < emoji.length/2 ; i++ ) {
      $('#card-section-1').append( '<button class="btn btn-primary" type="submit" id="'+i+'">'+(i+1)+'</button>' );
    }
    for( let i = 0 ; i < emoji.length/2 ; i++ ) {
      $('#card-section-2').append( '<button class="btn btn-primary" type="submit" id="'+(i+5)+'">'+(i+6)+'</button>' );
    }
    console.log( emoji );
  };

  initialized();

  $('button').on( 'click' , () => {
    if( newTurn ) {
      lastClick = event.target.id;
      buttonOpen( lastClick );
      newTurn = false;
    }
    else {
      let currentClick = event.target.id;
      buttonOpen( currentClick );
      if( ( emoji[lastClick] === emoji[currentClick] ) && ( lastClick != currentClick ) ) {
        score++;
        console.log('correct');
        $('#'+lastClick).attr( 'disabled' , true );
        $('#'+currentClick).attr( 'disabled' , true );
        $('#player-score').html( score );
      }
      else {
        console.log('wrong');
        let copyLastClick = lastClick;
        setTimeout( () => {
          buttonClose( copyLastClick );
          buttonClose( currentClick );
        }, 500 );
      }
      newTurn = true;
      lastClick = null;
    }
  } );

} );
