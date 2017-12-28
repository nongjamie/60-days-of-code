$( () => {

  let name;
  let volume;
  let cost;
  let OE;
  let shelf_num;
  let img;

  let root = "http://192.168.1.36:8888";

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
      url: root + '/api/add',
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
      alert( response.responseText );
    })
    .always(function() {
      console.log("complete");
    });

    $('input').val('');
  } );

  $('#back-btn').on( 'click' , () => {
    window.location = root + '/listPage';
  } );

} );
