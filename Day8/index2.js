$( () => {

  let name;
  let volume;
  let cost;
  let OE;
  let shelf_num;
  let img;

  const initialize = () => {
    name = $('#name').val();
    volume = $('#volume').val() + 'ml';
    cost = parseInt( $('#cost').val() );
    if( $('#OE').val() === 'yes') {
      OE = true;
    }
    else {
      OE = false;
    }
    shelf_num = parseInt( $('#shelf_num').val() );
    img = $('#img').val();
  };

  $('#add-btn').on( 'click' , () => {
    initialize();

    $.ajax({
      url: 'https://ske-minimart.herokuapp.com/api/add',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify( {
        name: name,
        volume: volume,
        cost: cost,
        OE: OE,
        shelf_num: shelf_num,
        img: img
      } )
    })
    .done(function( response ) {
      console.log("success");
    })
    .fail(function( response ) {
      console.log("error");
      console.log( response );
    })
    .always(function() {
      console.log("complete");
    });

    $('input').val('');
  } );

  $('#back-btn').on( 'click' , () => {
    window.location = '../Day8/index.html';
  } );

} );
